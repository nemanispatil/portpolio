
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Component/Home';
import About from './Component/About';
import ProjectDetails from './Component/ProjectDetails';
import Skilll from './Component/Skilll';
import Contactt from './Component/Contactt';
import Footer from './Component/Footer';
// import ContactForm from './Component/ContactForm';




function App() {
  return (
    <div className="App">
     
<Navbar/> 
  <Home/>
   <About/>
   {/* <YourComponent/> */}
   {/* <ContactForm/> */}

 <div>
<Contactt/>
      <h2>Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'Center' }}>
        <Skilll
          title="Programming Languages"
          skills={['HTML', 'CSS', 'JavaScript', 'React']}
        />
        <Skilll
          title="Tools and Platforms"
          skills={['Figma', 'GitHub', 'Git Control','VS Code']}
        />
      </div>
    </div>



   <header className="App-header">
        <h1>MY RECENT PROJECT</h1>
      </header>

      
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2002.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://65ccba825a7ca3071fc396a2--radiant-mochi-6595eb.netlify.app/"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://65ccba825a7ca3071fc396a2--radiant-mochi-6595eb.netlify.app/"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://65ccba825a7ca3071fc396a2--radiant-mochi-6595eb.netlify.app/"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="Design Sowfter"
          imgSrc="https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="I made sowfter in my privous company flap design sowfter"
        />
          <ProjectDetails
          title="wheather app"
          imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/disp/af8a6a32739675.5691dd2389a24.gif"
          // imgSrc="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif"
          githubLink="https://github.com/nemanispatil/Weather-app.git"
          netlifyLink="https://dainty-lebkuchen-bd69ea.netlify.app/"
          description="A brief description of Project 1 goes here."
        />
          <ProjectDetails
          title="Ping Pong Game"
          imgSrc="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGp0OHQ2NHNsc2F2dnY5YjJ1Zm02c2Z5bG44bWU2dzczbXNicXRkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/37q9y7WbvLAy3Wg90h/giphy.gif"
          githubLink="https://github.com/nemanispatil/Ping-Pong-Game.git"
          netlifyLink="https://soft-malasada-a7b383.netlify.app/"
          description="The game will have two paddles that are controlled by the mouse and a bouncing ball.

"
        /> 
        <>
         <ProjectDetails
          title="Mobile Navigation"
          imgSrc="https://fireart.studio/wp-content/uploads/2021/12/2.gif"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="A brief description of Project 1 goes here."
        />
    
          <ProjectDetails
          title="wheather app"
          imgSrc="https://www.danflyingsolo.com/wp-content/uploads/2015/02/Raja33.jpg"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="A brief description of Project 1 goes here."
        />
  
        </>
        <>
         <ProjectDetails
          title="Mobile Navigation"
          imgSrc="https://fireart.studio/wp-content/uploads/2021/12/2.gif"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="A brief description of Project 1 goes here."
        />
    
          <ProjectDetails
          title="wheather app"
          imgSrc="https://www.danflyingsolo.com/wp-content/uploads/2015/02/Raja33.jpg"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="A brief description of Project 1 goes here."
        />
            <ProjectDetails
          title="wheather app"
          imgSrc="https://www.danflyingsolo.com/wp-content/uploads/2015/02/Raja33.jpg"
          githubLink="https://github.com/yourusername/project1"
          netlifyLink="https://project1.netlify.app"
          description="A brief description of Project 1 goes here."
        />
  <Footer/>
        </>

    </div>
    
  );
}

export default App;


//---------------------------------------------dynamic----------------------------------
// import React from 'react';
// import './App.css';
// import Navbar from './Navbar';
// import Home from './Component/Home';
// import About from './Component/About';
// import ProjectDetails from './Component/ProjectDetails';
// import Skilll from './Component/Skilll';
// import Footer from './Component/Footer';
// import ContactForm from './Component/ContactForm';

// const projects = [
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },
//   {
//     title: 'Design Sowfter',
//     imgSrc: 'https://ni3bus.com/ni3bus/slider/images/site/Online%20Bus%20Ticket%20Booking%2001.png',
//     githubLink: 'https://github.com/yourusername/project1',
//     netlifyLink: 'https://project1.netlify.app',
//     description: 'I made sowfter in my previous company flap design sowfter',
//   },

// ];

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />

//       <div>
//         <h2>Skills</h2>
//         <div style={{ display: 'flex', justifyContent: 'Center' }}>
//           <Skilll title="Programming Languages" skills={['HTML', 'CSS', 'JavaScript', 'React']} />
//           <Skilll title="Tools and Platforms" skills={['Figma', 'GitHub', 'Git Control', 'VS Code']} />
//         </div>
//       </div>
//       <ContactForm/>
//       <header className="App-header">
//         <h1>MY RECENT PROJECT</h1>
     

//       {projects.map((project, index) => (
//         <ProjectDetails
//           key={index}
//           title={project.title}
//           imgSrc={project.imgSrc}
//           githubLink={project.githubLink}
//           netlifyLink={project.netlifyLink}
//           description={project.description}
//         />
//       ))}
//       </header>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
