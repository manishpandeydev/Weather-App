
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { HashRouter } from "react-router-dom";
import  MainCard  from './Components/MainCard';

function App() {



  return (
    <>
      <HashRouter base="/">
        <MainCard />
      </HashRouter>
    


    </>
  )
}

export default App
