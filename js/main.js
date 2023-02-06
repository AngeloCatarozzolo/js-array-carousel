function nextSlide() {
    items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === images.length - 1 ) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    items[currentImageIndex].classList.add("active");
}

function prevSlide() {
    items[currentImageIndex].classList.remove("active");
    if( currentImageIndex === 0 ) {
        currentImageIndex = images.length - 1;
    } else {
        currentImageIndex--;
    }
    items[currentImageIndex].classList.add("active");
}

const images = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

const itemsContainer = document.querySelector(".items");
for( let i = 0; i < images.length; i++ ) {
    const srcImg = images[i];
    const item = `<div class="item"><img src="${srcImg}" alt=""></div>`;
    itemsContainer.innerHTML += item;
}

let currentImageIndex = 0;
const items = document.querySelectorAll(".item");
items[currentImageIndex].classList.add("active");

const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", nextSlide);

let autoplay = setInterval(nextSlide, 2000);

const prevBtn = document.querySelector(".prev");

prevBtn.addEventListener("click", prevSlide);

itemsContainer.addEventListener('mouseenter', function() {
    console.log('mouseenter');
    clearInterval(autoplay);
});

itemsContainer.addEventListener('mouseleave', function() {
    autoplay = setInterval(nextSlide, 2000);
});