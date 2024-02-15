import React from 'react'
import './MainCard.css'

import Content from './Content'
import { useState } from 'react'
import axios from 'axios'

const MainCard = () => {
  const [name, setName] = useState('');

  const [data, setData]=useState({celcius:"N/A",
    name:"Country",
    humidity:"N/A",
    speed:"N/A",
    })


    const handleClick= ()=>{
console.log("clicked")
      if(name !== ""){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ea364ff8a4ba299bc0c5c5577bd517a2&&units=metric`;

        axios.get(apiUrl)
        .then(res =>
          {
            setData({...data,name : res.data.name,celcius:res.data.main.temp, humidity:res.data.main.humidity, speed:res.data.wind.speed})

          });
      }else{
        alert("Please Enter Your City Name!!")
      }

    }

  return (
    <div className='card-body'>
      <h1 style={{textAlign:"center",height:"0.5rem",
      padding:"1rem",
      color:"white",fontFamily:"sans-serif",letterSpacing:"8px"}}>Weather App</h1>
 <div>
      <input placeholder='Enter Your Country/City' className='search-box' type='text' onChange={(e)=> setName(e.target.value)}></input><br/>
      <button type='button' onClick={handleClick}>Search</button>
    </div>

      <Content data={data}/>

    </div>
  )
}
export default MainCard;
