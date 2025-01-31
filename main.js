const bgBody = document.getElementById('bgBody');
const navBar = document.getElementById('navBar');
const menuList = document.getElementById('menuList')
const menuListItem = document.querySelectorAll('#menuList li');
const menuBar = document.getElementById('menuBar');
const logoMenu = document.getElementById('logoMenu');
const mainTitle = document.getElementById('mainTitle');

if(window.innerWidth <= 992){
    bgBody.style.height = 'fit-content';
    logoMenu.style.width = '100%';
    menuBar.style.display = 'flex';
    navBar.style.flexDirection = 'column';
    menuList.style.flexDirection = 'column';
    menuList.style.gap = '30px';
    menuList.style.height = '0px';
    menuList.style.overflow = 'hidden';
    mainTitle.style.paddingBottom = '50px';

    menuBar.addEventListener('click', ()=>{
        menuList.style.height = menuList.style.height === '0px' ? '35vh' : '0px';
        menuList.style.transition = 'height .5s linear';
    })
}


function changePage(){

}


menuListItem.forEach((listItem)=>{
    listItem.addEventListener('click', (event)=>{
        event.preventDefault();
    })
})