// Main containers
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// Article
const article = document.createElement('article');
article.classList.add('card');

// Create the figure for the main image
const figure = document.createElement('figure');
figure.classList.add('card__figure');
const img = document.createElement('img');
img.classList.add('card__figure-img');
img.src = './assets/images/drawers.webp';
img.alt = 'Drawers';
figure.appendChild(img);

// Card Title
const title = document.createElement('h1');
title.classList.add('card__title');
title.textContent = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';

// Card Paragraph
const paragraph = document.createElement('p');
paragraph.classList.add('card__paragraph');
paragraph.textContent = "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.";

// Card User Profile
const userDiv = document.createElement('div');
userDiv.classList.add('card__user');

// User Image (avatar)
const userFigure = document.createElement('figure');
userFigure.classList.add('card__user-figure');
const userImg = document.createElement('img');
userImg.src = './assets/images/avatar-michelle.webp';
userImg.alt = 'User image (Avatar)';
userFigure.appendChild(userImg);

// Username
const username = document.createElement('p');
username.classList.add('card__user-username');
username.textContent = 'Michelle Appleton';

// Date
const userDate = document.createElement('p');
userDate.classList.add('card__user-date');
const time = document.createElement('time');
time.setAttribute('datetime', '2020-06-28');
time.textContent = '28 Jun 2020';
userDate.appendChild(time);

// Add everything to User section
userDiv.appendChild(userFigure);
userDiv.appendChild(username);
userDiv.appendChild(userDate);

// Button Share
const shareButton = document.createElement('button');
shareButton.classList.add('card__share-button', 'card__share-button--active');
shareButton.setAttribute('aria-label', 'Share this card');
const shareImg = document.createElement('img');
shareImg.src = './assets/images/icon-share.svg';
shareImg.alt = 'Icon Share';
shareButton.appendChild(shareImg);

// Add all elements to the Article
article.appendChild(figure);
article.appendChild(title);
article.appendChild(paragraph);
article.appendChild(userDiv);
article.appendChild(shareButton);

// Insert the Article in the Main
main.appendChild(article);

// Footer Content
footer.classList.add('footer');
footer.innerHTML = `
  <div class="footer__attribution">
    Challenge by <a class="footer__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a class="footer__link" href="https://github.com/Dacardonac" target="_blank">Daniel Alejandro Cano Cardona</a>.
  </div>
`;
