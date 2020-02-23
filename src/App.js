import React, { useState, useEffect } from 'react'
import './App.css'
import infoService from './services/infoService'
import DisplayBoxes from './components/DisplayBoxes/DisplayBoxes'
import { DayList } from './components/DayList/DayList'
import { Pagination } from './components/Pagination/Pagination'
import { InputBar } from './components/InputBar/InputBar'
import Notification from './components/Notification/Notification'

const App = () => {
  const [userToken, setUserToken] = useState("")
  const [data, setData] = useState([]);//data from search
  const [days, setDays] =useState([]);//by_date array extracted from the data we get from backend
  const [currentPage, setCurrentPage] = useState(1);//the current page we are on
  const [daysPerPage] = useState(5);//how many days to render per page of Pagination
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [message, setMessage] = useState(null)//notification message

  //fetch data from API
  const fetchData = (start,end) => {
    infoService.getData(start, end)
    .then(response =>{
      setData(response)
      setDays(response.by_date)
      setCurrentPage(1)

      createNotification(`${response.by_date.length} days in result`, true)
    })
    .catch(error => {
      console.error('An error ' + error.message);
      createNotification(`Something went wrong. ${!infoService.userTokenFromLocalStorage()? "UserToken is currently null": ""} `, false)
    })
  }
  
  const paginate =(pageNumber) => setCurrentPage(pageNumber)

  const createNotification = (notificationMessage, positive) => {
    //creates a notification prompt that lasts 5 seconds
    setMessage({message: notificationMessage, positive: positive});
      setTimeout(() => {
        setMessage(null);
      }, 5000);
  }

  //Values for the pagination numbers
  const indexOfLastPost = currentPage * daysPerPage;
  const indexOfFirstPost = indexOfLastPost - daysPerPage
  const currentDays = days.slice(indexOfFirstPost, indexOfLastPost);

  const valuesArr = [//if values have been fetched, display them else display a "-"
    {valueName:"Total Conversations", value: data? data.total_conversation_count: "-"},
    {valueName:"Total User Messages", value: data? data.total_user_message_count: "-"},
    {valueName:"Total Visitor Messages", value: data? data.total_visitor_message_count: "-"}
  ]

  const removeToken= () => {
    infoService.removeTokenFromStorage()
    window.location.reload();

    createNotification("User token has been removed", true)
  }

  //method to get values from local storage to avoid repeated code
  const startDateFromLocalStorage = () =>window.localStorage.getItem("start date")
  const endDateFromLocalStorage = () =>window.localStorage.getItem("end date")

  //onStart, fetch based on values saved in local storage or on first time use arbitrary values
  const getWithStorageDataHook = () => {
    setStartDate(startDateFromLocalStorage() || "2017-05-01");
    setEndDate(endDateFromLocalStorage() || "2017-06-10")

    fetchData(startDateFromLocalStorage() || "2017-05-01", endDateFromLocalStorage() || "2017-06-10");
  }
  useEffect(getWithStorageDataHook, [])

  const handleStartDateChange =(event) =>{
    console.log("start date ", event.target.value)
    setStartDate(event.target.value)
    window.localStorage.setItem("start date", event.target.value)
  }
  const handleEndDateChange =(event) =>{
    console.log("end date ", event.target.value)
    setEndDate(event.target.value)
    window.localStorage.setItem("end date",  event.target.value)
  }
  const handleUserTokenChange =(event) =>{
    setUserToken(event.target.value)
    infoService.setUserToken(event.target.value)
    //console.log("token in onChange", event.target.value);
    window.localStorage.setItem("user token",  event.target.value)
  }

  const searchForData =(event)=>{
    event.preventDefault()
    fetchData(startDate,endDate);
    //clear user token from view for secutity reasons, it is saved to local stoarge
    setUserToken("")
  }
  //TODO: add button to remove token from memory(you know for security reasons)

  return (
    <div className="container">
      <InputBar startDate={startDate} endDate={endDate} userToken={userToken}
        changeStartDate={handleStartDateChange} changeEndDate={handleEndDateChange} 
        changeUserToken={handleUserTokenChange} search={searchForData}
        removeToken={removeToken}/>

      <Notification msg={message}/>
      <DisplayBoxes valuesArr={valuesArr}/>
      <DayList days={data? currentDays : []}
      pageNumber={currentPage} daysPerpage={daysPerPage}/>
      <Pagination totalDays={days.length} currentPage={currentPage}
      daysPerPage={daysPerPage} paginate={paginate}/>
    </div>
  )
}

export default App
