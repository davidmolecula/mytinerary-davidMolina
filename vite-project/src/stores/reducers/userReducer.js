import { createReducer } from "@reduxjs/toolkit";
import  {get_users, user_photo} from "../actions/userActions.js";


const initialState={
    name:'pepe',
    photo:"https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png"
}

const userReducer=createReducer(initialState,   
    (builder)=>builder
    .addCase(get_users.fulfilled,(state,action)=>{
        return {
            ...state,
            users: action.payload.users
        }
    })
    .addCase(user_photo, (state,action)=>{
        return{
            ...state,
            photo: action.payload.photo
        }
    }))


    export default userReducer