import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/weather'

function App() {
  

  return (
    <div className="App mx-auto rounded-[3rem] bg-[url('https://manybackgrounds.com/images/hd/dreamy-anime-cloud-artwork-sgo1f4fewhr0j17l.jpg')] h-4/5 w-4/5">
        <Weather/> 
    </div>
  )
}

export default App
