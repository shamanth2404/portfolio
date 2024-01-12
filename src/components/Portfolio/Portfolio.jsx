import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from './framer-motion';
import React, { useRef } from "react";
import instgram from '../../assets/InstagramClone.png';
import blinkit from '../../assets/BlinkitClone.png';
import news from '../../assets/NewsApp.png';
import admin from '../../assets/AdminDashboard.png';
import medicare from '../../assets/MediCare.png';

const items = [
  {
    id: 1,
    title: "MediCare",
    img: medicare,
    desc: "Doctor Appointment Managing system developed using MERN - MongoDB , Express.js , ReactJs , Node.js. It includes User registration , login , authentication.",
    github : "",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    img: admin,
    desc: "Developed an Admin Dashboard web application using React.js and Material-UI as the primary frontend technologies. Used Nivo - a ReactJs library to include graphs/charts in the website",
    github : "",
  },
  {
    id: 3,
    title: "News App",
    img: news,
    desc: "An API based frontend project (HTML , CSS , JavaScript) ",
    github : "",
  },
  {
    id: 4,
    title: "Blinkit Clone",
    img: blinkit,
    desc: "Responsive Clone of an e-commerce website using BootStrap ",
    github : "",
  },
  {
    id: 5,
    title: "Instagram Clone",
    img: instgram,
    desc: "HTML CSS Only",
    github : "",
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
            <a href={item.github}><button>Github Link</button></a>
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
