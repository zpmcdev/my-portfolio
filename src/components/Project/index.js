import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

const Project = ({ selectedNavSection }) => {

  return (
    <div style={{ backgroundColor: "#212F3D"}}>
      {selectedNavSection === "About" ? (
        <About></About>
      ) : selectedNavSection === "Portfolio" ? (
        <Portfolio></Portfolio>
      ) : selectedNavSection === "Contact" ? (
        <Contact></Contact>
      ) : selectedNavSection
      }
    </div>
  );
}

export default Project;