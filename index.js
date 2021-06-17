// ***** SELECT ELEMENTS FROM DOM *****
const slides = document.querySelectorAll('.slide');
const containerImg = document.querySelector('.img-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Confirm the index of images
let index = 0;
let percentage = 0;

// ***** EVENT LISTENERS *****
// Enables the ability to switch between images with the left and right arrow keys
window.addEventListener('keyup', function (e) {
    if (e.keyCode === 37 && index > 0) {
        index--;
        control();
        goBackImg();
    } else if (e.keyCode === 39 && index < slides.length-1) {
        index++;
        control();
        advanceImg();
    }
});


// Set previous button
prevBtn.addEventListener('click', function () {
    index--;
    console.log(index);
    control();
    goBackImg();
});

// Set next button
nextBtn.addEventListener('click', function () {
    index++;
    console.log(index);
    control();
    advanceImg();
});

// Hide and show the control buttons
function control() {
    if (index > 0) {
        prevBtn.classList.add('show');
    } else {
        prevBtn.classList.remove('show');
    }
    
    if (index >= slides.length-1) {
        nextBtn.classList.remove('show');
    } else {
        nextBtn.classList.add('show');
    }
}

function advanceImg() {
    percentage -= 100;
    slides.forEach(sld => {
        sld.style.transform = `translateX(${percentage}%)`;
    });
}

function goBackImg() {
    percentage += 100;
    slides.forEach(sld => {
        sld.style.transform = `translateX(${percentage}%)`;
    });
}