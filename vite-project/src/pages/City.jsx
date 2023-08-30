import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero.jsx'

const City = () => {

    const [cities,setCities]=useState();

  useEffect(()=>{
  axios.get('http://localhost:7000/api/cities?name=')
  .then(response => setCities(response.data.cities))
  .catch(err =>console.log(err))
  }, []);

    const {id}= useParams();

    const idd=cities?.find(city=>city._id===id)

console.log(idd?.name)

  return (
    <Hero title={idd?.name} image={idd?.image}/>
  )
}

export default City