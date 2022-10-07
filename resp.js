burger =document.querySelector('.burger')
navber =document.querySelector('.navber')
navlist =document.querySelector('.nav-list')
rightNav =document.querySelector('.rightNav')


burger.addEventListener('click',()=>{ 
  rightNav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-class-resp');
})