import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle("")
    setDetails('')
    
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white p-10'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }
      } className='flex gap-4 lg:w-1/2 flex-col  items-start p-10 ' >
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input
          type='text'
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 py-2 w-full  font-medium  h-32 border-2 outline-none rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white text-black active:bg-gray-300 font-medium  outline-none w-full px-5 py-2 rounded'>Add Notes</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 bg-gray-900 p-10' >

      <h1 className='text-3xl font-bold' >Return Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-full'>
          {task.map(function(elem,idx){

            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 text-black pt-9 pb-4 px-4 rounded-xl bg-cover bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")]'>
              <h3 className='leading-tight text-xl font-bold' >{elem.title}</h3>
              <p className='mb-10 leading-tight font-medium text-gray-500' >{elem.details}</p>
              <div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white px-5 rounded' >delete note</button>
              </div>
            </div>
          })}
        </div>
      </div>

    </div>

  )
}

export default App