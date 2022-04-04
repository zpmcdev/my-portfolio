import React from 'react';

const Portfolio = () => {

  const projects = [
    {
      name: "DnD Character Generator:",
      screenshot: "dndGenerator.gif",
      link: "https://zbreezie.github.io/dnd-character-creator/",
      repo: "https://github.com/zbreezie/dnd-character-creator",
      description: "If you've ever needed a hint of inspiration for a character, or just an NPC generated for a Dungeons and Dragons run, this is the tool for you!"
    },
    {
      name: "Band-Gogh:",
      screenshot: "band-gif.gif",
      link: "https://band-gogh.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/band-gogh",
      description: "A site where local bands and musicians can sign up and post their gig for viewers to see! Fully built api routes, session authentication, and dynamic output!"
    },

    {
      name: "Wanderosa:",
      screenshot: "wanderosa.gif",
      link: "https://wanderosa.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/Wanderosa",
      description: "A personal itinerary tool built with React and GraphQL. Whenever you're organizing your next trip, Wanderosa is a place to keep your schedule 'all together'!"
    },
    {
      name: "Password Generator:",
      screenshot: "passwordGen.gif",
      link: "https://zbreezie.github.io/PasswordGenerator/",
      repo: "https://github.com/ZBreezie/PasswordGenerator",
      description: "If you're like me, you can never have too many passwords! This is a simple app that will provide you random characters within your desired parameters!"
    },
    {
      name: "Scheduler:",
      screenshot: "schedulerGif.gif",
      link: "https://zbreezie.github.io/WorkDayScheduler/",
      repo: "https://github.com/ZBreezie/WorkDayScheduler",
      description: "Let's be real for a moment, we're programmers here. We need to know the exact time blocks to pound our pots of coffee..."
    },
  ];

  return (
    <div>
      <h2 className="text-center text-white">
        My Main Projects:
      </h2>
      <div style={{ backgroundColor: "#212F3D" }} className="row row-cols-1 row-cols-md-3">
        {projects.map((project) => (
          <div style={{ marginTop: "20px", backgroundColor: "#212F3D" }} className="col" key={project.name}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="brightness">
                  <img
                    src={require(`../../assets/${project.screenshot}`)}
                    className="card-img-top zoom projectImage"
                  />
                </div>
              </a>
              <div className="card-body text-center bg-dark text-white">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div style={{display:"inline-block"}}className="brightness">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-success">GitHub Repo!</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;