import React from "react";
import "./homepage.css";
import ExpandibleCard from '../../components/expandCard'
import { homeViewConstants } from "../../constants";

const HomeContainerView = () => {
 

  const WavesElement = [
    <svg className="waveDown3" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path
        d="M501.41,76.47 C454.57,72.53 488.42,140.63 430.30,150.48 L501.41,150.48 L501.41,87.33 Z"
        style={{ fill: "#ff9786" }}
      ></path>
    </svg>,
    <svg className="waveDown4" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path
        d="M501.41,114.95 C464.73,113.97 429.17,112.00 402.09,150.48 L500.00,150.00 L500.27,116.94 Z"
        style={{ fill: "#FFDC7C" }}
      ></path>
    </svg>,
  ];
  return (
    <>
      <main className="mainContainer">
        <div className="imageContainer">
          <img alt="Abc" src="../images/beatifulCat.png" />
        </div>
        <div className="contentContainer">
          <div id="textContent">
            <h3>What we do?</h3>
            <p>
            {homeViewConstants.title}
            </p>
            <p>
              {homeViewConstants.subtitle}
            </p>
          </div>
          <a className="btn" href="./pets.html">
            Let's adopt <i className="fas fa-paw"></i>
          </a>
        </div>
        {WavesElement}
      </main>
      <section id="requirementsContainer">
        <p id="requirementsTitle">
          Take in mind this requirements for the adoption
        </p>
        <div id="main">
            {
                homeViewConstants.requirements.map(item=>(<ExpandibleCard {...item} />))
            }
        </div>
      </section>
    </>
  );
};

export default HomeContainerView;
