import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [navSection] = useState(["About", "Portfolio"]);
  const [selectedNavSection, setSelectedNavSection] = useState(navSection[0]);

  return (
    <div style={{backgroundColor: "#212F3D", height: "100vh"}} className="container-fluid">
      <Header
        navSection={navSection}
        selectedNavSection={selectedNavSection}
        setSelectedNavSection={setSelectedNavSection}
      ></Header>
      <main style={{ backgroundColor: "#212F3D"}}>
        <Project
          selectedNavSection={selectedNavSection}
        ></Project>
              <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
