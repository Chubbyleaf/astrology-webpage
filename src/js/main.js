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
    var popup = document.getElementById("reference-popup");
  
    // 如果弹窗已经显示，则重新计算其位置
    if (popup.style.display === "block") {
      fixPopupPosition();
    }

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
                document.getElementById(tmpMenu).style.textDecoration = 'none';
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
            document.getElementById(tmpMenu).style.textDecoration = 'underline';

        }



    });
});

//菜单栏显示切换
function toggleMenu() {
    var leftMenu = document.getElementById('left-menu');
    if (leftMenu.classList.contains('hidden')) {
        leftMenu.setAttribute('class', '');
        leftMenu.classList.add('visible')
    } else {
        leftMenu.setAttribute('class', '');
        leftMenu.classList.add('hidden')
    }
}

//显示参考文献
function togglePopup(){
    var popup = document.getElementById("reference-popup");
    var overlay = document.getElementById("overlay");
    
    // 切换弹窗和背景遮罩的显示状态
    if (popup.style.display === "block") {
      popup.style.display = "none";
      overlay.style.display = "none";
    } else {
      popup.style.display = "block";
      overlay.style.display = "block";
    }

    // 显示弹窗时，固定其位置
    fixPopupPosition();
}

// 固定弹窗的位置
function fixPopupPosition() {
    var popup = document.getElementById("popup");
    
    // 计算弹窗的位置
    var windowHeight = window.innerHeight;
    var popupHeight = popup.offsetHeight;
    var topPosition = (windowHeight - popupHeight) / 2;
    
    // 设置弹窗的位置
    popup.style.top = topPosition + "px";
  }
  

// 添加点击事件监听器到 document
document.addEventListener('click', function (event) {
    // 检查点击的元素是否在 left-menu 内部
    const isMenuIconClick = event.target.classList.contains('menu-icon');
    // 检查点击的元素是否是"menu-icon"
    const isLeftMenuClick = event.target.closest('#left-menu');
    const leftMenu = document.getElementById('left-menu');

    // 如果不是 left-menu 内部的点击且不是 menu-icon，则执行你的操作
    if (!isLeftMenuClick && !isMenuIconClick) {
        // 判断 left-menu 的显示状态，并执行相应操作
        if (leftMenu.classList.contains('visible')) {
            leftMenu.setAttribute('class', '');
            leftMenu.classList.add('hidden')
        }
    }
});
