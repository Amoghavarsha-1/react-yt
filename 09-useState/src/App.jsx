// import { useState } from "react"



// const App = () => {

//   const [num, setNum] = useState(10)
//   const [name, setName] = useState("Amogha")

// function change(){
//   setNum(99);
//   setName("Virat")
// }

//   return (
//     <div className="p-10" >
//     <h1>Hello num is {num} <br/> Name is {name} </h1>
//     <button className="bg-yellow-500" onClick={change} >Click me</button>
//     </div>
//   )
// }

// export default App


import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)

  function incre(){
    setCount(count+1)
  }
  const decre = ()=>{
    setCount(count-1)
  }


  return (
    <div className="p-20 text-2xl ">
    <h1>What's goin on...! {count} </h1>
    <button onClick={incre} className="m-10 p-2 border-2 bg-green-500">Increment</button>
    <button onClick={decre} className=" p-2 border-2 bg-red-500" >Decrement</button>
    </div>
  )
}

export default App
