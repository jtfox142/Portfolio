import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import './App.css'
import Carousel from './Carousel.js'

const Home = () => {
  //onClick={() => window.location.replace("/about"
  const [projectURL, setProjectURL] = useState("")
  const [displayAllProjects, setDisplayAllProjects] = useState(false)
  const goToAllProjects = () => {
    setDisplayAllProjects(true);
  }

  const navigateTo = () => {
    window.location.href = "{projectURL}"
  }

  const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];

  return (
    <div className="App">
      <Navbar 
      toggleAllProjects={() => setDisplayAllProjects(true)}/>
      <h1 className='header1'>Featured Projects</h1>
      <div className='projContainer'>
        <div className='proj' onClick={() => window.location.href="https://github.com/jtfox142/ASL-Translator"}>
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

      <h1>Skills</h1>
      <Carousel images={images} />
    </div>
  );
}

export default Home;
