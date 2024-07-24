import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear}Divyansh Sharma</small>
      <div className="social-links">
        <Link to="https://x.com/Divyansh0631" target="_blank">
          <BsTwitter />
        </Link>
        <Link to="https://github.com/divyanshlight" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/divyansh-sharma-72b5b21b2" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
