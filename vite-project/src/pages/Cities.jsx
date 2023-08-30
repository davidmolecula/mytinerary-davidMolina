import React from 'react'
import Card from '../components/Card.jsx'
import axios from 'axios'
import { useEffect,useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import Error from '../components/Error.jsx'


const Cities = () => {

  const [cities,setCities]=useState();
  let inputSearch=useRef();

  useEffect(()=>{
  axios.get('http://localhost:7000/api/cities?name=')
  .then(response => setCities(response.data.cities))
  .catch(err =>console.log(err))
  }, []);

  const handleSearch= async(city)=>{
    console.log(inputSearch)
    try
    {
      const response= await axios.get(`http://localhost:7000/api/cities?name=${inputSearch.current.value}`)
      setCities(response.data.cities)
  } catch(error){
    if(error.response.status===404){
      setCities([])
    }else{
          console.log(error)
    }
  }
  }



  return (
    <>
    <h1>This is the city</h1>
    <input ref={inputSearch}  type="text" placeHolder="Type here" />
    <button onClick={handleSearch}>Buscar</button>
    <div className="cards-container">
    {
      cities?.length>0
      ?cities?.map((city)=>{
        return(
          <Link key={city._id} to={`/cities/${city._id}`}>
          <Card name={city.name} image={city.image}/>
          </Link>
        )
      })
      : <div className="cards-container text-white"><h2>No se encontraron eventos</h2></div>
      
      }
    
    
    </div>
    </>
    
  )
}

export default Cities