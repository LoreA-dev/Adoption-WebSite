import React,{Fragment} from "react";
import "./homepage.css";
import "./mobile.css";
import ExpandibleCard from '../../components/expandCard'
import { homeViewConstants, WavesElement } from "../../constants";

const HomeContainerView = () => {
 

  
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
        {WavesElement.map((wave,index)=><Fragment key={index}>{wave}</Fragment>)}
      </main>
      <section id="requirementsContainer">
        <p id="requirementsTitle">
          Take in mind this requirements for the adoption
        </p>
        <div id="main">
            {
              homeViewConstants.requirements.map(item=>(<ExpandibleCard key={item.id} {...item} />))
            }
        </div>
      </section>
    </>
  );
};

export default HomeContainerView;
