import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {
    // const sliderVariants = {
    //     initial:{
    //         x:900,
    //     },
    //     animate:{
    //         x:"-155%",
    //         transition:{
    //             repeat:"Infinity",
    //             repeatType: "mirror",
    //             duration: 10,
                                
    //         },
    //     },
    // }
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>SHAMANTH K MURTHY</h2>
                <h1>Web Developer & Freelancer</h1>
                <div className="buttons">
                    <button>See the Latest Works</button>
                    <button>Conatct Me</button>
                </div>
            </div>
        </div>
        {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Developer Freelancer
        </motion.div> */}
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
