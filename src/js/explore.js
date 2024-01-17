import poetryArray from "../data/data.js";



//搜索的值
var searchInfo = {
    originName: "",
    author: "",
    theme: "",
    emotion: "",
    method: "",
}

var filteredPoetryList = []


//筛选诗词
function filterPoetry() {
    searchInfo.originName = document.getElementById('select-originName').value;
    searchInfo.theme = document.getElementById('select-theme').value;
    searchInfo.method = document.getElementById('select-method').value;
    searchInfo.emotion = document.getElementById('select-emotion').value;
    filteredPoetryList = poetryArray.filter(poetry => {
        return (
            (searchInfo.originName === '' || searchInfo.originName === '全部' || poetry.originName.includes(searchInfo.originName)) &&
            (searchInfo.theme === '' || searchInfo.theme === '全部' || poetry.theme.includes(searchInfo.theme)) &&
            (searchInfo.method === '' || searchInfo.method === '全部' || poetry.method.includes(searchInfo.method)) &&
            (searchInfo.emotion === '' || searchInfo.emotion === '全部' || poetry.emotion.includes(searchInfo.emotion))
            // Add more conditions for additional filters
        );
    });

    updateSkyCanvas(filteredPoetryList);
    // createStars(filteredPoetryList)
}

//重置按钮
// Function to reset all select elements to "全部"
function resetFilters() {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.value = '全部';
    });
    filterPoetry();
}

// Attach click event listener to the reset button
 document.getElementById('reset-btn').addEventListener('click', resetFilters);


function updateSkyCanvas(poetryData) {
    const skyCanvas = document.getElementById('sky-canvas');
    skyCanvas.innerHTML = '';

    poetryData.forEach(poetry => {
        const poetryDiv = document.createElement('div');
        poetryDiv.innerHTML = `
            <p><strong>${poetry.title}</strong></p>
        `;
        poetryDiv.addEventListener('click', function () {
            updatePanelInfo(poetry);
            showPoetryPanel()
        });
        skyCanvas.appendChild(poetryDiv);
    });
}


//显示详细诗词的右侧panel
function closePoetryPanel() {
    var panel = document.getElementById('poetry-detail-wrap');
    panel.setAttribute('class', '');
    panel.classList.add('hide-panel')
}
function showPoetryPanel() {
    var panel = document.getElementById('poetry-detail-wrap');
    panel.setAttribute('class', '');
    panel.classList.add('show-panel')
}
function updatePanelInfo(poetry) {
    console.log(poetry)
    for (var key in poetry) {

        var element = document.getElementById('poetry-' + key);
        console.log(key)
        if (element) {
            element.textContent = poetry[key];
        }
    }
}

//监听筛选
document.getElementById('select-originName').addEventListener('change', filterPoetry);
document.getElementById('select-emotion').addEventListener('change', filterPoetry);
document.getElementById('select-method').addEventListener('change', filterPoetry);
document.getElementById('select-theme').addEventListener('change', filterPoetry);
//监听关闭右侧panel的按钮
document.getElementById('close-btn').addEventListener('click', closePoetryPanel);

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
    svg.src = "src/svg/star.svg";
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

filterPoetry();