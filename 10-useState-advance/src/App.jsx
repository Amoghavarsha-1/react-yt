// import { useState } from "react"

import { useState } from "react"

// const App = () => {
//   const [num, setNum] = useState({user:'Amogha',age:19})

//   const btnClicked = () =>{
//     const newNum = {...num} //destructing
//     newNum.user = 'Virat'
//     newNum.age = 18
//     setNum(newNum)
//   }

//   return (
//     <div className="p-10">
//       <h1>{num.user} and {num.age}</h1>
//       <button className="border bg-yellow-600" onClick={btnClicked}> Click Here</button>
//     </div>
//   )
// }

// export default App




const App = () => {

  const [arr, setArr] = useState([10,20,30])

  const changeArr = () =>{
    const newArr = [...arr]  //destructing
    newArr.push(99);
    setArr(newArr)
  }

  const [name, setName] = useState({user:'Amogha',age:19})

  const changeName = () =>{
    setName(prev=>({...prev,user:'Virat'}))
  }

  const [num, setNum] = useState(0)

  const incre_3 = () =>{
    // setNum(num+1);
    // setNum(num+1);
    // setNum(num+1)


    //React batches multiple setState calls for performance.
//The functional updater form (prev => prev + 1) ensures each call gets the latest state — perfect for counters or dependent updates.

    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
  }

  return (
    <div>
      <h1>{arr}</h1>
      <button className="border bg-yellow-600" onClick={changeArr}>Click me</button>
      <hr/>
      <br/>
      <h1>{name.user},{name.age}</h1>
      <button onClick={changeName} className="border bg-yellow-600">To Change</button>
      <hr/><br/>
      <h1>{num}</h1>
      <button onClick={incre_3} className="border bg-indigo-600">Increment by 3 using prev technique</button>
    </div>
  )
}

export default App