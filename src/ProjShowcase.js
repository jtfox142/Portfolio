import React from 'react'
import './App.css'

const ProjShowcase = () => {

  return ( 
    <div>
      <h1 className='header1'>Featured Projects</h1>
      <div className='projContainer'>
        <div className='proj'>
          <h3>ASL Translator</h3>
          <p>Currently in progress. Will use phone cameras and accelerometer sensors to translate basic signs. Click me!</p>
        </div>
        <div className='proj' onClick={() => window.location.href="https://github.com/jtfox142/OS-6"}>
          <h3>OS-6</h3>
          <p>The final project in my Operating Systems course. It simulates virtual memory operations in an OS. Click me!</p>
        </div>
        <div className='proj' onClick={() => window.location.href="https://github.com/jtfox142/compilers-1"}>
          <h3>Compilers-1</h3>
          <p>The first project in my compilers course. It parses input based upon a custom HLL, separating lexical pieces into tokens. Click me!</p>
        </div>
      </div>
    </div>
  )
}

export default ProjShowcase