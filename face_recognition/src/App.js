import React, {useState} from 'react';

import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

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
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setImageUrl(input);

    const Clarifai = require('clarifai');
      
    // Instantiate a new Clarifai app by passing in your API key.
    const app = new Clarifai.App({apiKey: 'f7a07536db1144a2976fffdbe7ca41cd'});
    
    // Predict the contents of an image by passing in a URL.
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => {
        console.log(response.outputs[0].data.regions);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChagne={(e) => onChangeHandler(e)} input={input} onSubmit={onButtonSubmit} />
      {imageUrl.length > 1 ?  <FaceRecognition imageUrl={imageUrl} /> : null}
    </div>
  );
}

export default App;
