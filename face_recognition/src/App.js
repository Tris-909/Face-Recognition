import React, {useState ,Fragment} from 'react';

import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import SpinnerLoading from './components/Spinner/Spinner';

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
  const [boundingBox, setBoundingBox] = useState([]);
  const [loading, setLoading]  = useState(false); 
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState({
    id: '',
    namme: '',
    email: '',
    entries: 0,
    joined: ''
  });

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    setLoading(true);
    setImageUrl(input);

    const Clarifai = require('clarifai');
      
    // Instantiate a new Clarifai app by passing in your API key.
    const app = new Clarifai.App({apiKey: 'f7a07536db1144a2976fffdbe7ca41cd'});
    // Predict the contents of an image by passing in a URL.
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => {
        setBoundingBox(response.outputs[0].data.regions);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  const onRouteChange = (route) => {
    setRoute(route)
  }

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    });
  }

  const MainContent = (
      <Fragment>
        <Rank />
        <ImageLinkForm onInputChagne={(e) => onChangeHandler(e)} input={input} onSubmit={onButtonSubmit} />
        { loading === true ?  <SpinnerLoading /> : ( imageUrl.length > 0 ? <FaceRecognition imageUrl={imageUrl} boundingBox={boundingBox} /> : null ) } 
      </Fragment>
  );

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation onRouteChange={onRouteChange} route={route} />
      { route === 'home' ? MainContent : null}
      { route === 'signin' ? <SignIn onRouteChange={onRouteChange} /> : null }
      { route === 'register' ? <Register onRouteChange={onRouteChange} loadUser={loadUser} /> : null }
    </div>
  );
}

export default App;
