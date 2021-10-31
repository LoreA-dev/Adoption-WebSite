import React from 'react'

const HomeContainerView = ()=>{
    return (
        <main class="mainContainer">
        <div class="imageContainer">
            <img alt="Abc" src="../images/beatifulCat.png"/>
        </div>
        <div class="contentContainer">
            <div id="textContent">
                <h3>What we do?</h3>
                <p>We try to improve the lives of animals that are in a situation of abuse and / or abandonmet. Relieve
                    their suffering and give them an important place in our society.</p>
                <p>AnimaLovers we seek, for each of them, responsible, loving homes that fit their needs.</p>
            </div>
            <a class="btn" href="./pets.html">Let's adopt <i class="fas fa-paw"></i></a>
        </div>
        <svg class="waveDown1" viewBox="0 0 800 150" preserveAspectRatio="none">
            <path d="M-5.36,-4.44 C13.26,199.83 108.07,-6.41 200.80,150.00 L-0.84,151.47 L-5.92,-2.45 Z"
                style={{fill: "#ff9786"}}></path>
        </svg>
        <svg class="waveDown2" viewBox="0 0 800 150" preserveAspectRatio="none">
            <path d="M0.28,56.73 C57.84,26.14 127.25,76.47 128.38,146.53 L126.69,149.50 L0.00,150.00 Z"
                style={{fill: "#FFDC7C"}}></path>
        </svg>
        <svg class="waveDown3" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M501.41,76.47 C454.57,72.53 488.42,140.63 430.30,150.48 L501.41,150.48 L501.41,87.33 Z"
                style={{fill: "#ff9786"}}></path>
        </svg>
        <svg class="waveDown4" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M501.41,114.95 C464.73,113.97 429.17,112.00 402.09,150.48 L500.00,150.00 L500.27,116.94 Z"
                style={{fill: "#FFDC7C"}}></path>
        </svg>
    </main>
    )
}

export default HomeContainerView