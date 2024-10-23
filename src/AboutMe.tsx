import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import profileImage from './imgs/pikchu.jpg'; // Ensure the path is correct

const AboutMe: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`about-me ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </div>

      <header className="about-me-header">
        <img
          src={profileImage} // Use the imported image here
          alt="Mullac Reckut"
          className="profile-image"
        />
        <h1 className="name">Mullac Reckut</h1>
        <p className="description">I am a big noob</p>
      </header>

      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm trying to stuff with mostly TypeScript, React, and C# and I enjoy building web applications.
          When I'm not coding, I am playing League of Legends, which is most of the time. It's not a complete
          waste of time as I peaked Grand Master last split. I also play Clash Royale and have been Ultimate
          Champion for the last 2 years.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Git', 'Python', 'C#'].map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div>
          {[
            {
              title: 'League of Legends Statistics Site',
              description: 'I built a League of Legends statistics site with a few friends...',
            },
            {
              title: 'Blog Site About My Dog',
              description: 'Developed a responsive blog application using React and TypeScript...',
            },
            {
              title: 'Weather Forecast Dashboard',
              description: 'Created a weather forecast dashboard using React and a third-party weather API...',
            },
            {
              title: 'Games website',
              description: 'Created a website to store games i have created so i can play them when i feel like it, like wordle and hangman for example...',
            },

          ].map((project, index) => (
            <div key={index} className="project">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">You Can Find Me Here</h2>
        <div className="social-links">
          {['GitHub', 'Discord', 'Email'].map((platform) => (
            <a key={platform} href="#" className="social-link">
              {platform}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
