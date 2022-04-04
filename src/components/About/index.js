import React from 'react';

const About = () => {
  return (
    <div className="text-white">
      <h1 className=" display-1">
        About Me:
      </h1>
        <div className= "">
          <img className="card-img-top"
            src={require(`../../assets/d.jpg`)}
          />
          <p className="">im just a dude</p>
        </div>
    </div>
  );
}

export default About;