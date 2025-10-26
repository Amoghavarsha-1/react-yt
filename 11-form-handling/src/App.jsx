import React from 'react'

const App = () => {


  const submitHandler = (e) =>{
    e.preventDefault();
      console.log("Submitted")
      
  }


  return (
    <div>
    <form className='p-10 20 m-10' onSubmit={submitHandler}>
      <input type="text" placeholder='Enter your name'/>
      <button className='bg-yellow-500 border' >Submit</button>
    </form>
    </div>
  )
}

export default App