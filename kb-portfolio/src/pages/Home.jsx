import React from 'react';
import profile from '../assets/Profile.png';
import Projects from '../components/Projects';

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Hello World!</h1>
        <p>
          My name is Kaleb Bolack! I am an aspiring full-stack developer! I have worked with JavaScript, CSS, React.js, and Python!
        </p>
      </div>
      <img className="head" src={profile} alt='' />
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default Home;