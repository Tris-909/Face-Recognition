import React from 'react'
import Logo from '../Logo/Logo';

export default function Navigation({ onRouteChange, route }) {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <Logo />
           <p onClick={() => onRouteChange('signin')} className="f3 link dim white underline pa3 pointer" style={{textDecoration: 'none'}}>
               {route === "home" ? 'Sign Out' : ""}
            </p> 
        </nav>
    )
}
