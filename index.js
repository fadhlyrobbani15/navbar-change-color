window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
});