import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = 
  {
	    "particles": {
	        "number": {
	            "value": 150
	        },
	        "size": {
	            "value": 4  
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}


function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/* <Image />  */}
    </div>
  );
}

export default App;
