import React from 'react'
import'./InputBar.css'
import infoService from '../../services/infoService';

export const InputBar = (props) => {
  const { startDate, endDate, userToken, changeStartDate,
     changeEndDate, changeUserToken, search } = props;

     
  return (
    <div>
      <form onSubmit={search}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label >Start Date<span role="img" aria-label="calendar">&#128197;</span></label>
            <input type="date" value={startDate} onChange={changeStartDate} 
            min="2017-05-01" max="2017-06-15" className="form-control" id="inputEndDate" />
          </div>
          <div className="form-group col-md-4">
            <label >End Date<span role="img" aria-label="calendar">&#128197;</span></label>
            <input type="date" value={endDate}  onChange={changeEndDate} 
            min="2017-05-01" max="2017-06-15" className="form-control" id="inputStartDate" />
          </div>
          <div className="form-group col-md-4">
            <label >Access Token <span role="img" aria-label="spy and handshake"> &#128373; &#129309;</span> </label>
            <input type="text" value={userToken} onChange={changeUserToken}
            placeholder={infoService.userTokenFromLocalStorage()? "" : "type in user token"}
            className="form-control" id="inputToken"  />
          </div>
        </div>
        <button type="submit" className="btn btn-dark">Search</button>
      </form>

    </div>
  )
 
}
