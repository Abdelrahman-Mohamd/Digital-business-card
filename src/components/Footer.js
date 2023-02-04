import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer(){
    return(
        <div className='footer'>
           <a className="logo" href='https://github.com/Abdelrahman-Mohamd'><FaGithubSquare /></a>
           <a className="logo" href='https://www.linkedin.com/in/abdelrahmanmohamd/'><FaLinkedin/></a>
        </div>
    )
}
export default Footer;