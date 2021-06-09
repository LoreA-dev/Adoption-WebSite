const slideDown = () => {
    window.scroll({
        top: document.querySelector("#another-section").offsetTop,
        behavior: "smooth",
    });
}