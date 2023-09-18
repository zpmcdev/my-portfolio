import React from 'react';

const Portfolio = () => {

  const projects = [
    {
      name: "DnD Character Generator:",
      screenshot: "dndGenerator.gif",
      link: "https://zpmcdev.github.io/dnd-character-creator/",
      repo: "https://github.com/zpmcdev/dnd-character-creator",
      description: "If you've ever needed a hint of inspiration for a character, or just an NPC generated for a Dungeons and Dragons run, this is the tool for you! (JavaScript, jQuery, UI-Kit, HTML, CSS, 3rd Party API's)"
    },
    {
      name: "Band-Gogh:",
      screenshot: "band-gif.gif",
      link: "https://band-gogh.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/band-gogh",
      description: "A site where local bands and musicians can sign up and post their gig for viewers to see! Fully built api routes, session authentication, and dynamic output! (Node.js, Handlebars, JavaScript, MySQL, HTML, CSS)"
    },

    {
      name: "Wanderosa:",
      screenshot: "wanderosa.gif",
      link: "https://wanderosa.herokuapp.com/",
      repo: "https://github.com/SamuraiHuey/Wanderosa",
      description: "A personal itinerary tool built with React and GraphQL. If you're organizing your next trip, Wanderosa is a place to keep your schedule 'all together'! (Node.js, JavaScript, React.js, GraphQL)"
    },
    {
      name: "E-Commerce Back End:",
      screenshot: "E-Commerce Back End.gif",
      link: "https://github.com/zpmcdev/E-Commerce-Back-End",
      repo: "https://github.com/zpmcdev/E-Commerce-Back-End",
      description: "An entire backend database/server where you can (C)reate, (R)ead, (U)pdate, and (D)elete products, their corresponding tags, and categories for your general E-Commerce business! (Node.js, MySQL, Sequelize)"
    },
    {
      name: "Password Generator:",
      screenshot: "passwordGen.gif",
      link: "https://zpmcdev.github.io/PasswordGenerator/",
      repo: "https://github.com/zpmcdev/PasswordGenerator",
      description: "If you're like me, you can never have too many passwords! This is a simple app that will provide you random characters within your desired parameters! (JavaScript, HTML, CSS)"
    },
    {
      name: "Social Network API:",
      screenshot: "socialNetworkAPI.gif",
      link: "https://github.com/zpmcdev/SocialNetworkAPI",
      repo: "https://github.com/zpmcdev/SocialNetworkAPI",
      description: "A back end API where social media users are able to be (C)reated, (R)ead, (U)pdated, and (D)eleted, along with message posting, friends lists, and reactions! (Node.js, MongoDB)"
    },
    {
      name: "Scheduler:",
      screenshot: "schedulerGif.gif",
      link: "https://zpmcdev.github.io/WorkDayScheduler/",
      repo: "https://github.com/zpmcdev/WorkDayScheduler",
      description: "Let's be real, we're programmers here, and we need to know the exact time blocks to pound our pots of coffee...(JavaScript, jQuery, HTML, CSS)"
    },
  ];

  return (
    <div>
      <h2 className="text-center text-white">
        My Main Projects:
      </h2>
      <h5 className="text-center text-white">
        Click any GIF to view the deployed application!
      </h5>
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