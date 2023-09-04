import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const user_photo=createAction('user_photo',(obj)=>{
    console.log(obj)
    return {
        payload:{
            photo: obj.photo
        }
        
    }
})

export const get_users=createAsyncThunk('get_users',async()=>{
    try{
        const response=await axios.get('http://localhost:7000/api/users')

        return{
            users: response.data.users
        }
    } catch(error){
        console.log(error)

    }
})



