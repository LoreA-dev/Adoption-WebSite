import React from "react";
import "./homepage.css";
import ExpandibleCard from '../../components/expandCard'
const HomeContainerView = () => {
  const constants = {
    title:
      "We try to improve the lives of animals that are in a situation of abuse and / or abandonmet. Relieve their suffering and give them an important place in our society.",
    subtitle: `AnimaLovers we seek, for each of them, responsible, loving homes that fit their needs.`,
    requirements: [{
        title: "You have to be an adult", 
        text: "It's important to be legal age, because that tells us that the adopter is responsable, and will take care of the animal.", 
        icon: "far fa-id-card"
    }, {
        title: "Have approved form", 
        text: " Is necessary to know your current condition and environment, knowing if you can take care of the pet. Form has to be approved.", 
        icon: "fas fa-tasks"
    }, {
        title: "Enough space for the pet", 
        text: "They need space at home where they can go to clear their minds, give them their comfort space.", 
        icon: "fas fa-cat"
    }, {
        title: "Sterilization commitment", 
        text: " The sterilisation is a requirement for the adoption. Sterilisation reduces the number of animals on the street.", 
        icon: "fas fa-cut", 
    }, {
        title: "All family in agreement", 
        text: "The pet will be living with your family. It’s a good idea to make sure everyone in the family gets along with the new pet.", 
        icon: "fas fa-users", 
    }, {
        title: "Signature of the contract", 
        text: "Before the adoption, we need to be sure that you will be able to assume all the conditions for the adoption.", 
        icon: "fas fa-file-contract"
    }]
  };

  const WavesElement = [
    <svg class="waveDown3" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path
        d="M501.41,76.47 C454.57,72.53 488.42,140.63 430.30,150.48 L501.41,150.48 L501.41,87.33 Z"
        style={{ fill: "#ff9786" }}
      ></path>
    </svg>,
    <svg class="waveDown4" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path
        d="M501.41,114.95 C464.73,113.97 429.17,112.00 402.09,150.48 L500.00,150.00 L500.27,116.94 Z"
        style={{ fill: "#FFDC7C" }}
      ></path>
    </svg>,
  ];
  return (
    <>
      <main class="mainContainer">
        <div class="imageContainer">
          <img alt="Abc" src="../images/beatifulCat.png" />
        </div>
        <div class="contentContainer">
          <div id="textContent">
            <h3>What we do?</h3>
            <p>
            {constants.title}
            </p>
            <p>
              {constants.subtitle}
            </p>
          </div>
          <a class="btn" href="./pets.html">
            Let's adopt <i class="fas fa-paw"></i>
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
                constants.requirements.map(item=>(<ExpandibleCard {...item} />))
            }
        </div>
      </section>
    </>
  );
};

export default HomeContainerView;
