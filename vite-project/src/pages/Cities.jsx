import React from 'react'
import Card from '../components/Card.jsx'
import axios from 'axios'
import { useEffect,useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import Error from '../components/Error.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {filter_cities, get_cities} from '../stores/actions/cityActions.js'



const Cities = () => {

  

  const cities=useSelector((cities)=>cities.cityReducer.cities)
  console.log("pepe")
  console.log(cities)

  const dispatch=useDispatch();

  let inputSearch=useRef();


  useEffect(()=>{
      dispatch(get_cities())
  }, []);

  const handleSearch= (city)=>{
 
      dispatch(filter_cities({
        name:inputSearch.current.value
      }))
  
  }



  return (
    <>
    <h1>This is the city</h1>
    <input ref={inputSearch}  type="text" placeholder="Type here" />
    <button onClick={handleSearch}>Buscar</button>
    <div className="cards-container">
    {
      cities?.length>0
      ?cities?.map((city)=>{
        return(
          <Link key={city._id} to={`/itineraries/${city._id}`} className='link-unstyled link-unstyled:link link-unstyled:hover text-white'>
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