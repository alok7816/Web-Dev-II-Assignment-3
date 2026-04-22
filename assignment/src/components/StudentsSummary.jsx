import React from "react";

function StudentsSummary({ students }) {
  
  const getTotalStudents = () => {
    return students.length;
  };

  const getPassedStudents = () => {
    return students.filter(student => student.score >= 50).length;
  };

  const getAverageScore = () => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + parseInt(student.score || 0), 0);
    return Math.round(total / students.length);
  };
 

  return (
    <div className="w-200 flex item-center justify-between border border-0 p-5 bg-gradient-to-b from-[#] to-[#000000]">
      <div className="flex flex-col border border-r-[#ffffff] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#ffffff]/10">
        <div className="flex flex-col">
          <span className="text-[#ffffff] text-sm">Total Students</span>
          <span className="text-[#ffffff] text-5xl font-bold">{getTotalStudents()}</span>
        </div>
        
          <span className="absolute left-0 bottom-0 h-[2px] w=0 bg-[#ffffff] transition-all duration -300 group-hover:w-full"></span>

        
        </div>
        <div className="flex flex-col border boorder-r-[#ffffff] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#ffffff]/10  ">
          <div className="flex flex-col">
              <span className="text-[#ffffff] ">Passed</span>
          <span className="text-[#ffffff] text-5xl font-bold">{getPassedStudents()}</span>
      </div>
      <span className="absolute left-0 bottom-0 h-[2px] w=0 bg-[#ffffff] transition-all duration -300 group-hover:w-full"></span>

    </div>
    <div className="flex flex-col  flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#]/10 ">
          <div className="flex flex-col">
              <span className="text-[#ffffff]  ">AVG SCORE</span>
          <span className="text-[#ffffff] text-5xl font-bold">{getAverageScore()}</span>
      </div>
      <span className="absolute left-0 bottom-0 h-[2px] w=0 bg-[#ffffff] transition-all duration -300 group-hover:w-full"></span> 
          
      </div>
    </div>
    )
}

export default StudentsSummary