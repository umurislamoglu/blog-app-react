import React from 'react'
import {login} from '../actions/AuthActions'

const LoginPage = () => (
    
    <div className="d-flexflex-column  bd-highlight text-center mt-5  " >
        <p className="p-2 bd-highlight px-5 mt-3 ">Log In with Google</p>
        <button className="btn btn-primary p-2 bd-highlight px-5 mt-3" onClick = {login}>Login</button>
        
    </div>
)

export default LoginPage
