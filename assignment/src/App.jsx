import React from "react";
import Heading from "./components/Heading";
import Addstudents from "./components/Addstudents";
import StudentsSummary from "./components/StudentsSummary";
import AllDetails from "./components/AllDetails";
import { useState } from "react";
function App() {
  const initialStudents = [
    { id:1, name: "Alok", score: 90 },
    { id:2, name: "Abhinav", score: 88 },
    { id:3, name: "Vikash", score: 78 },
    { id:4, name: "Vishal", score: 85 },
  ];
  const [students, setStudents] = useState(initialStudents);  
  const updatescore=(index,newscore )=>{
    const updated=students.map(s=>s.id === index+1 ?{ ...s,score:Number(newscore)}:s)
    setStudents(updated)
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 p-6 bg-gradient-to-br from-red-800 via-blue-800 to-gray-200 text-white">

      <Heading />
      <Addstudents students={students} setStudents={setStudents} />
      <StudentsSummary students={students} />
      <AllDetails students={students} updatescore={updatescore}/>
    </div>
  );

}

export default App;