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
          alt="Your Name"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '4px solid #fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
        <h1 style={{ marginTop: '1rem', fontSize: '2.5rem' }}>Your Name</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Full Stack Developer</p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>About Me</h2>
        <p>
          I'm a passionate full-stack developer with 5 years of experience in building web applications. 
          I love creating elegant solutions to complex problems and am always eager to learn new technologies. 
          When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Git'].map((skill) => (
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
              title: 'E-commerce Platform',
              description: 'Built a full-featured e-commerce platform using React, Node.js, and MongoDB. Implemented features such as user authentication, product catalog, shopping cart, and payment integration.'
            },
            {
              title: 'Task Management App',
              description: 'Developed a responsive task management application using React and Firebase. Features include real-time updates, drag-and-drop task organization, and team collaboration tools.'
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
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>Get in Touch</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {['GitHub', 'LinkedIn', 'Email'].map((platform) => (
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