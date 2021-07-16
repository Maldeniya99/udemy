import React from "react";

function Arrays() {
  const students = [
    {
      id: 1,
      name: "mark",
    },
    {
      id: 2,
      name: "mark2",
    },
    {
      id: 3,
      name: "mark3",
    },
  ];
  return (
    <div>
      <h1>arrays in react</h1>
      {students.map((student) => (
        <h1>{student.name}</h1>
      ))}
    </div>
  );
}

export default Arrays;
