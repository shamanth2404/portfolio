import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from '../../../node_modules/framer-motion';
import React, { useRef } from "react";
import instgram from '../../assets/InstagramClone.png';
import blinkit from '../../assets/BlinkitClone.png';
import news from '../../assets/NewsApp.png';
import admin from '../../assets/AdminDashboard.png';
import medicare from '../../assets/MediCare.png';
import field from '../../assets/field2door.png';

const items = [
  {
    id: 1,
    title: "Field2Door",
    img: field,
    desc: "A website through which farmers can directly sell their products to customers. Designed and implemented the compelete backend using Node.js, Express.js and MySql to store data, integrating it with frontend(HTML,CSS,JS) designed by my teammates.",
    github : "https://github.com/Shree-sudhanva-k/web-development/tree/main/Backend",
  },
  {
    id: 2,
    title: "MediCare",
    img: medicare,
    desc: "Doctor Appointment Managing system developed using MERN - MongoDB , Express.js , ReactJs , Node.js. It includes User registration , login , authentication.",
    github : "https://github.com/shamanth2404/DoctorAppointment",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    img: admin,
    desc: "Developed an Admin Dashboard web application using React.js and Material-UI as the primary frontend technologies. Used Nivo - a ReactJs library to include graphs/charts in the website",
    github : "https://github.com/shamanth2404/AdminDashboard",
  },
  {
    id: 4,
    title: "News App",
    img: news,
    desc: "A dynamic and responsive web application that leverages APIs to provide users with curated news content developed using HTML, CSS, and JavaScript. ",
    github : "https://github.com/shamanth2404/NewsApp",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    img: blinkit,
    desc: "A  Bootstrap based e-commerce website, offers a clean and responsive design using its grid system",
    github : "https://github.com/shamanth2404/e-commerce",
  },
  {
    id: 6,
    title: "Instagram Clone",
    img: instgram,
    desc: "A simple, HTML and CSS-based project that emulates the core visual elements of Instagram's interface.It provides a snapshot of the original website, offering a responsive layout",
    github : "https://github.com/shamanth2404/SocialMediaPlatform",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <a href={item.github} target="_blank"><button>Github Link</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
