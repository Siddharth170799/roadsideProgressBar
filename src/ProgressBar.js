import React, { useEffect, useState } from "react";

const ProgressBar = ({ value,onComplete}) => {
  const [percent, setPercent] = useState(value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState(null);

useEffect(()=>{
setPercent(Math.min(100,Math.max(value,0)))
if(value >= 100){
  onComplete()
}
},[value])
console.log(value)
  

  // const click1 = () => {

  //   if (firstName != "" ) {
  //       setPercent((percent) => percent + 25);
  //       console.log(percent)
  //       if(percent == 25){
  //           setPercent(25);
  //       }
  //     if(lastName != null){
  //           setPercent((percent) => percent + 25);
  //           if(percent == 50){
  //               setPercent(50);
  //           }
  //           if(age !=null){

  //           setPercent((percent) => percent + 25);
  //           if(percent == 75){
  //               setPercent(75);
  //           }
  //           }if(country !=null){
  //               setPercent((percent) => percent + 25);
  //               if(percent == 100){
  //                   setPercent(100);
  //               }
  //           }
  //       }

  //   }

  //   if (percent == 100) {
  //     setPercent(Math.min(100, percent));
  //   }
  // };

  // const click1 = () => {
  //   if (firstName != "" && percent < 25) {
  //     setPercent((percent) => percent + 25);
  //   } else if (lastName != null && percent < 50) {
  //     setPercent((percent) => percent + 25);
  //   } else if (age != null && percent < 75) {
  //     setPercent((percent) => percent + 25);
  //   } else if (country != null && percent < 100) {
  //     setPercent((percent) => percent + 25);
  //   }

  //   if (percent == 100) {
  //     setPercent(Math.min(100, percent));
  //   }
  // };
  // console.log(percent);

  return (
    <>
      <div className="progress">
        {percent > 49 ? (
          <span style={{ color: "white" }}>{percent.toFixed()}%</span>
        ) : (
          <span style={{ color: "black" }}>{percent.toFixed()}%</span>
        )}
        <div style={{ width: `${percent}%` }}></div>
       
      </div>
      {/* <div>
        <div>Personal Details</div>
        <div>
          {" "}
          <div>What is Your First Name</div>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <button onClick={click1}>Submit</button>
        </div>
        <div>
          {" "}
          <div>What is Your Last Name</div>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <button onClick={click1}>Submit</button>
        </div>
        <div>
          {" "}
          <div>What is Your Age</div>
          <input type="text" onChange={(e) => setAge(e.target.value)} />
          <button onClick={click1}>Submit</button>
        </div>
        <div>
          {" "}
          <div>You're Country of Origin ?</div>
          <input type="text" onChange={(e) => setCountry(e.target.value)} />
          <button onClick={click1}>Submit</button>
        </div>
      </div> */}
    </>
  );
};

export default ProgressBar;
