import React from "react";
import './contacts.scss';
import gmail from '../../assets/Gmail_icon.jpg';
import linkedIn from '../../assets/linkedIn-logo.png';
import instagram from '../../assets/Instagram_icon.png.jpg';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contact">
        <img src={gmail} alt="" />
        <h2>Mail</h2>
        <span>shamanthk2404@gmail.com</span>
      </div>
      <div className="contact">
        <img src={linkedIn} alt="" />
        <h2>LinkedIn</h2>
        <a href="http://www.linkedin.com/in/shamanth-k-murthy-161494278" target="_blank">Shamanth K Murthy</a>
      </div>
      <div className="contact">
        <img src={instagram} alt="" />
        <h2>Instagram</h2>
        <span>@shamanthkmurthy</span>
      </div>
    </div>
  );
};

export default Contacts;
