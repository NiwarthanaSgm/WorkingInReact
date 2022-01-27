import React from 'react'

import TopicBox from '../components/TopicBox'
import "./home.css"

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox topic="First" name="home">
          <span className='desc'> Description</span>
      </TopicBox>
      <TopicBox topic="Second" name="about us"> 
          <button>Press</button>
      </TopicBox>
      <TopicBox topic="Third" name="Image" />
    </div>
  )
}

