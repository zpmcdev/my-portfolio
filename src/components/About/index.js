import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const github = "https://github.com/zbreezie";

  return (
    <div className="main-color container-fluid text-white">
      <div className=" row">
        <h1 className=" display-1 col">
          Hello there!:
        </h1>
        <div className='main-color row justify-content-around'>
            <p className="aboutp card bg-dark col-7 text-center">My name is Zach, and I'm a Full-Stack developer! I grew up in Charlotte, NC, and I am currently based in Richmond, VA! I'm a graduate from the University of Richmond Full-Stack coding bootcamp, where I've ironed out my professional chops.
            </p>
            <div className=" col-2 text-center"> 
              <a href={github} target="_blank" rel="noreferrer" style={{color: "white"}} className="card bg-success main-color col-12 mb-3">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                <p className="bg-success text-white col-md-offset-2">Check out my GitHub!</p>
              </a>
              <div className=" card bg-dark main-color col-12 mb-4">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x"/>
              <p className="bg-dark text-white col-md-offset-2">Reach out to my email!: zpmc55@yahoo.com </p>
              </div>
            </div>
            <p className="aboutp card bg-dark col-md-offset-2 text-center">This is the spot where I'll showcase a sample of the various things I've built throughout my coding career.</p>
        </div>
      </div>
    </div>
  );
}

export default About;