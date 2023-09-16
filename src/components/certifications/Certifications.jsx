import './certifications.css'
import freeecodecamp from '../../images/freecodecamp.png'
const Certifications = () => {
    return (
        <div className='certif'>
            <div className='cert-text'>
                <h1 className='cert-title'>CERTIFICATIONS</h1>
            </div>
            <div className='cert-img'>
                <div className='img'><img src={freeecodecamp} alt="" /><span>JavaScript Algorithms & Data Structure</span></div>
                <div className='img'><img src="https://udemy-certificate.s3.amazonaws.com/image/UC-113590fe-0c45-4239-82e3-33c314bf42e2.jpg?v=1693226719000" alt="" /><span>The Complete 2023 Web Development Bootcamp </span></div>
                <div className='img'><img src="https://media.licdn.com/dms/image/D4D22AQHR3sBC8rofTw/feedshare-shrink_1280/0/1693887898551?e=1697673600&v=beta&t=xgB3gmvranGSDOV54VMBIe5w3QhioKRREFjX_hjszU0" alt="" /><span>8 Git Commands you should know</span></div>
                <div className='img'><img src="https://media.licdn.com/dms/image/D4D22AQGsevg1ysWCnw/feedshare-shrink_1280/0/1694321175362?e=1697673600&v=beta&t=1UclViObxTikc0KnbvN7LyL1iVs78ZPebCheQmZCxwU" alt="" /><span>Scrum for agile software development</span></div>
                <div className='img'><img src="https://media.licdn.com/dms/image/D4D22AQFz8Y43ZhGjgw/feedshare-shrink_1280/0/1693922279111?e=1697673600&v=beta&t=N2UWrfE2PfcxmgKWVaxbHqPVjEwnRIsLA2p0WRw-KP8" alt="" /><span>Introduction to Prompt Engineering for Generative AI</span></div>

            </div>
        </div>
    )
}

export default Certifications