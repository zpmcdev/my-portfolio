import React from 'react';

const Portfolio = () => {

  const projects = [
    {
      name: "DnD Character Generator:",
      screenshot: "dndGen.jpg",
      link: "https://wolfskillobyte.github.io/dnd-character-creator/",
      repo: "https://github.com/wolfskillobyte/dnd-character-creator",
      description: "If you've ever needed a hint of inspiration for a character, or just an NPC generated for a Dungeons and Dragons run, this is the tool for you!"
    },
    {
      name: "Band-Gogh:",
      screenshot: "band-gogh.png",
      link: "https://band-gogh.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/band-gogh",
      description: "A site where local bands and musicians can sign up and post their gig for viewers to see! Fully built api routes, session authentication, and dynamic outputs!"
    },
    {
      name: "Wanderosa:",
      screenshot: "wanderosa.png",
      link: "https://wanderosa.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/Wanderosa",
      description: "A personal itinerary tool. Whenever you're organizing your next trip, Wanderosa is a place that is available to keep your schedule 'all together'"
    },
  ];

  return (
    <div>
      <h2 className="text-center text-white">
        My Main Projects:
      </h2>
      <div style={{ backgroundColor: "#212F3D"}} className="row row-cols-1 row-cols-md-3">
        {projects.map((project) => (
          <div style={{ marginTop: "20px", backgroundColor: "#212F3D"}} className="col" key={project.name}>
            <div className="card">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={require(`../../assets/${project.screenshot}`)}
                  className="card-img-top"
                />
              </a>
              <div className="card-body text-center bg-dark text-white">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.repo} target="_blank" rel="noreferrer" style={{ backgroundColor: "green"}} className="btn btn-primary">GitHub Repo!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;