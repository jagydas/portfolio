import React from 'react';
import { FaGithub, FaLinkedin, FaBehanceSquare, FaInstagram, FaFacebook } from "react-icons/fa";
import { validateEmail } from '../../utils/helper';
function Footer() {
    return (
      <div className="footer-div">
        <footer>
          <ul>
            <a href="https://github.com/jagydas" target="blank">
              <li>
                <FaGithub />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/jagyanseni-das/" target="blank">
              <li>
                <FaLinkedin />
              </li>
            </a>

            <a href="https://facebook.com" target="blank">
              <li>
                <FaFacebook/>
              </li>
            </a>
          </ul>
        </footer>
      </div>
    );
  };
  
  export default Footer;
 