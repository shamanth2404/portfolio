import React from "react";
import './contacts.scss';
import gmail from '../../assets/Gmail_icon.jpg';
import linkedIn from '../../assets/linkedIn-logo.png';
import instagram from '../../assets/Instagram_icon.png.jpg';
import github from '../../assets/github-icon.png'
import leetCode from '../../assets/LeetCode_logo.png'
import codeChef from '../../assets/codeChef-logo.png'

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Profiles :</h1>
      <div className="contact">
        <img src={leetCode} alt="" />
        <h2>Leetcode</h2>
        <p>Highest Rating: <span>1550</span></p>
        <p><span>180+</span> Problems Solved</p>
      </div>
      <div className="contact">
        <img src={codeChef} alt="" />
        <h2>CodeChef</h2>
        <p>Highest Rating: <span> 1240</span></p>  
        <p><span>70+</span> Problems Solved</p>      
      </div>
      <div className="contact">
        <img src={github} alt="" />
        <h2>Github</h2>
        <p><span>15+</span> Repos</p>
      </div>
    </div>
  );
};

export default Contacts;
