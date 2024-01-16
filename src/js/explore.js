import poetryArray from "../data/data.js";

var poetry = {
    title: "选择星星后查看",
    author: "",
    genre: "选择星星后查看",
    otherName: "选择星星后查看",
    originName: "选择星星后查看",
    theme: "选择星星后查看",
    content: "选择星星后查看",
    emotion: "选择星星后查看",
    method: "选择星星后查看",
}
var value= ""//用户选择的查看的星宿

function handleSelect(key, keyPath) {
    value = key;
    console.log(value)
    filterStars();
}
//筛选星星
function filterStars() {
    var filteredStars;
    if (value == '全部') {
        filteredStars = poetryArray
    } else {
        filteredStars = poetryArray.filter((poetry) => poetry.originName === value);
    }
    createStars(filteredStars);
}
//获取星星出现的位置
function getRandomPosition() {
    const mainElement = document.getElementById("sky-canvas");
    const mainRect = mainElement.getBoundingClientRect();
    const x = mainRect.left + Math.random() * (mainRect.width - 100);
    const y = mainRect.top + Math.random() * (mainRect.height - 100);
    return { x, y };
}
function createStar(p) {
    const star = document.createElement("div");
    star.className = "star";
    const { x, y } = getRandomPosition();
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    const svg = document.createElement("img");
    svg.src = "./src/svg/star.svg";
    svg.alt = "star-svg";
    // svg.style.width = "10px"; // 设置缩小后的宽度
    // svg.style.height = "10px"; // 设置缩小后的高度
    svg.classList.add("star-animation");

    const animationDuration = Math.random() * 5 + 2;
    const animationDelay = Math.random();
    svg.style.animationDuration = `${animationDuration}s`;
    svg.style.animationDelay = `-${animationDelay}s`;
    //添加点击效果
    star.addEventListener("click", () => {
        poetry = p
    });

    //添加悬浮效果
    const infoBox = document.createElement("div");
    infoBox.className = "info-box";
    infoBox.innerHTML = `<p>${p.title}</p>`;
    star.appendChild(infoBox);
    star.appendChild(svg);
    document.getElementById("sky-canvas").appendChild(star);

    //动画最后的效果
    void star.offsetWidth;
    svg.style.opacity = 1;
    // 随机设置星星的大小，最大50px，最小25px
    const starSize = Math.floor(Math.random() * (50 - 25 + 1)) + 5;
    svg.style.width = `${starSize}px`;
    svg.style.height = `${starSize}px`;
}
function createStars(starList) {
    const existingStars = document.querySelectorAll(".star");
    existingStars.forEach((star) => star.remove());
    starList.forEach(createStar);
}
// createStars(poetryArray);