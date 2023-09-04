import React from 'react'
import { useDispatch } from 'react-redux'
import {user_photo} from '../stores/actions/userActions';


const Login = () => {

    const dispatch=useDispatch();

    const handleLogin=()=>{
        const user={
            photo:"https://thispersondoesnotexist.com/"
        }
        dispatch(user_photo(user))
    }
  return (
    <div className='container-fluid d-flex flex-column align-items-center gap-2 text-white border'>
        <p>Login</p>
        <input type="text" />
        <input type="text" />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login

