import React, { useState } from 'react'

function List() {
   const[iterms ,setiterms]=useState([
    {
      id:1,
      name:"sathis",
      village:"rakwana"
    },
    {
      id:2,
      name:"vikki",
      village:"peliyagoda"
    },
    {
      id:3,
      name:"ragul",
      village:"rathnapure"
    }
    ,
    {
      id:4,
      name:"rawana",
      village:"colombo"
    }
])

  return (
    <div> 
      <ul style={{ listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'}}>
        {iterms.map((item) =>{
          return(
          <li  >
            <h1>{item.id}    {item.name} form {item.village} </h1>
        
          </li>)
        })}
      </ul>
    </div>
  )
}

export default List