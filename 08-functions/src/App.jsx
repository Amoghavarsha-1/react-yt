import React from 'react'

const App = () => {

  function btn(){
    console.log("Clicked")
  }
  function dbtn(){
    console.log("Mouse clicked Double")
  }
  function mouseEnter(){
    console.log("Mouse entered")
  }

  const pageScrolling = ()=>{
    console.log("page Scrolling")
  }

  return (
    <div>
      <button className='bg-red-300 m-10' onClick={btn} onDoubleClick={dbtn} onMouseEnter={mouseEnter}>Click Here</button>
      <button className='bg-blue-300' onClick={function(){
        console.log("Hello Guys")
      }} >Hey Hey</button>



      <input className='border-2 border-indigo-600 p-1 m-10 rounded-xs' onChange={function(elem){
        console.log(elem.target.value);
      }}
      type="text"
      placeholder = 'Enter name' />



      <div className='bg-blue-500 border-2 border-black-700 w-48 h-48 ml-20' onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }}>

      </div>
      

    <div onWheel={pageScrolling}>
      <div className="h-[50vh] w-[100%] bg-red-500"></div>
      <div className="h-[50vh] w-[100%] bg-gray-500"></div>
      <div className="h-[50vh] w-[100%] bg-green-400"></div>
    </div>
    </div>
  )
}

export default App



