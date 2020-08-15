import React from 'react'
import Logo from '../Logo/Logo';

export default function Navigation({ onRouteChange, route, SignOut }) {
    const SigningOut = () => {
        SignOut();
        onRouteChange('signin');
    }
    
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <Logo />
           <p onClick={() => onRouteChange('signin')} className="f3 link dim white underline pa3 pointer" style={{textDecoration: 'none'}}>
               {route === "home" ? <span onClick={() => SigningOut()}>Sign Out</span> : ""}
            </p> 
        </nav>
    )
}
