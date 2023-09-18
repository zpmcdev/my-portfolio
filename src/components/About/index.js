import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const github = "https://github.com/zpmcdev";

  return (
    <div className="main-color container-fluid text-white">
      <div className=" row">
        <h1 className=" display-1 col mb-5">
          Hello there!:
        </h1>
        <div className='main-color row justify-content-around'>
            <p className="aboutparagraph card bg-dark col-7 text-center">"My name is Zach, and I'm a Full-Stack developer! I grew up in Charlotte, NC, and I am currently based in Richmond, VA! I'm a graduate from the University of Richmond Full-Stack coding bootcamp, where I've ironed out my professional chops."
            </p>
            <div className=" col-2 text-center"> 
              <a href={github} target="_blank" rel="noreferrer" style={{color: "white"}} className="card bg-success main-color col-12 mb-3">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                <p className="bg-success text-white col-md-offset-2">Check out my GitHub!</p>
              </a>
              <div className=" card bg-dark main-color col-12 mb-4">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="2x"/>
              <p className="bg-dark text-white col-md-offset-2">Reach out to my email!: zpmcdev@yahoo.com </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;