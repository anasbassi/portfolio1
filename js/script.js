const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');
const cardsContainer = document.querySelector('.cards-container');

const projectsData = [
  {
    name: 'Todo list',
    description:
      'To-do-List website is a page that contains information that you already listed of shores and things to do . The list can be generated from the application by writing in the field provided, the list can also be editted, and removed. The to-do-list app can also save the checked and clear them using the clear all completed button.',
    imageUrl: [
      './images/projects/todo.jpg',
      './images/projects/todo.jpg',
      './images/projects/todo.jpg',
    ],
    technologies: ['React', 'Redux', 'CSS', 'API'],
    linkLive: 'https://myto-do-list-app.netlify.app/',
    linkSource: 'https://github.com/anasbassi/todo-list',
  },
  {
    name: 'Bookstore CMS',
    description:
      'The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author, and selecting from the categories, and remove a selected book.',
    imageUrl: [
      './images/projects/bookstore.webp',
      './images/projects/bookstore.webp',
      './images/projects/bookstore.webp',
    ],
    technologies: ['React', 'Redux', 'CSS', 'API'],
    linkLive: 'https://bookstore-amejid.netlify.app/',
    linkSource: 'https://github.com/anasbassi/BookStore',
  },
  {
    name: "Space Travelers' Hub",
    description:
      'This web application provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    imageUrl: [
      './images/projects/space.webp',
      './images/projects/space.webp',
      './images/projects/space.webp',
    ],
    technologies: ['React', 'Redux', 'CSS', 'API'],
    linkLive: 'https://space-amejid-stephen.netlify.app/',
    linkSource: 'https://github.com/anasbassi/Space-Travellers',
  },
  {
    name: 'PokeMon Collection',
    description:
      'Pok??mon Cards Collection project is an application for displaying the first 20 pokemon, details of a specific Pok??mon can be seen by clicking on a pokemon card, a pokemon card can also be stared or commented on.',
    imageUrl: [
      './images/projects/pokemon.jpg',
      './images/projects/pokemon.jpg',
      './images/projects/pokemon.jpg',
    ],
    technologies: ['JavaScript', 'CSS', 'Html'],
    linkLive: 'https://saqibjavaiddev.github.io/Pokemon-API/',
    linkSource: 'https://github.com/saqibjavaiddev/Pokemon-API',
  },
  {
    name: 'African basketball Academy ',
    description:
      "The African basketball Academy was built with Html, Css, and, JavaScript. It is a website that belongs to an African Basketball Academy and, it describes the school's curriculum and activities.",
    imageUrl: [
      './images/projects/ABA.jpg',
      './images/projects/ABA.jpg',
      './images/projects/ABA.jpg',
    ],
    technologies: ['JavaScript', 'CSS', 'Html'],
    linkLive: 'https://anasbassi.github.io/Capstone-Project-1/',
    linkSource: 'https://github.com/anasbassi/Capstone-Project-1',
  },
  {
    name: 'Math Magicians',
    description:
      'Math-Magicians is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quote. it was built using React.',
    imageUrl: [
      './images/projects/math.webp',
      './images/projects/math.webp',
      './images/projects/math.webp',
    ],
    technologies: ['React', 'CSS'],
    linkLive: 'https://math-magicians-amejid.netlify.app/',
    linkSource: 'https://github.com/anasbassi/Math-magician',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectsData.length; i += 1) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    const projectCardThumb = document.createElement('div');
    const projectCardThumbImg = document.createElement('img');
    const [, , projectImg] = projectsData[i].imageUrl;
    projectCardThumbImg.src = projectImg;
    projectCardThumb.classList.add('project-card--thumb');
    projectCardThumb.appendChild(projectCardThumbImg);
    projectCard.appendChild(projectCardThumb);
    const projectCardContent = document.createElement('div');
    projectCardContent.classList.add('project-card--content');
    projectCard.appendChild(projectCardContent);
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projectsData[i].name;
    projectCardContent.appendChild(projectTitle);
    const projectTools = document.createElement('ul');
    projectTools.classList.add('project-tools');
    projectCardContent.appendChild(projectTools);

    for (let j = 0; j < projectsData[i].technologies.length; j += 1) {
      const projectTool = document.createElement('li');
      projectTool.textContent = projectsData[i].technologies[j];
      projectTools.appendChild(projectTool);
    }

    const projectButton = document.createElement('button');
    projectButton.classList.add('btn', 'view-project');
    projectButton.textContent = 'See Project';
    projectCardContent.appendChild(projectButton);
    cardsContainer.appendChild(projectCard);
  }
});

hamburger.addEventListener('click', () => {
  navMenu.classList.add('mobile-menu');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
  document.body.style.overflow = 'scroll';
});

navLink.forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
}));

document.addEventListener('DOMContentLoaded', () => {
  const projectDetails = document.querySelectorAll('.view-project');
  const modalContainer = document.querySelector('.modal-container');
  const modalImgContainer = document.querySelector('.modal-img-container');
  const modalTitleLinks = document.querySelector('.modal-title-links');
  const modalTools = document.querySelector('.modal-tools');
  const modalDescription = document.querySelector('.modal-desc');
  const closeModal = document.querySelectorAll('.modal-close');
  const btnLive = document.querySelector('.btn-live');
  const btnSource = document.querySelector('.btn-source');

  const modalImgMobile = document.createElement('img');
  const modalImgDesktop = document.createElement('img');
  const modalTitle = document.createElement('h3');
  for (let i = 0; i < projectDetails.length; i += 1) {
    projectDetails[i].addEventListener('click', () => {
      modalTools.innerHTML = '';
      const [imgMobile, imgDesktop] = projectsData[i].imageUrl;
      modalImgMobile.src = imgMobile;
      modalImgMobile.classList.add('modal-img', 'modal-img--mobile');
      modalImgDesktop.src = imgDesktop;
      modalImgDesktop.classList.add('modal-img', 'modal-img--desktop');
      modalTitle.textContent = projectsData[i].name;
      modalTitle.classList.add('modal-title');

      for (let k = 0; k < projectsData[i].technologies.length; k += 1) {
        const modalTool = document.createElement('li');
        modalTool.textContent = projectsData[i].technologies[k];
        modalTools.appendChild(modalTool);
      }

      modalDescription.textContent = projectsData[i].description;
      btnLive.href = projectsData[i].linkLive;
      btnSource.href = projectsData[i].linkSource;

      modalImgContainer.appendChild(modalImgDesktop);
      modalImgContainer.appendChild(modalImgMobile);
      modalTitleLinks.appendChild(modalTitle);

      modalContainer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  closeModal.forEach((link) => link.addEventListener('click', () => {
    modalContainer.classList.remove('open');
    document.body.style.overflow = 'scroll';
  }));
});
