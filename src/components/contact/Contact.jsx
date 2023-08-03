import React from 'react'
import './contact.css'
import Phone from '../../images/phone.png'
import Mail from '../../images/mail.jpg'
import Address from '../../images/address.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { ThemeContext } from '../../Context'



const Contact = () => {
    const formRef = useRef()

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const [Done, setDone] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_7ufg26u', 'template_sccg044', formRef.current, '1iW7g3m8rpNEV9eWn')

            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="c-title">
                        Let's discuss your project
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} className='c-icon' />
                            +91-9818287934
                        </div>
                        <div className="c-info-item">
                            <img src={Mail} className='c-icon' />
                            info.naveen21@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} className='c-icon' />
                            New Delhi,India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Get in touch anytime.Always available for freelancing
                    </p>
                    <form ref={formRef} onSubmit={HandleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333' ,color: darkMode && 'white' }} type='text' placeholder='Name' name='User_name' />
                        <input style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} type='text' placeholder='Subject' name='User_subject' />
                        <input style={{ backgroundColor: darkMode && '#333',color: darkMode && 'white' }} type='email' placeholder='Email' name='User_email' />
                        <textarea style={{ backgroundColor: darkMode && '#333',color: darkMode && 'white'}} rows="5" placeholder='Message' name='message' />
                        <button>submit</button>
                        {Done && "Thank You"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact 
