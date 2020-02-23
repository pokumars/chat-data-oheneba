import React from "react";

const Notification = (props) => {
  const { msg } = props;
  if (msg === null){
    return null;
  }
  //The notification will be red or green depending on whether it is bad or not.
  const notificationStyle = {
    color: msg.positive? "#28a745" : "#dc3545",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 7,
    margin: 7,
    textAlign: "center"
  };

  //console.log(msg)

  return (
    <div style={notificationStyle}>
      <p>{msg.message}</p>
    </div>
  );
};

export default Notification;