import React from 'react'
import profile from '../assets/Profile.jpg'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'

function Home() {
  return (
    <div>
        <h1>Welcome!</h1>
        <img className="head" src={profile} alt=''/>
        <p>My name is Kaleb Bolack! I am an aspiring fullstack devoloper! I have worked with JavaScipt, CSS, React.js, and Python!</p>
        <Projects />
    </div>
  )
}

export default Home