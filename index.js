const allRatings = document.querySelectorAll(".rating")
let selectedRating = document.querySelector('#your-rating')
let submitBtn = document.querySelector('.btn')
let card = document.querySelector('.card')
let card2 = document.querySelector('#card2')

allRatings.forEach(rating => {
    rating.addEventListener('click', function () {          
    allRatings.forEach(r => {
    r.classList.remove('clicked')
});
rating.classList.add('clicked')
selectedRating.textContent = rating.textContent 
})
});

 function submit() {
    card.style.display = "none"
    card2.style.display = "block"
    }

