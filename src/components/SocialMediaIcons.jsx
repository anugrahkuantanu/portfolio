import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faGithubSquare, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto:anugrahkuantanu@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faPaperPlane} size="2xl" style={{color: "f7f7f7",}} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anugrah-k-30914a163"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "f7f7f7",}} />
      </a>
      <a 
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/kuantanu"
        >
        <FontAwesomeIcon icon={faGithubSquare} size="2xl" style={{color: "#f7f7f7",}} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/anugrahkuantanu"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f7f7f7",}} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
