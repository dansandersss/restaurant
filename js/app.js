const body = document.querySelector ('body')
const menuBtn = document.querySelector('.menu-left')
const openedMenu = document.querySelector('.open-menu-logo')
const menu = document.querySelector('.sidebar')
const introBlock = document.querySelector('.intro')
const descriptionBlock = document.querySelector('.description')
const sidebarNav = document.querySelector('.sidebar-nav')
const nav = document.querySelector('.nav-menu')

const mapPin = document.querySelector ('.map-pin')
const workHours = document.querySelector ('.work-hours')
const workHoursContent = document.querySelector('.work-hours-content')

const footer = document.querySelector('footer')
const socials = document.querySelector('.socials')

let isMenuOpen = false

menuBtn.addEventListener('click', function() {
	
	if (isMenuOpen) {
		menu.style.width = '70px';
		sidebarNav.style.left = '-300px'
		introBlock.style.marginLeft='69px'
		footer.style.marginLeft='69px'
		descriptionBlock.style.marginLeft='69px'

		setTimeout(function(){
			nav.classList.remove('d-none')
		}, 100)

		menuBtn.innerHTML = ' '
    menuBtn.insertAdjacentHTML('beforeend', 
      `
         <img src="images/menu-left.png" alt="menu" class="img-fluid menu-left">
      `);
	} else {
		menu.style.width = '300px';
		sidebarNav.style.left = '30px';
		nav.classList.add('d-none')
		introBlock.style.marginLeft='299px'
		footer.style.marginLeft='299px'
		descriptionBlock.style.marginLeft='299px'
		menuBtn.innerHTML = ' ';
    menuBtn.insertAdjacentHTML('beforeend', 
      `
         <img src="images/close-mark.png" alt="menu" class="img-fluid menu-left">
      `);
	}
	isMenuOpen = !isMenuOpen
})

mapPin.addEventListener('click', openBlock);

mapPin.addEventListener('click', function (event) {
  event.stopPropagation();
});

document.addEventListener('click', function (event) {
  if (event.target !== workHours && !workHours.contains(event.target)) {
    closeBlock();
  }
});

function openBlock() {
  workHours.style.display = 'block';
	mapPin.style.animationPlayState = 'paused';
}

function closeBlock() {
  workHours.style.display = 'none';
  mapPin.style.animationPlayState = 'running';
}

document.addEventListener('scroll', function () {
  // Определите позицию пользователя на странице
  const scrollPosition = window.scrollY;

  // Определите позицию секции 2
  const footerPosition = footer.offsetTop;

  // Если пользователь прокрутил до секции 2, примените стиль
  if (scrollPosition >= footerPosition) {
    socials.style.bottom='100px'
  } else {
    // В противном случае удалите стиль
    socials.style.bottom='0'
  }
});