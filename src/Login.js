import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
          <img 
            className="login__logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
            alt=""
          />
          <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login