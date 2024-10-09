import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src="/placeholder.svg?height=150&width=150"
          alt="Mullac Reckut"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '4px solid #fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
        <h1 style={{ marginTop: '1rem', fontSize: '2.5rem' }}>Mullac Reckut</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>I am a big noob </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>About Me</h2>
        <p>
          I'm trying to stuff with mostly typescript, react and C# and I enjoy building web applications. 
          When I'm not coding, I am playing league of legends, which is most of the time, Its not a complete waste of time as I peaked Grand master last split, I also play clash royale and have been ultimate champion for the last 2 years.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['JavaScript', 'TypeScript', 'React', 'Node.js','Git','Python', 'C#'].map((skill) => (
            <span key={skill} style={{
              background: '#f0f0f0',
              padding: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.9rem',
            }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>Projects</h2>
        <div>
          {[
            {
              title: 'League of legends statistics site',
              description: 'I Built a League of legends statics site, With a few of my friends, to store all of me and My friends personal data as we were completing a challenge, this site has now evolved to display alot more data and has some fun/random things on it like teir lists.'
            },
            {
              title: 'Blog site about my dog',
              description: 'Developed a responsive Blog application using React and Typescript. Features include Scroll into view features for different pages, Item hovers, and a go to top button which is important because I have a very large gallery about my dog on that site.'
            },
            {
              title: 'Weather Forecast Dashboard',
              description: 'Created a weather forecast dashboard using React and a third-party weather API. Implemented geolocation, search functionality, and interactive charts for temperature and precipitation.'
            }
          ].map((project, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>You can find me here</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {['GitHub', 'Discord', 'Email'].map((platform) => (
            <a
              key={platform}
              href="#"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: '#333',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              {platform}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;