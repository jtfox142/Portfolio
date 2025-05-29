import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import './App.css'
import Carousel from './Carousel.js'
import ProjModal from './ProjModal.js'
import Welcome from './Welcome.js'

const Home = () => {
  //onClick={() => window.location.replace("/about"
  /*
  const [displayAllProjects, setDisplayAllProjects] = useState(false)
  const goToAllProjects = () => {
    setDisplayAllProjects(true);
  }

  const navigateTo = () => {
    window.location.href = "{projectURL}"
  }*/

  const [showModal, setShowModal] = useState(false);

  const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];

  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <h1 className='header1'>Featured Projects</h1>
      <ProjModal show={showModal} onClose={() => setShowModal(false)}/>
      <div className='projContainer'>
        <div className='proj' onClick={() => setShowModal(true)}>
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
