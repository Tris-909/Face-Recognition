import React, { useState } from 'react'
import axios from 'axios';

export default function SignIn({onRouteChange, loadUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const EmailChangeHandler = (event) => {
      setEmail(event.target.value);
    }

    const PasswordChangeHandler = (event) => {
      setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
      event.preventDefault();  
      
      axios.post('https://lit-earth-99267.herokuapp.com/signin', {
        email: email, 
        password: password
      })
      .then(res => {
        console.log(res);
        loadUser(res.data);
        onRouteChange('home');
      })
      .catch(err => {
        setError('Wrong Credentials or Bad Request');
      });

    }

    const Error = error ? (<p style={{color: 'red', marginTop: '0px'}}>{error}</p>) : null;

    return ( 
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{backgroundColor: 'white'}}>
    <main className="pa4 black-80">
    <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 black">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 black">Email</label>
        <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email" 
          id="email-address" 
          onChange = {(event) => EmailChangeHandler(event)}
          value={email} />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 black">Password</label>
        <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          onChange = {(event) => PasswordChangeHandler(event)}
          value={password} />
      </div>
    </fieldset>
    <div className="">
      {Error}
      <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Sign in" 
        onClick={(event) => onSubmitHandler(event, email, password)} />
    </div>
    <div className="lh-copy mt3">
      <p onClick={() => onRouteChange('register')} className="f6 link dim black db">Register Here !</p>
    </div>
    </form>
    </main>
    </article>
    );
}
