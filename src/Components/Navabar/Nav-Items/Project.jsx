import React, { useEffect, useState } from "react";
import data from "../Data/data.json";
import "../NavItemsStyle/project.scss";

const Project = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const prevIndex = () => {
    setImgIndex((imgIndex - 1 + data.length) % data.length);
  };
  const nextIndex = () => {
    setImgIndex((imgIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightToggle = () => {
    setIsLightOn((isLightOn) => !isLightOn);
  };

  return (
    <div
      className={`project-container ${isLightOn ? "light-off" : "light-on"}`}
    >
      <div className="title">
        <h1>Projects</h1>
        <button className="btn" onClick={handleLightToggle}>
          {!isLightOn ? "Dark" : "Light"}
        </button>
      </div>
      <div className="box1">
        <button onClick={prevIndex}>Prev</button>
        {data.map((item, index) => (
          <div
            className={`box2 ${imgIndex === index ? "visible" : "hidden"}`}
            key={index}
          >
            <h1>{item.title}</h1>
            <img src={item.img} alt="" />
            <p>{item.description}</p>
            <a href={item.url} target="_blank">
              URL
            </a>
          </div>
        ))}
        <button onClick={nextIndex}>Next</button>
      </div>
    </div>
  );
};

export default Project;
