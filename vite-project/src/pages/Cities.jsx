import React from 'react'
import Card from '../components/Card.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Error from '../components/Error.jsx'


const Cities = () => {

  const [cities,setCities]=useState();

  useEffect(()=>{
  axios.get('http://localhost:7000/api/cities?name=')
  .then(response => setCities(response.data.cities))
  .catch(err =>console.log(err))
  }, []);

  const handleInputChange= async(city)=>{
    try
    {
      const response= await axios.get(`http://localhost:7000/api/cities?name=${city.target.value}`)
      setCities(response.data.cities)
  } catch(error){
    console.log(error)
  }
  }



  return (
    <>
    <h1>This is the city</h1>
    <input onChange={handleInputChange} type="text" defaultValue="Type here" />
    <div className="cards-container">
    {
      cities?.map((city)=>{
        return(
          <Link key={city._id} to={`/cities/${city._id}`}>
          <Card name={city.name} image={city.image}/>
          </Link>
        )
      })
      
      }
    
    
    </div>
    </>
    
  )
}

export default Cities