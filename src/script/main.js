//滚动特效
$(function () {
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

const sections = document.querySelectorAll('section');
const navText = document.getElementById('menu-text');
var tmpMenu = ''
var showMenu = false

//监听页面滚动切换章节
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    const section = document.getElementById('chapter01');

    if (window.scrollY >= section.offsetTop) {
        navbar.style.display = 'block';
        header.style.display = 'none';
    } else {
        navbar.style.display = 'none';
        header.style.display = 'flex';
    }

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (tmpMenu) {
                document.getElementById(tmpMenu).style.fontWeight = 'normal';
            }
            const sec = section.id
            if (sec == 'chapter01') {
                navText.innerHTML = `第一章&nbsp;&nbsp;&nbsp;&nbsp;繁星点点，你我其名`;
                tmpMenu = 'menu01'
            } else if (sec == 'chapter02') {
                navText.innerHTML = `第二章&nbsp;&nbsp;&nbsp;&nbsp;仰望星空，共托情思`;
                tmpMenu = 'menu02'
            } else if (sec == 'chapter03') {
                navText.innerHTML = `第三章&nbsp;&nbsp;&nbsp;&nbsp;以人为镜，诗星闪烁`;
                tmpMenu = 'menu03'
            } else {
                navText.innerHTML = `第四章&nbsp;&nbsp;&nbsp;&nbsp;星空探索`;
                tmpMenu = 'menu04'
            }
            document.getElementById(tmpMenu).style.fontWeight = 'bolder';
        }



    });
});


//菜单栏显示切换
function toggleMenu() {
    var leftMenu = document.getElementById('left-menu');
    leftMenu.style.display = (leftMenu.style.display === 'none') ? 'flex' : 'none';
    
}
