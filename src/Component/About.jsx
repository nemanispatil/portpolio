// // src/About.js
// import React from 'react';
// import './About.css';
// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-content">
//         <h2>About Me</h2>
//         <p>
//           I am a passionate and dedicated web developer with a strong
//           background in front-end and back-end technologies. My goal is to
//           create innovative and user-friendly web applications that make a
//           positive impact.
//         </p>
//         <p>
//           With a keen interest in learning and staying updated with the latest
//           trends in web development, I am always excited to take on new
//           challenges and contribute to meaningful projects.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;
// src/About.js
import React from 'react';
import './About.css';
// import profileImage from './profile-image.jpg'; // Import your image file

const About = () => {
  const profileImageUrl = 'https://avatars.githubusercontent.com/u/110098596?v=4';
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="image-container">
          {/* <img src={profileImage} alt="Profile" /> */}
          <img src={profileImageUrl} alt="Profile" />
        </div>
        <div className="text-container">
          <h2>About Me</h2>
          <p>
            I am a passionate and dedicated web developer with a strong
            background in front-end and back-end technologies. My goal is to
            create innovative and user-friendly web applications that make a
            positive impact.
          </p>
          <p>
            With a keen interest in learning and staying updated with the latest
            trends in web development, I am always excited to take on new
            challenges and contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

