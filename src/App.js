import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

const App = () => {
  //onClick={() => window.location.replace("/about"
  const [displayAllProjects, setDisplayAllProjects] = useState(false)
  return (
    <div className="App">
        <ul className='navBar'>
          <li className='navItem'>About</li>
          <li className='navItem'>Skills</li>
          <li className='navItem' onClick={() => setDisplayAllProjects(true)}>All Projects</li>
        </ul>
      <h1 className='header1'>Featured Projects</h1>
      <div className='projContainer'>
        <div className='proj'>
          <h3>Left Example Project</h3>
          <p>Text describing example project. Entire div should be clickable!</p>
        </div>
        <div className='proj'>
          <h3>Middle Example Project</h3>
          <p>Text describing example project. Entire div should be clickable!</p>
        </div>
        <div className='proj'>
          <h3>Right Example Project</h3>
          <p>Text describing example project. Entire div should be clickable!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
