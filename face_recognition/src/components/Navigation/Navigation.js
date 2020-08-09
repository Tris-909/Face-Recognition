import React from 'react'
import Logo from '../Logo/Logo';

export default function Navigation() {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <Logo />
           <p className="f3 link dim white underline pa3 pointer" style={{textDecoration: 'none'}}>Sign Out</p> 
        </nav>
    )
}
