import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase/config';
import './App.css'


const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user); // pour tester
  } catch (error) {
    console.error(error);
  }
};




function App() {

  
  return (
    
    <>
      <section id="center">

        <h1 className="title">QuickMath</h1>

        <button type="button" className="register-button" onClick={handleGoogleLogin}> register </button>

      </section>

      <div className="ticks"></div>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
  
  
}

export default App
