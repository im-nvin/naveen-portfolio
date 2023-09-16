import React from 'react'
import './intro.css'
import Me from "../../images/naveen-removebg-preview.png"
export const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello , My Name is</h2>
                    <h1 className='i-name'>Naveen sharma</h1>
                    <div className="i-title">
                        {/* i-title-wrapper for some animation */}
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Backend-developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <p className="i-description">
                        As a MERN stack web developer, I am passionate about creating beautiful and intuitive user interfaces that deliver exceptional user experiences. I possess a strong command of <i>HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT, REACT.JS, NODE.JS, MONGODB, EXPRESS.JS.</i>
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}
