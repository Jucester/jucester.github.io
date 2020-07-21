/* Mostrar menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('toggle', 'menu');


/* Mostrar y quitar */

const navLink = document.querySelectorAll('.link');

function linkAction() {
    /* Activo */
    navLink.forEach( n => n.classList.remove('active'));
    this.classList.add('active');

    /* Remover */
    const navMenu = document.getElementById('menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_image',{delay: 400}); 
sr.reveal('.home_social_icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.label',{interval: 200}); 
sr.reveal('.contact_input',{interval: 200}); 

/*Tab */



