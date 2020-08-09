import React from 'react'

export default function Register({onRouteChange}) {
    return ( 
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{backgroundColor: 'white'}}>
    <main className="pa4 black-80">
    <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 black">Sign Up</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 black">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="email-address" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 black">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 black">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="">
      <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Sign Up" 
        onClick={() => onRouteChange('home')} />
    </div>
    <div className="lh-copy mt3">
      <p onClick={() => onRouteChange('signin')} className="f6 link dim black db">Already have an account ? Sign In Here !</p>
    </div>
    </form>
    </main>
    </article>
    );
}