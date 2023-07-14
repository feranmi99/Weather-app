import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Get from './components/Get'
// import Message from './components/Message'

function App() {
  useEffect(() => {
    if ('serviceworker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed', registrationError);
          })
      })
    }
  }, [])
  return (
    <>
      <Get/>
      {/* <Message/> */}
    </>
  )
}

export default App
