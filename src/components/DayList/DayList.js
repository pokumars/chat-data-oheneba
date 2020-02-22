import React from 'react'
import './DayList.css'
import { Table } from 'react-bootstrap'

export const DayList = (props) => {
  const { days, pageNumber, daysPerpage } = props

  return (
    <div >
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date </th>
      <th>Conversations</th>
      <th>Missed Chats</th>
      <th>Visitors with Conversation</th>
    </tr>
  </thead>
  <tbody>
    {
      days  && days.map((day, index) => {
        return <tr key={day.date}>
          <td>{((pageNumber-1)*daysPerpage)+ index +1}</td>
          <td>{new Date(day.date).toDateString()}</td>
          <td>{day.conversation_count}</td>
          <td>{day.missed_chat_count}</td>
          <td>{day.visitors_with_conversation_count}</td>
        </tr>
      })
    }

    
   
  </tbody>
</Table>
      
    </div>
  )
}
