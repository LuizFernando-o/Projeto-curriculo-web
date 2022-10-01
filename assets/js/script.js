/* :::::::::::::: Exibir Menu :::::::::::::: */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Verificar se as variáveis existem
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Adiciona a classe 'show-menu' a div que possui o ID nav-menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* :::::::::::::: Remover Menu Mobile :::::::::::::: */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    // Quando clicar em qualquer item do menu mobile, remove a classe 'show-menu'
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* :::::::::::::: Exibir botão de scroll top :::::::::::::: */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // Exibe o botão sroll top quando rolar a página para baixo
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* :::::::::::::: Tema escuro/claro :::::::::::::: */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Verifica se o body contém a classe 'dark-theme' para verificar qual tema está no momento
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Ativa ou Desativa o tema escuro adicionando ou removendo o tema escuro
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})


/* :::::::::::::: Efeito de Fade In na página ao ser carregada :::::::::::::: */

var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 50);
}

function show() {
    var body = document.getElementById("body");
    opacity = Number(window.getComputedStyle(body)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.05;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}



