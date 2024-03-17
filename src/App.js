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
      <div className='heroContainer'>

      </div>
    </div>
  );
}

export default App;
