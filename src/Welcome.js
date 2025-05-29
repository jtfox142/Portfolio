import React from 'react'
import picasso from './the-death-of-casagemas.jpg'

const Welcome = () => {

  /*TODO: as the className says */
  return (
    <div className='fillBackgroundLater' >
      <img src={picasso} className='profilePic' alt='The best developer on the planet />' /> {/*TODO replace picasso*/}
      <h1 className='header1'> Welcome</h1>
    </div>
  )
}

export default Welcome