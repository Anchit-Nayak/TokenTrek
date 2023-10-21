import React from 'react'
import Trending from '../Components/Trending'
import Markets from '../Components/Markets';

function Home() {
  return (
    <div className='wrapper-container'>
      <Trending/>
      <Markets/>
    </div>
  )
}

export default Home