import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'
import './App.css'
import Carousel from './Carousel.js'
import ProjModal from './ProjModal.js'
import Welcome from './Welcome.js'
import ProjShowcase from './ProjShowcase.js'

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

  /*TODO: 
    * Pull CSS into appropriate files
    * Pull ProjModal into ProjShowcase 
  */
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <ProjModal show={showModal} onClose={() => setShowModal(false)}/>
      <ProjShowcase />
    </div>
  );
}

export default Home;
