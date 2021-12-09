window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
});
document
.querySelector('.menu-btn')
.addEventListener('click',() => 
document.querySelector('.nav-list').classList.toggle('show')
);