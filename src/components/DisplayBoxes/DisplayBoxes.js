import React from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./DisplayBoxes.css";

const DisplayBoxes = (props) => {
  const { valuesArr } = props;

  return (
    <div className="displayBoxes">

      {//render the big 3 display boxes based on the array passed in through props.
        valuesArr.map((v)=> {
          return <DisplayBox key={v.valueName} value={v.value} valueName={v.valueName}/>;
        })
      }
    </div>
  );
};

export default DisplayBoxes;
