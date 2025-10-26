import React from 'react'
import { useState } from 'react';

const App = () => {

const [title, setTitle] = useState("")
  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("Form Sumitted by",title)

    setTitle("")
  }

  

  return (
    <div>
    <form className='px-10 py-20 m-10' onSubmit={submitHandler}>
      <input type="text" 
      placeholder='Enter your name'
      value={title}
      onChange={(e)=>{setTitle(e.target.value);}} />
      <button className='bg-yellow-500 border' >Submit</button>
    </form>
    </div>
  )
}

export default App