import React from 'react'
import plantsy from '../assets/plantsy_demo.gif'
import planet from '../assets/finished-project.png'
import magic from '../assets/Magic-Project.png'
import poem from '../assets/poem_demo.gif'
import gregslist from '../assets/gregslist_demo.gif'

function Projects() {
  return (
    <div>
      <h2>Projects:</h2>
      <div className="project-container">
        <div className="project">
          <div className="container">
            <img className="image" src={plantsy} alt="" />
            <div className="overlay">
              <div className="text">Plantsy</div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="container">
            <img className="image" src={planet} alt="" />
            <div className="overlay">
              <div className="text">Planet</div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="container">
            <img className="image" src={magic} alt="" />
            <div className="overlay">
              <div className="text">Magic The Gathering: Deck Builder</div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="container">
            <img className="image" src={poem} alt="" />
            <div className="overlay">
              <div className="text">Poem Final</div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="container">
            <img className="image" src={gregslist} alt="" />
            <div className="overlay">
              <div className="text">Gregslist</div>
            </div>
          </div>
        </div>

        {/* You can add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;