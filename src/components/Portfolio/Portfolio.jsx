import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Amazon Clone",
    img: "https://www.performics.com/in/wp-content/uploads/sites/6/2023/06/amazon-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate saepe a ipsam. Aliquid rem corrupti repudiandae rerum officiis reiciendis.",
  },
  {
    id: 2,
    title: "Amazon Clone",
    img: "https://www.performics.com/in/wp-content/uploads/sites/6/2023/06/amazon-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate saepe a ipsam. Aliquid rem corrupti repudiandae rerum officiis reiciendis.",
  },
  {
    id: 3,
    title: "Amazon Clone",
    img: "https://www.performics.com/in/wp-content/uploads/sites/6/2023/06/amazon-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate saepe a ipsam. Aliquid rem corrupti repudiandae rerum officiis reiciendis.",
  },
  {
    id: 4,
    title: "Amazon Clone",
    img: "https://www.performics.com/in/wp-content/uploads/sites/6/2023/06/amazon-3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate saepe a ipsam. Aliquid rem corrupti repudiandae rerum officiis reiciendis.",
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
            <button>See Demo</button>
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
