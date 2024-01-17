'use strict';

const ratingContainer = document.getElementById('rating-container');
const thanksContainer = document.getElementById('thanks-container');
const sendBtn = document.querySelector('.btn-submit');
const ratingBtns = document.querySelectorAll('.btn-rating');
const ratingEl = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');
let rating = 0;

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rates.forEach((btn) => {
      btn.classList.remove('active');
    });

    rate.classList.add('active');

    ratingEl.textContent = rate.textContent;
  });
});

const sendRating = () => {
  ratingContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
};

sendBtn.addEventListener('click', sendRating);
