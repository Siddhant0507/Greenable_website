import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Components/styles/Homescreen.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp} from "react-icons/ai";

function Homepage() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      question: "What is Greenable ?",
      answer:
        "CharzIt is charging station platform for electric cars from various well-know and trusted brands. The Price is cheap, it doesn't drain the pocket too, we are environmentally friendly, easy to find anywhere, our products are good, our service has been proven to be the best",
    },
    {
      question: " How Greenable Work ?",
      answer:
        "You can use the app to find the nearest charging station and book the charging slot before even going to there. the app has easy ui to use and useful info to provide dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.",
    },
    {
      question: "is it Greenable free ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo",
    },
    {
      question: "is it Greenable free ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo",
    },
    {
      question: "is it Greenable free ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="home-first-div">
        <h1 className="home-title">
          A Dedicated <span className="green-text">Team</span> to grow your
          comapny
        </h1>
        <p className="home-desc">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>

        <button className="get-btn">
          Get Started <AiOutlineArrowRight />{" "}
        </button>
      </div>

      {/* Number Animation */}
      <div className="home-second-div">
        <div>
          <h2 className="number-title">500+</h2>
          <p className="number-desc">Happy Clients</p>
        </div>
        <div>
          <h2 className="number-title">500+</h2>
          <p className="number-desc">Happy Clients</p>
        </div>
        <div>
          <h2 className="number-title">500+</h2>
          <p className="number-desc">Happy Clients</p>
        </div>
        <div>
          <h2 className="number-title">500+</h2>
          <p className="number-desc">Happy Clients</p>
        </div>
      </div>

      {/* Card Section */}
      <h2 className="home-subheading">Industries We Work In </h2>
      <p className="home-subdesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <div className="card-container">
        <div className="card-body">
          <div className="card-img"></div>
          <h3 className="card-title">Card Title</h3>
          <p className="card-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>

        <div className="card-body">
          <div className="card-img"></div>
          <h3 className="card-title">Card Title</h3>
          <p className="card-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>

        <div className="card-body">
          <div className="card-img"></div>
          <h3 className="card-title">Card Title</h3>
          <p className="card-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>

      <div className="card-btn">
        <button className="get-btn">
          See All Catogaries <AiOutlineArrowRight />
        </button>
      </div>

      {/* How do We Work */}
      <h2 className="home-subheading">How do We Work</h2>
      <p className="home-subdesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <div className="card2-container">
        <div className="card2-body">
          <div className="search-icon">
            <BiSearchAlt2 />
          </div>
          <h3 className="card2-title">Lorem Ipsum Sit Amet</h3>
          <p className="card2-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
          <div className="right-arrow">
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="card2-body">
          <div className="search-icon">
            <BiSearchAlt2 />
          </div>
          <h3 className="card2-title">Lorem Ipsum Sit Amet</h3>
          <p className="card2-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
          <div className="right-arrow">
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="card2-body">
          <div className="search-icon">
            <BiSearchAlt2 />
          </div>
          <h3 className="card2-title">Lorem Ipsum Sit Amet</h3>
          <p className="card2-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat.
          </p>
          <div className="right-arrow">
            <BsArrowRightCircle />
          </div>
        </div>
      </div>

      {/* Latest Project */}
      <h2 className="home-subheading">
        Latest Projects, Solution and Energy Supplies
      </h2>
      <p className="home-subdesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <div className="grid-div">
        <div className="grid-item1"></div>
        <div className="grid-item2">
          <div className="grid2-div">
            <p className="grid-title">Lorem Ipsum is simply dummy</p>
            <button className="get-btn">
              Read More <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
      </div>

      <div className="grid2-div">
        <button className="get-btn">
          See all Projects <AiOutlineArrowRight />
        </button>
      </div>


      {/* card Reviews  */}
    <div className="review-div">
    <div className="review-title">
      <h2 className="review-heading">What they say about Greenable</h2>
      <p className="review-desc">More than 3000 users have been helped by World Online Course.</p>
    </div>
    <div className="review-card">
      <div className="review-card-body"></div>
    </div>
    </div>


      {/* FAQ section */}

      <h2 className="home-subheading">GRENEWABLE FAQ</h2>
      <p className="home-subdesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <div className="wrapper">
        <div className="accordian">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>{" "}
                <span>{selected === i ? <AiOutlineUp/> : <AiOutlineDown/>}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Homepage;
