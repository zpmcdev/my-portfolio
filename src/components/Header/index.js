import React from 'react';
import Nav from '../Nav';

const Header = (props) => {

  const {
    navSection,
    selectedNavSection,
    setSelectedNavSection
  } = props;

  return (
    <header className="d-flex align-items-center flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark text-white sticky-top">
        <div style={{ marginLeft: "5%" }} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fs-1">Zachary McCollum's Portfolio</div>
      <Nav
        navSection={navSection}
        selectedNavSection={selectedNavSection}
        setSelectedNavSection={setSelectedNavSection}
      ></Nav>
    </header>
  );
}

export default Header;