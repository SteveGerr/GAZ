
    
    let menuButton = document.querySelector('.menu-top__button-mobile'),
        menuUl = document.querySelector('.menu-top__ul');

    menuButton.addEventListener('click', ()=>{
        menuButton.classList.toggle('open');
        menuUl.classList.toggle('open');
});

