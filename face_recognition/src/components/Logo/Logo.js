import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';

export default function Logo() {
    return (
        <div className="ma4 nt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                <img src="https://img.icons8.com/nolan/64/brain.png" alt="Logo" style={{width: '90px'}}/>
                </div>
            </Tilt>
        </div>
    )
}
