import React from "react";
import "./hero.scss";
// import { motion } from "framer-motion";
import github from '../../assets/github-icon.png'
import linkedIn from '../../assets/linkedIn-logo.png'
import leetCode from '../../assets/LeetCode_logo.png'
import codeChef from '../../assets/codeChef-logo.png'

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
  return (    
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>SHAMANTH K MURTHY</h2>
          <h1>Front End Developer</h1>
          <div className="buttons">
            <a href="#Portfolio"><button>See the Latest Works</button></a>
            <a href="#Contact"><button>Conatct Me</button></a>
          </div>
        </div>
        <div className="profileContainer">
          <h2>PROFILES</h2>
          <div className="profiles">
            <div className="profile">
              <a href="https://github.com/shamanth2404" target="_blank">
                <img src={github} alt="" />
                <p>Github</p>
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/shamanth-k-murthy-161494278/" target="_blank">
                <img src={linkedIn} alt="" />
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
          <div className="profiles">
            <div className="profile">
              <a href="https://leetcode.com/shamanthk2404/" target="_blank">
                <img src={leetCode} alt="" />
                <p>LeetCode</p>
              </a>
            </div>
            <div className="profile">
              <a href="https://www.codechef.com/users/shamanthk2404" target="_blank">
                <img src={codeChef} alt="" />
                <p>CodeChef</p>
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
