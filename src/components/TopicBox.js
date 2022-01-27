import React from 'react'

import "./topicBox.css"

export default function TopicBox(props) {
    
  return (
    <div>
      <div className='topicBox'>
          <span className='text'>This is {props.topic}, Its name {props.name}</span>
          {props.children}
          {alert("Helloooo")}
      </div>
    </div>
  )
}
