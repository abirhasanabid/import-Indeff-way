import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Watch from './component/Watch/Watch';
// import Sunglass from './component/Sunglass/Sunglass'

function App() {

  // const watches = [
  //   {id:1,name: 'Apple Watch', price: '100000'},
  //   {id:2,name: 'Samsung Watch', price: '50000'},
  //   {id:3,name: 'Mi Watch', price: '20000'}
  // ]

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('./watchData.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, []);

  return (
    <>
      {
        watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
