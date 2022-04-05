import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const github = "https://github.com/zbreezie";

  return (
    <div className="main-color container-fluid text-white">
      <div className=" row">
        <h1 className=" display-1 col">
          Hello there!:
        </h1>
        <div className='main-color row justify-content-around'>
            <p className="aboutp card bg-dark col-7 text-center">My name is Zachary, and I'm a Full-Stack developer! I grew up in Charlotte, NC, and I am currently based in Richmond, VA!
            </p>
            <div className="aboutp col-2 text-center"> 
              <a href={github} target="_blank" rel="noreferrer" className=" card main-color col-12">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                <p className="bg-dark text-white col-md-offset-2">Check out my GitHub!</p>
              </a>
            </div>
            <p className="aboutp card bg-dark col-md-offset-2 text-center">This is the spot where I showcase some of the various things I've built throughout my coding career.</p>
        </div>
      </div>
    </div>
  );
}

export default About;