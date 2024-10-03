# Frontend Mentor - Article preview component solution

This is a solution to the **[Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)** by **[Dacardonac](https://github.com/Dacardonac)**. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

**Users should be able to see in this project:**

- View the optimal layout depending on their device's screen size (Responsive)
- Styles in Components (Sass/Scss)
- DOM (Document Object Model)

### Screenshot

![Solution Screenshot]()

### Links

- Solution URL: **[Frontend Mentor Solution]()**
- Live Site URL: **[Solution Deploy]()**

## My process

### Built with

- Semantic HTML5 Markup
- CSS3 Custom Properties
- Flexbox
- Mobile-first Workflow
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Sass/Scss](https://sass-lang.com/) - Modules
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming Language

### What I learned

I learned and implemented Javascript, along with its properties and methods. I also reinforced and practiced my CSS knowledge with Sass, and worked on semantic HTML while applying the BEM methodology for class naming.

You can see an example below:

``` SCSS



```

``` JavaScript
shareBtn.addEventListener("click", () => {
  shared.classList.add('card__shared-visible');
  if (shared.classList.contains('card__shared-visible')) {
    user.classList.add('card__user-hidden');
    paragraph.classList.add('card__paragraph-padding');
  }
});

document.addEventListener('click', (event) => {
  if (!shared.contains(event.target) && !shareBtn.contains(event.target)) {
    shared.classList.remove('card__shared-visible');
    user.classList.remove('card__user-hidden');
    paragraph.classList.remove('card__paragraph-padding');
  }
});
```

### Continued development

With this path, I want to continue learning more about **JavaScript**, **Responsive Design** and how to work across different devices with **Flexbox** and **Grid**, also I want continue using  **BEM methodology** and perfect the technique in aspects like name the classes, also I want to improve in modularize the component's styles with **Sass** and learn about **Conventional Commits**.

### Useful resources

- **[MDN](https://developer.mozilla.org/en-US/)** - This helped me with **Documentation** on many topics, mostly with **HTML** and **CSS** properties.
- **[ChatGPT](https://chatgpt.com/)** - This is an incredible **Artificial Intelligence (AI)** tool, **ChatGPT** helps me with **specific topics**, **errors in the project** and **investigations**.

## Author

- Frontend Mentor - **[@Dacardonac](https://www.frontendmentor.io/profile/Dacardonac)**
- LinkedIn - **[@Daniel Alejandro Cano Cardona](https://www.linkedin.com/in/daniel-alejandro-cano-cardona/)**

## Acknowledgments

I want to thank **[Jairovg](https://github.com/jairovg)** for the teachings and his help to complete this challenge in a good way and with good practices.