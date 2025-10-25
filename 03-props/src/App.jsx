import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Amogha" age = {19} img ="https://images.unsplash.com/photo-1761165308325-e54c62985813?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"/>
      <Card user="Sanket" age = {28} img = "https://images.unsplash.com/photo-1760681554254-f8e6f8e2f482?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>
      <Card user="Gaurav" age = {33} img = "https://plus.unsplash.com/premium_photo-1758726036202-144e34ce0f18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
    </div>
  )
}

export default App