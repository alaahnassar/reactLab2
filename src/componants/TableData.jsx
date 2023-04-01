import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function TableData() {
let  [students,setStudents]=useState([]);
 const sendData=(student)=>{
    setStudents([...students,student])
 }
  return (
    <div>
        <Form sendData={sendData} />
        <Table students={students}/>
    </div>
  )
}

