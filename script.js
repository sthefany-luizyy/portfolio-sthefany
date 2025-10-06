
function escrevendoLetra() {
    function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector(".digitando");
ativaLetra(titulo);
}


const ativaMenu = document.querySelector(".fa-user");

ativaMenu.addEventListener("click", ()=>{
    ativaMenu.classList.toggle("fa-bars")
})

// Scroll suave ao clicar no menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Seleciona o botão e o menu
const menuButton = document.getElementById('menu-mobile');
const navegacaoPrimaria = document.querySelector('.navegacao-primaria');

// Adiciona um "ouvinte de evento" de clique ao botão
menuButton.addEventListener('click', () => {
    // Adiciona ou remove a classe 'ativado' no menu
    navegacaoPrimaria.classList.toggle('ativado');
});

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section, main article');

// Atualiza link ativo ao rolar
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Scroll suave ao clicar no menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
