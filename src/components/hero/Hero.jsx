import React from "react";
import "./hero.scss";
// import { motion } from "framer-motion";
import github from '../../assets/github-icon.png'
import linkedIn from '../../assets/linkedIn-logo.png'
import leetCode from '../../assets/LeetCode_logo.png'
import codeChef from '../../assets/codeChef-logo.png'
import css from '../../assets/css.png'
import express from '../../assets/expressjs.png'
import nodejs from '../../assets/nodejs.png'
import html from '../../assets/html.png'
import js from '../../assets/javascript.png'
import mongo from '../../assets/mongodb.png'
import git from '../../assets/git.png'
import react from '../../assets/react.png'
import c from '../../assets/c++.svg'


const Hero = () => {
  // const sliderVariants = {
  //   initial: {
  //     x: 1000,
  //   },
  //   animate: {
  //     x: "-250%",
  //     transition: {
  //       repeat: "Infinity",
  //       repeatType: "mirror",
  //       duration: 10,
  //     },
  //   },
  // };
  const openPdf = () => {
    window.open('/ShamanthKMurthyResume.pdf', '_blank');
  };
  
  return (    
    <div className="hero">      
      {/* <a href="#Home" className="home">Home</a> */}
      <div className="wrapper">
        <div className="textContainer">
          <h2>SHAMANTH K MURTHY</h2>
          <h1>Full Stack Developer</h1>
          <div className="buttons">
            <button onClick={openPdf}>Resume</button>            
            <a href="#Portfolio"><button>Projects</button></a>
            <a href="#Contacts"><button>Profiles</button></a>
          </div>
        </div>
        <div className="profileContainer">
          
          <div className="profiles">
            <div className="profile">
              <a href="https://github.com/shamanth2404" target="_blank">
                <img src={react} alt="" />
                {/* <p>Github</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={git} alt="" />
                {/* <p>LinkedIn</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={html} alt="" />
                {/* <p>LinkedIn</p> */}
              </a>
            </div>
          </div>
          <div className="profiles">
            <div className="profile">
              <a href="https://leetcode.com/shamanthk2404/" target="_blank">
                <img src={nodejs} alt="" />
                {/* <p>LeetCode</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.codechef.com/users/shamanthk2404" target="_blank">
                <img src={c} alt="" />
                {/* <p>CodeChef</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={css} alt="" />
                {/* <p>LinkedIn</p> */}
              </a>
            </div>
          </div>
          <div className="profiles">
            <div className="profile">
              <a href="https://github.com/shamanth2404" target="_blank">
                <img src={express} alt="" />
                {/* <p>Github</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={mongo} alt="" />
                {/* <p>LinkedIn</p> */}
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={js} alt="" />
                {/* <p>LinkedIn</p> */}
              </a>
            </div>
          </div>
          
        </div>
      </div>
      {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            C++ React NodeJs MongoDB 
        </motion.div> */}
    </div>
  );
};

export default Hero;
