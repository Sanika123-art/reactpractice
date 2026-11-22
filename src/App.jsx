import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const arr=[
    { name: "Sanika", age: 20 },
  { name: "Kamini", age: 21 },
  { name: "Rahul", age: 22 },
  { name: "Priya", age: 19 }

  ];
  return (
    <div className='container'>
     

   

{arr.map(function(elem)
    {
     return <Card user={elem.name} age={elem.age} />
    })}
   
    </div>
  )
}

export default App
