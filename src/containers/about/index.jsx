import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiReact, DiBootstrap } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Laraib Kamal ",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "laraib1999khan@gmail.com",
  },
  {
    label: "Contact No",
    value: "9205650356",
  },
];

const jobSummary =
  "As a web development aficionado, I bring a unique perspective to the table. Currently pursuing my Bachelor's degree in Computer Science and Engineering from LOVELY PROFESSIONAL UNIVERSITY, I am on a mission to challenge the status quo and create extraordinary web experiences. With a creative flair, a keen eye for detail, and a passion for innovation, I strive to make my mark in the world of Frontend Web Development,";
  const skillset = <p>
   Tech Maestro: JavaScript, C, C++, Python<br></br>
  Design Guru: HTML, CSS, React<br></br>
  Problem-Solving Prodigy: Data Structures, Algorithms<br></br>
  Version Control Whiz: Git<br></br>
  Database Dynamo: MySQL<br></br>
  Analytical Alchemist: Strong analytical and logical skills<br></br>
  Collaborative Champion: Excellent communication and creative thinking 
  </p>;
  const passion=<p>
    What sets me apart is my unwavering passion for blending creativity with technology. I constantly seek out new design trends, innovative tools, and emerging technologies to create unique and memorable web experiences. I am not afraid to push the boundaries of what's possible, always striving to deliver extraordinary results.
  </p>
  const Mindset=<p>
    With a natural curiosity and a penchant for innovation, I am always eager to experiment and explore new horizons. I am known for my out-of-the-box thinking, constantly challenging conventions, and seeking creative solutions to complex problems. I thrive in dynamic environments that foster innovation and collaboration.

  </p>
  const Connect=<p>I am eager to collaborate with like-minded individuals and organizations that share my vision for pushing the boundaries of web development. If you're looking for a passionate, creative, and innovative Frontend Web Developer, let's connect and explore how we can create something truly remarkable together! </p>
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
            <h3>Skills</h3>
            <p>{skillset}</p>
            <h3>Passion</h3>
            <p>{passion}</p>
            <h3>Mindset</h3>
            <p>{Mindset}</p>
            <h3>Lets Connect</h3>
            <p>{Connect}</p>
            
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiBootstrap size={60} color="var( --yellow-theme-main-color)" />
              </div>
              
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
