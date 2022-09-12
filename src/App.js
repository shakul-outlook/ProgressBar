import React from 'react';
import './App.css';
import { Stack, StackItem } from "@fluentui/react";
import ProgressBar from "./ProgressBar";

import { EditingProgressSteps } from "./EditingProgressSteps";
import StackTest from "./StackTest";


import { useContactsQuery, useContactQuery,useAddContactMutation, useUpdateContactMutation,
  useDeleteContactMutation,useStatusQuery } from './services/contactsApi';
import { useEffect, useState } from "react";
// const testData = [
//   { bgcolor: "#6a1b9a", completed: 60 },
//   { bgcolor: "#00695c", completed: 30 },
//   { bgcolor: "#ef6c00", completed: 53 },
// ];
let interval = undefined;
function App() {
  const [skip, setSkip] = useState(false)
  const { data, error, isLoading, isFetching,isSuccess, refetch } =
   useContactsQuery("",{pollingInterval: 1000, skip: skip});
  console.log(data);
  console.log(error);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState("Starting");



  // setProgress((prev) => {
  //   if(prev===100)
  //   return prev;

  //   return x});


  // useEffect(() => {
  //   // console.log("In running effect");
  //   // console.log(running);
  //   if (running) {
  //     interval = setInterval(() => {
  //       setProgress((prev) => {
  //         if(prev===100)
  //         return prev;

  //         return prev + 1});
  //     }, 10);
  //   } else {
  //     clearInterval(interval);
  //   }
  // }, [running]);

  useEffect(() => {
    // console.log("In Progress effect");
    // console.log(progress);
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);
  useEffect(() => {
    console.log("In data effect");
    console.log(data);
let x;
let message;
  if (!data)
  {
    x=0;
    message="Starting";
  }
  else if(data.status === EditingProgressSteps.NONE )
  {
x=25;
message="doing something";
  }
  else  if(data.status === EditingProgressSteps.COPY )
  {
x=50;
message="doing copy";
  }
  else  if(data.status === EditingProgressSteps.UPLOAD )
  {
    x=75;
    message="doing upload";
  }
  else
  {
    message="done done";
  x=100;
  setSkip(true);
  }
  console.log("x=",x);
  setProgressMessage((prev) => {
    // if(prev===100)
    // return prev;

    return message});
  setProgress((prev) => {
    // if(prev===100)
    // return prev;

    return x});
  }, [data]);
  // return (
  //   <div className="App">
  //     {testData.map((item, idx) => (
  //       <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
  //     ))}
  //   </div>
  // );

  // if(!data)
  // return;
  const contain = {
    border: "0.5rem solid yellow",
    // length:"150rem",
    // width:"50rem",
    margin:"5rem"
  }

  return (<div>
      <button
        onClick={() => {
          setRunning(false);
          setProgress(0);
        }}
      >
        Clear
      </button>
      <button onClick={() => setSkip(!skip)}>
        {skip ? "Start" : "Stop"}
      </button>
      <button onClick={() => setSkip(!skip)}>
        {skip? "Start Polling":"Stop Polling"}
      </button>
      <Stack style={contain}>
      <ProgressBar bgcolor={"#6a1b9a"} completed={progress} progressMessage={progressMessage}/>
      </Stack>
  </div> );

  // return (<StackTest/>);
}

export default App;
