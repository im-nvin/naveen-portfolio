import React from 'react'
import './intro.css'
import Me from "../../images/naveen.png"
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
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Backend-developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="i-description">
                        As a Web developer, I am passionate about creating beautiful, intuitive user interfaces that provide exceptional user experience. I have a strong understanding of Html, css , Bootstrap, javascript, react, node, mongoDB, express.js .
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
