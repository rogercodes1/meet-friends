import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = (props) => {
  return (
    <div id="footer">
      <h3>Let's Connect</h3>
      <SocialIcon url="https://www.linkedin.com/in/rogerperez1/"/>
      <SocialIcon url="https://github.com/rogercodes1" style={`color:black`}/>
      <SocialIcon url="https://twitter.com/rogercodes1"/>
      <SocialIcon url="https://medium.com/@rogercodes1" />
    </div>
  )
}

export default Footer
