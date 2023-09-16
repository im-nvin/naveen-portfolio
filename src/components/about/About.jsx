import React from 'react'
import Codeimg from "../../images/nvinblac.jpg"
import resumePdf from '../../assests/resume.pdf'
import "./about.css"
export const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        {/* this one is for background effect for image  */}
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Codeimg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-desc">Welcome to my corner of the web! I'm Naveen Sharma, a dedicated front-end developer on a mission to craft stunning and user-centric digital experiences.
          Hailing from the vibrant city of New Delhi, India, I've completed my Computer's degree from GGSIPU, where I've been honing my skills and nurturing my passion for web development.
          Join me on this exciting journey, and let's create something extraordinary together. Explore my portfolio to get a taste of my work, and don't hesitate to reach out—I'm always up for new challenges and collaborations.
          <br />
          Thank you for stopping by, and I can't wait to connect with you!</p>
        <br />
        <div className='btn-Container'>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
            <button className='resume-button btn'>
              RESUME
            </button>
          </a>
          <a href="https://www.linkedin.com/in/naveen-sharma-860870257/" target="_blank" rel="noopener noreferrer">
            <button className='btn linkedin-btn'>
              LINKEDIN
            </button>
          </a>
          <a href='https://github.com/im-nvin' target="_blank" rel="noopener noreferrer">
            <button className='btn github-btn'>
              GITHUB
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}
