const homeLink = document.getElementById('home-link');
const homeView = document.getElementById('home');
const aboutLink = document.getElementById('about-link');
const aboutView = document.getElementById('about');

homeLink.addEventListener('click', viewHome)
aboutLink.addEventListener('click', viewAbout)

function viewHome(){
    homeView.style.display = 'flex';
    aboutView.style.display = 'none';
}

function viewAbout(){
    homeView.style.display = 'none';
    aboutView.style.display = 'flex';
}