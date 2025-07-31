import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Event from './Event.jsx'
import Counter from './Counter.jsx'
import Sum2 from './Sum2.jsx'
import Hooksdemo from './Hooksdemo.jsx'
import Sumdemo2 from './Sumdemo2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Event/>
    <Counter/> */}
    {/* <Sum2/> */}
    {/* <Hooksdemo/> */}
    <Sumdemo2/>
  </StrictMode>,
)
