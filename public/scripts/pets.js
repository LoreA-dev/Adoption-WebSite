var heartIcon = document.getElementsByClassName('favoriteIcon')[0];

Array.from(heartIcon).forEach( icon => icon.addEventListener('click', function() {
    this.parentElement.getElementsByClassName('petCardImage')[0].classList.add('selected');
}));

// heartIcon.addEventListener('click', function () {
//     if (heartIcon.classList.contains('selected')) {
//         heartIcon.classList.remove('selected');

//     } else {
//         heartIcon.classList.add('selected');
//     }
// });

