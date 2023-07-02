import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaFileDownload,FaHandHoldingUsd } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  const openResume = () => {
    window.open("https://drive.google.com/drive/folders/1oN0COepb7kLGjsbqRznn-29aQHFEGSue?usp=sharing", "_blank");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
           Hello, I'm Laraib &lt;/&gt;
          <br />
         <h6>Welcome to my Portfolio app</h6> 
        </h1>
        <br />
       
      </div>
      
      
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me &nbsp;{<FaHandHoldingUsd size={30} />} </button>
          <button onClick={openResume}>Download Resume {<FaFileDownload size={30} />}</button>
        </div>
        
      </Animate>
    </section>
  );
};
export default Home;
