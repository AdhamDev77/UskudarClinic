import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from './assests/Homepage Image.jpg'


function Home() {
  return (
    <div className='home'>
      <div className="home-main">
      <div className="home-text-area">
      <h1>Üsküdar National Clinic</h1>
      <p>Why Choose Üsküdar National Clinic ?
We don’t just care for your health conditions. We care about you. That means our doctors take the time to listen to what’s important to you before recommending next steps.</p>
<p>Our vision: Leadership in the health services sector.</p>
<p>Our message: Provide health care within distinguished professional values.</p>
<p>Our values: team performance - respect - maintaining quality standards - responsibility towards society - credibility.</p>
      <button className = "reserve-home-btn"><Link className='home-reserve-link' to="/reservation"> Reserve with us </Link></button>
      </div>
      <img src={HomeImg} alt="female doctor"/>
      </div>
    </div>
  )
}

export default Home
