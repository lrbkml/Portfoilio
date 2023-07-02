import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsPerson } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/counter.jpg";
import ImageSeven from "../../images/calculator.jpg";
import ImageEight from "../../images/chat.jpg";
import ImageNine from "../../images/quiz.jpg";
import ImageTen from "../../images/weather.jpg";
import ImageEleven from "../../images/text.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Weather App",
    image: ImageTen,
    link: "https://weatherlrb.netlify.app/",
    
  },

  {
    id: 2,
    name: "Quiz-App",
    image: ImageNine,
    link: "https://quiz-lrb.netlify.app/"

    
  },
  {
    id: 2,
    name: "Simple Counter",
    image: ImageSix,
    link: "https://counter-lrb.netlify.app/"

    
  },
  {
    id: 3,
    name: "Tic Tac Game(py)",
    image: ImageFive,
    link:"https://github.com/lrbkml/tic-tac"
  },
  {
    id: 2,
    name: "Chat Application",
    image: ImageEight,
    link:"https://github.com/lrbkml/Chat-Applicatiion"
   
  },
  {
    id: 3,
    name: "Currency Converter(py)",
    image: ImageFour,
    link:"https://github.com/lrbkml/Currency-Converter"

  },
  {
    id: 2,
    name: "School Website",
    image: ImageOne,
    link: "https://ssms.netlify.app/"
    
  },
  {
    id: 2,
    name: "Calculator",
    image: ImageSeven,
    link: "https://calculator-lrb.netlify.app/"

    
  },
  
  {
    id: 3,
    name: "Password-Generator(py)",
    image: ImageTwo,
    link:"https://github.com/lrbkml/password-generator"


    
  },
 
  {
    id: 2,
    name: "TextUtils",
    image: ImageEleven,
    link: "https://github.com/lrbkml/Textutils"

    
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Web-dev",
  },
  {
    filterId: 3,
    label: "Other",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsPerson size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={() => {
                       
                        window.open(item.link, "_blank");
                      }}
                    >
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
