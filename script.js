const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');
const myLogo = document.querySelector('.mylogo');
const scroll = document.querySelector('#scrollable');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mainMenu.classList.toggle('active');
  myLogo.classList.toggle('disappear');
});
document.querySelectorAll('.header-btn').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  mainMenu.classList.remove('active');
}));
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
scroll.addEventListener('wheel', preventScroll, { passive: false });

// dynamic cards

const cards = [{
  id: 0,
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  img: '/attributes/workimage.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
},
{
  title: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: '/attributes/workimage.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 1,
  uniqueId: 'prcjt1',
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: '/attributes/prjct2.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 2,
  uniqueId: 'prcjt2',
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: '/attributes/prjct3.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 3,
  uniqueId: 'prcjt3',
},
{
  title: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: '/attributes/workimage.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 4,
  uniqueId: 'prcjt4',
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: '/attributes/prjct2.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 5,
  uniqueId: 'prcjt5',
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: '/attributes/prjct3.png',
  techs: ['HTML', 'Bootstrap', 'Ruby'],
  btnText: 'See Project',
  id: 6,
  uniqueId: 'prcjt6',
},
];

function displayCards() {
  let result = '';

  cards.filter((card) => card.id > 0).forEach((card) => {
    let techList = ''; // list of tags as li element
    const techTags = card.techs;
    //   populate tag list iterating over tags array
    for (let x = 0; x < techTags.length; x += 1) {
      techList += `<li class="lang">${techTags[x]}</li>`;
    }
    result += `

    <section class="project" id="${card.uniqueId}">
            <h3 class="project_descp1"}">${card.title}</h3>
            <p class="project_detail">${card.description}</p>
            <article class="lang_container_2">
                <ul style="list-style-type:none;" class="list">
                    ${techList}
                </ul>
            </article>
            <button type="submit" class="checkout-button button_interactions" id="projects-btn2" name="checkout-button"
                >${card.btnText}</button>
        </section>`;
  });
  document.querySelector('.desktop_projects').innerHTML = result;
}

displayCards();

// popup window
const btn = document.getElementsByClassName('checkout-button');
const popupWin = document.getElementById('popup-win');
cards.forEach((card) => {
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      if (i === ((card.id))) {
        popupWin.style.display = 'block';
        let modalTechs = '';
        const modalTags = card.techs;
        //   populate tag list iterating over tags array
        for (let x = 0; x < modalTags.length; x += 1) {
          modalTechs += `<li class="lang">${modalTags[x]}</li>`;
        }
        const show = `<div class="content-card-wrap">
        <div class="content-card">
         <div class="close-button card-x"><img src="./attributes/cross.png" alt="X"></div>
         <div class="cc-h-wrap">
           <h2 class="card-h">${card.title}</h2>
           <ul class="card-lang-wrapper">
           ${modalTechs}
           </ul>
         </div>
         <div class="card-content">
           <div class="card-img-w">
             <img src="${card.img}" alt="card-preview" class="card-img">
           </div>
           <div class="card-cb-wrap">
             <p class="card-p">
             ${card.description}
             </p>
             <div class="card-b-wrap">
               <a class="card-link">
                 <button class="card-button" id="b1">See Live<img src="attributes/live.png" alt="" class="card-i"></button>
               </a>
               <a class="card-link">
                 <button class="card-button" id="b2">See Source<img src="attributes/vector.png" alt="" class="card-i2"></button>
               </a>
             </div>
           </div>
        </div>
       </div>
       </div>`;

        popupWin.innerHTML = show;

        // close the popup
        const closePopup = document.getElementsByClassName('card-x');
        for (let j = 0; j < closePopup.length; j += 1) {
          closePopup[j].addEventListener('click', () => {
            popupWin.style.display = 'none';
          });
        }
      }
    });
  }
});

const form = document.getElementById('form');
const email = document.getElementById('email');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.small');
  errorDisplay.innerText = message;
  inputControl.classList.add('.small');
  inputControl.classList.remove('success');
};

const validateEmail = () => {
  const emailformat = /^[a-z0-9_!#$%&'*+=?`{|}~^.-]+@[a-z0-9.-]+$/gm;
  if (email.value.match(emailformat)) {
    form.submit();
  } else {
    setError(email, 'Please, type your email in lowercase');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateEmail();
});

// store data in local storage

const submitButton = document.getElementById('getintouch_btn');
submitButton.addEventListener('click', () => {
  const enteredName = document.querySelector('.full_name').value;
  const enteredEmail = document.getElementById('email').value;
  const enteredMessage = document.getElementById('message').value;
  const Data = {
    Name: enteredName,
    Email: enteredEmail,
    Message: enteredMessage,
  };
  localStorage.setItem('Form Data', JSON.stringify(Data));
});

const populateForm = () => {
  if (localStorage.key('Form Data')) {
    const savedData = JSON.parse(localStorage.getItem('Form Data'));
    for (let a = 0; a <= form.length; a += 1) {
      if (localStorage.form !== null) {
        document.querySelector('.full_name').value = savedData.Name;
        document.querySelector('#email').value = savedData.Email;
        document.getElementById('message').value = savedData.Message;
      }
    }
  }
};
document.onload = populateForm();
