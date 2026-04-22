import React,{useState} from "react";

function Addstudent( {students,setStudents} ) { 
  const [newStudentName, setNewStudentName] = useState({
        id:"",
        name:"",
        score:""
  })
  const handleNamechange = (value,index)=>{
    setNewStudentName(s=>({
      ...s,
      id:index+1,
      name:value
    }))
  }
  const handleScoreChange=(value,index)=>{
    setNewStudentName(s=>({
      ...s, score:value
    }))
  }
  const submitStudent= ()=>{
    setStudents([...students,newStudentName])
    setNewStudentName({id:"", name:"", score:""})
  }

  return (
  <div>
     <div className="flex border border-[#f] p-5 justify-between items-center bg-[#000000]">
        <span className="text-[#ffffff] text-xs">STUDENT RECORDS</span>
        <span className="text-[#ffffff] text-xs">4 Entries</span>
      </div>
      <div className="w-200 flex flex-col">
        <div className="flex justify-between item-center text-[#ffffff] border-0 border-[#ffffff] border-b-1 py-3 px-4"></div>
      </div>
      <div className="text-[#ffffff] flex border-0 border-[#] p-5 bg-gradient-to-b from-[#] to-[#000000]">
          <input type="text" placeholder="STUDENT NAME" className="flex-1 p-5  outline-none " value={newStudentName.name} onChange={(e)=>handleNamechange(e.target.value)} />
          <input type="text" placeholder="STUDENT SCORE" className="flex-1 p-5  outline-none " value={newStudentName.score} onChange={(e)=>handleScoreChange(e.target.value)} />
          <button className="w-30 p-5 border-1 cursor-pointer border-t-[#0000000] hover:bg-[#000000] hover:text-[#ffffff]" onClick={submitStudent}>+Add</button>   
      </div>
  </div>
  );
}

export default Addstudent;