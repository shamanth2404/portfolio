import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    initial: {
      translateY: 0,
      opacity: 0,
    },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        staggerChildren: 1,
      },
    },
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          Contact
          <br /> Me
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>shamanthk2404@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <span>shamanthk2404@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Instagram</h2>
          <span>@shamanthkmurthy</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        <motion.form action="#">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
