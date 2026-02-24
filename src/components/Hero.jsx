import profile from '../assets/profile.jpeg'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Hero(){
    return(
        <div className="Hero-section">
            <div className="name">
                <h2>Hi, I am</h2>
                <h1>NEHA S</h1>
                <p className="role">Frontend Developer | React | JavaScript | CSS</p>
                <p className="bio">
                        Frontend developer focused on building responsive, accessible, and user-friendly web applications using React.
                </p>

                <div className='buttons'>
                    <a href='#contact' className="contact-btn">
                        Contact Me
                    </a>
                       
                    <a 
                        href='https://www.linkedin.com/in/neha-solai-953bb7321/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-btn'
                    >
                        <FaLinkedinIn />
                    </a>

                    <a 
                        href="https://github.com/nehasolai4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-btn"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="image">
                <img src={profile} alt='profile'></img>
            </div>


        </div>

    )


}

export default Hero