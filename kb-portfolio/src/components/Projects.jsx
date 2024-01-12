import React from 'react';
import magic from '../assets/Magic-Project.png';

function Projects() {
  return (
    <div className="project">
      <div className="container">
        <img className="image" src={magic} alt="" />
        <div className="overlay">
          <div className="text">Magic The Gathering: Deck Builder</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;