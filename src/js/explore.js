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



//---------------编码星星------------------
var encodeStarSvgContainer = document.getElementById('encode-star-svg');
var encodeStarElementList = []

//清空svg里面的元素
function clearContainer() {
    while (encodeStarSvgContainer.firstChild) {
        encodeStarSvgContainer.removeChild(encodeStarSvgContainer.firstChild);
    }
}

//获取情感圆的颜色
function getColorByEmotion(poetry) {
    var colorList = []
    const emotion = poetry.emotion
    const emotions = emotion.split(',')
    const positiveEmotions = ['赞美', '兴奋', '喜爱', '开心', '闲适'];
    const negativeEmotions = ['悲伤', '迷茫', '愤怒', '焦虑'];
    const colorMap = {
        "感悟": "#86FFE2",
        "悲伤": "#1A7469",
        "迷茫": "#7C9FC9",
        "愤怒": "#41BCE7",
        "焦虑": "#062D68",
        "思念": "#6DB5F7",
        "闲适": "#E7DEA7",
        "开心": "#C64DAC",
        "喜爱": "#DC6742",
        "兴奋": "#E64A4A",
        "向往": "#E8AD8B",
        "赞美": "#867BFF",
        "爱意": "#662A47"
    };
    //获取情感的正负项颜色
    if (positiveEmotions.some(positive => emotion.includes(positive))) {
        colorList.push('#AF5656');
    } else if (negativeEmotions.some(positive => emotion.includes(positive))) {
        colorList.push('#294F98');
    } else {
        colorList.push('#4C4C4C');
    }
    if (emotion == '中性') return colorList;
    //获取两个圆的颜色
    emotions.forEach(emotionWord => {
        const trimmedEmotion = emotionWord.trim();
        const color = colorMap[trimmedEmotion];
        if (color) {
            colorList.push(color);
        }
    });
    return colorList;

}

function getEncodeSvg(poetry) {
    encodeStarElementList = []
    drawEmotionSvg(poetry)
    drawGenreSvg(poetry)
    drawMethodSvg(poetry)
    drawStarNameSvg(poetry)
    // 创建SVG元素
    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '134');
    svgElement.setAttribute('height', '109');
    svgElement.setAttribute('viewBox', "0 0 134 109");
    svgElement.setAttribute("id", "encode-star")
    encodeStarElementList.forEach(element => {
        svgElement.appendChild(element);
    });
    return svgElement;
}
//获取简化的星
function getSimpleEncodeSvg(poetry) {
    encodeStarElementList = []
    drawEmotionSvg(poetry)
    // drawGenreSvg(poetry)
    // drawMethodSvg(poetry)
    drawStarNameSvg(poetry)
    // 创建SVG元素
    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '134');
    svgElement.setAttribute('height', '109');
    svgElement.setAttribute('viewBox', "0 0 134 109");
    svgElement.setAttribute("id", "encode-star")
    encodeStarElementList.forEach(element => {
        svgElement.appendChild(element);
    });
    return svgElement;
}
//绘制情感的circle
function drawEmotionSvg(poetry) {
    const colorList = getColorByEmotion(poetry)
    if (colorList.length >= 1) {
        var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        circle1.setAttribute('d', "M49.2588 79.7256C69.6933 79.7256 86.2588 63.1601 86.2588 42.7256C86.2588 22.2911 69.6933 5.72559 49.2588 5.72559C28.8243 5.72559 12.2588 22.2911 12.2588 42.7256C12.2588 63.1601 28.8243 79.7256 49.2588 79.7256Z");
        circle1.setAttribute('fill', colorList[0]);
        circle1.style.mixBlendMode = 'screen';
        circle1.setAttribute('opacity', '0.5');
        encodeStarElementList.push(circle1)
    }
    if (colorList.length >= 2) {
        var circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        circle2.setAttribute('d', "M76.7588 96.7256C90.2898 96.7256 101.259 85.7566 101.259 72.2256C101.259 58.6946 90.2898 47.7256 76.7588 47.7256C63.2278 47.7256 52.2588 58.6946 52.2588 72.2256C52.2588 85.7566 63.2278 96.7256 76.7588 96.7256Z");
        circle2.setAttribute('fill', colorList[1]);
        circle2.style.mixBlendMode = 'screen';
        circle2.setAttribute('opacity', '0.6');
        encodeStarElementList.push(circle2)
    }
    if (colorList.length == 3) {
        var circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        circle3.setAttribute('d', "M93.2588 56.7256C103.752 56.7256 112.259 48.219 112.259 37.7256C112.259 27.2322 103.752 18.7256 93.2588 18.7256C82.7654 18.7256 74.2588 27.2322 74.2588 37.7256C74.2588 48.219 82.7654 56.7256 93.2588 56.7256Z");
        circle3.setAttribute('fill', colorList[2]);
        circle3.style.mixBlendMode = 'screen';
        circle3.setAttribute('opacity', '0.6');
        encodeStarElementList.push(circle3)
    }
}

// 绘制入诗手法
function drawMethodSvg(poetry) {
    const method = poetry.method
    if (method == '星为元素') {
        var rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectElement.setAttribute('x', '63');
        rectElement.setAttribute('y', '50');
        rectElement.setAttribute('width', '8');
        rectElement.setAttribute('height', '8');
        rectElement.setAttribute('fill', '#070707');
        encodeStarElementList.push(rectElement)
    }
    else if (method == '星为代语') {
        var circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleElement.setAttribute('cx', '67');
        circleElement.setAttribute('cy', '54');
        circleElement.setAttribute('r', '4'); // 半径大小
        circleElement.setAttribute('fill', '#070707'); // 填充颜色
        encodeStarElementList.push(circleElement)

    }
    else if (method == '星为原型意象') {
        //三角形
        var triangleElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangleElement.setAttribute('points', '67,49 71,56.5 63,56.5');
        encodeStarElementList.push(triangleElement)
    }
    else if (method == '星为主题') {
        //菱形
        var diamondElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        diamondElement.setAttribute('points', '67,48 71,54 67,60 63,54');
        diamondElement.setAttribute('fill', '#070707');
        encodeStarElementList.push(diamondElement)
    }
}
//绘制题材
function drawGenreSvg(poetry) {
    const category = poetry.genre
    // 设置共同属性
    const centerX = 67;
    const centerY = 54;
    const radius = 35;
    if (category == '词' || category == '句') {
        drawNPointStar(centerX, centerY, radius, 3);
    } else if (category == '四言诗') {
        drawNPointStar(centerX, centerY, radius, 4);
    } else if (category == '五言绝句' || category === '五言律诗' || category === '五言排律') {
        drawFivePointStar(centerX, centerY, radius);
    } else if (category == '六言诗') {
        drawNPointStar(centerX, centerY, radius, 6);
    } else if (category == '七言绝句' || category === '七言律诗' || category === '七言排律') {
        drawSevenPointStar(centerX, centerY, radius);
    } else if (category == '古风') {
        drawNPointStar(centerX, centerY, radius, 8);
    } else if (category == '偈颂' || category === '琴操' || category === '乐府曲辞') {
        drawNPointStar(centerX, centerY, radius, 9);
    }
    // 将 SVG 元素添加到文档中，或执行其他操作
}

//绘制星宿圆环
function drawStarNameSvg(poetry) {
    const starName = poetry.originName
    const list1 = ['金星', '木星', '水星', '火星', '土星'];
    const list2 = ['紫微', '太微', '天市'];
    if (list1.some(element => starName == element)) {
        //添加星环
        var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d',
            "M88.1108 19.2365C92.4969 16.841 96.9365 14.7469 101.368 12.9835C105.811 11.1637 110.193 9.99752 114.292 9.54398C116.338 9.36386 118.192 9.554 119.758 10.1045C121.321 10.6738 122.437 11.723 122.997 13.1505C123.548 14.597 123.587 16.3385 123.11 18.2413C122.654 20.1084 121.907 22.0471 120.887 24.0053C118.823 27.9041 116.206 31.8005 113.117 35.577C110.065 39.3484 106.752 43.0356 103.212 46.601C88.9746 60.8756 72.4836 73.5231 55.0055 83.5727C50.6443 86.0665 46.2242 88.31 41.7902 90.2804C37.342 92.2845 32.9004 93.801 28.5996 94.7841C26.4251 95.2712 24.34 95.4979 22.4009 95.4581C20.4455 95.4179 18.7784 94.9261 17.5249 94.02C16.2843 93.1111 15.5581 91.7586 15.418 90.0958C15.2956 88.4392 15.5927 86.5992 16.294 84.6708C17.7975 80.8316 20.0616 76.9044 22.9719 73.0875C25.8257 69.2654 28.9992 65.5207 32.4486 61.9052C29.0709 65.5248 25.9737 69.2665 23.1997 73.0785C20.3745 76.8725 18.1989 80.7635 16.7828 84.5548C16.1102 86.4293 15.8329 88.2155 15.9654 89.8209C16.1092 91.4101 16.8131 92.701 18.0078 93.5668C19.2323 94.4103 20.8463 94.8573 22.7297 94.8746C24.6072 94.915 26.6291 94.692 28.7383 94.2117C32.9837 93.2247 37.3658 91.7088 41.7503 89.7104C46.1252 87.7527 50.4848 85.5244 54.7842 83.0487C63.4226 78.0504 71.8395 72.3908 79.868 66.1824C87.9526 60.0388 95.6055 53.3738 102.673 46.3211C106.193 42.8008 109.492 39.1589 112.537 35.432C115.601 31.7115 118.204 27.8706 120.269 24.0235C121.269 22.1121 122.008 20.2187 122.468 18.3923C122.913 16.5837 122.876 14.9272 122.361 13.5451C121.831 12.1666 120.77 11.1478 119.279 10.586C117.762 10.0463 115.97 9.84814 113.992 10.0012C109.982 10.3896 105.685 11.471 101.312 13.1924C96.9066 14.8887 92.4864 16.9125 88.1108 19.2365Z"
        );
        pathElement.setAttribute('fill', 'white');
        encodeStarElementList.push(pathElement)

    } else if (list2.some(element => starName == element)) {
        //添加星环
        var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d',
            "M105.443 62.0838C109.184 65.6121 112.647 69.2888 115.783 73.0628C118.979 76.8305 121.516 80.7461 123.265 84.6115C124.092 86.5559 124.497 88.4308 124.457 90.1385C124.398 91.8489 123.727 93.2745 122.509 94.2772C121.269 95.2771 119.577 95.8696 117.564 96.0094C115.592 96.158 113.457 96.044 111.217 95.6704C106.745 94.8921 102.099 93.5733 97.4205 91.7539C92.7584 89.9684 88.0958 87.9014 83.4802 85.5742C64.9798 76.1904 47.3536 64.0841 31.9547 50.1845C28.1259 46.7119 24.5231 43.1019 21.1832 39.3913C17.8057 35.6775 14.9074 31.815 12.5758 27.9203C11.4067 25.9479 10.5208 23.9801 9.94217 22.0702C9.35879 20.1443 9.30891 18.3566 9.79627 16.8417C10.2904 15.3384 11.3823 14.1972 12.9646 13.5305C14.5464 12.8831 16.4412 12.5878 18.5513 12.6598C22.7863 12.9081 27.3497 13.8724 32.0109 15.5042C36.6593 17.079 41.3337 18.9912 45.9697 21.2145C41.3526 19.0626 36.7054 17.224 32.0923 15.7241C27.4806 14.1684 22.9807 13.279 18.8204 13.101C16.7723 13.0399 14.9363 13.3376 13.4078 13.9785C11.8988 14.6254 10.86 15.7251 10.3934 17.1698C9.95816 18.6364 10.0348 20.3579 10.6178 22.206C11.1762 24.0559 12.0383 25.963 13.18 27.8737C15.4978 31.7129 18.3765 35.5174 21.7281 39.1707C25.0369 42.8275 28.6054 46.3832 32.3969 49.8011C40.0384 56.6608 48.2562 63.0933 56.8874 68.9708C65.4729 74.924 74.4312 80.2887 83.5822 84.957C88.1475 87.2798 92.7614 89.3476 97.3775 91.1397C101.993 92.9526 106.58 94.2764 111.002 95.0717C113.19 95.4405 115.278 95.5606 117.212 95.4289C119.123 95.2885 120.732 94.7251 121.92 93.7806C123.1 92.8231 123.759 91.4604 123.834 89.8229C123.878 88.1665 123.501 86.3501 122.722 84.4644C121.065 80.6643 118.638 76.8044 115.561 73.0741C112.499 69.3047 109.111 65.6246 105.443 62.0838Z"
        );
        pathElement.setAttribute('fill', 'white');
        encodeStarElementList.push(pathElement)
    } else {
        //添加星环
        var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d',
            "M101.456 38.7416C106.272 39.4885 110.95 40.4997 115.425 41.7611C119.943 42.986 124.026 44.6787 127.466 46.7536C129.156 47.8251 130.478 49.0689 131.363 50.4201C132.235 51.7838 132.476 53.2532 132.062 54.6857C131.63 56.1276 130.626 57.4938 129.128 58.6797C127.668 59.8503 125.939 60.9035 123.988 61.811C120.077 63.597 115.74 65.0549 111.109 66.1405C106.509 67.2438 101.757 68.1281 96.9026 68.7846C77.4148 71.3726 57.1491 71.3726 37.6613 68.7846C32.8069 68.1281 28.0553 67.2438 23.4552 66.1405C18.824 65.0549 14.4872 63.5971 10.576 61.811C8.60434 60.9003 6.85646 59.8417 5.37964 58.6638C3.89052 57.4759 2.8923 56.1103 2.46019 54.6697C2.03958 53.2347 2.2803 51.7618 3.15861 50.3962C4.04706 49.0458 5.36882 47.8023 7.05588 46.7296C10.4975 44.6576 14.58 42.9677 19.0969 41.7451C23.5733 40.4851 28.251 39.4739 33.0656 38.7256C28.3041 39.5195 23.6871 40.5734 19.2785 41.8729C14.841 43.1281 10.8485 44.8425 7.50289 46.9293C5.87005 47.9773 4.59548 49.1912 3.7453 50.5079C2.91354 51.819 2.69211 53.2311 3.10274 54.6058C3.54964 55.9809 4.53323 57.2806 5.98028 58.4081C7.40909 59.5501 9.10591 60.5742 11.023 61.4516C14.8937 63.2018 19.184 64.6249 23.7625 65.6773C28.3095 66.7553 33.0051 67.6156 37.801 68.2494C47.4513 69.5043 57.3227 70.1181 67.2191 70.0786C77.1206 70.1225 86.9974 69.5087 96.6512 68.2494C101.464 67.6164 106.178 66.7587 110.746 65.6852C115.324 64.628 119.618 63.2053 123.499 61.4596C125.406 60.5762 127.102 59.5529 128.542 58.4161C129.959 57.2844 130.914 55.9849 131.336 54.6138C131.744 53.237 131.527 51.8233 130.707 50.5079C129.853 49.194 128.584 47.9809 126.963 46.9293C123.63 44.8562 119.663 43.1481 115.258 41.8889C110.842 40.5914 106.221 39.5375 101.456 38.7416Z"
        );
        pathElement.setAttribute('fill', 'white');
        encodeStarElementList.push(pathElement)
    }
    //添加方位
    const pos = getDirectionPos(starName)
    var circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleElement.setAttribute('cx', pos.x);
    circleElement.setAttribute('cy', pos.y);
    circleElement.setAttribute('r', 2); // 半径大小
    circleElement.setAttribute('fill', 'white'); // 填充颜色
    encodeStarElementList.push(circleElement)

}
//获取星宿方向绘制圆的位置
function getDirectionPos(starName) {
    var pos = { x: 67, y: 54 }

    const xiuEast = ["角宿", "亢宿", "氐宿", "房宿", "心宿", "尾宿", "箕宿"]
    const xiuSouth = ["井宿", "鬼宿", "柳宿", "星宿", "张宿", "翼宿", "轸宿"]
    const xiuWest = ["奎宿", "娄宿", "胃宿", "昴宿", "毕宿", "觜宿", "参宿"]
    const xiuNorth = ["斗宿", "牛宿", "女宿", "虚宿", "危宿", "室宿", "壁宿"]
    if (xiuEast.some(element => starName == element)) {
        pos.x = 20
        pos.y = 36
    } else if (xiuWest.some(element => starName == element)) {
        pos.x = 120
        pos.y = 38
    } else if (xiuSouth.some(element => starName == element)) {
        pos.x = 120
        pos.y = 68
    } else if (xiuNorth.some(element => starName == element)) {
        pos.x = 20
        pos.y = 70
    } else if (starName == '紫微') {
        pos.x = 15
        pos.y = 18
    } else if (starName == '太微') {
        pos.x = 62
        pos.y = 78
    } else if (starName == '天市') {
        pos.x = 120
        pos.y = 90
    } else if (starName == '金星') {
        pos.x = 23
        pos.y = 70
    } else if (starName == '木星') {
        pos.x = 15
        pos.y = 98
    } else if (starName == '水星') {
        pos.x = 92
        pos.y = 65
    } else if (starName == '火星') {
        pos.x = 127
        pos.y = 10
    } else if (starName == '土星') {
        pos.x = 95
        pos.y = 17
    }
    return pos;
}

function drawNPointStar(cx, cy, radius, n) {
    var points = '';
    for (let i = 0; i < 2 * n; i++) {
        const angle = (i * Math.PI) / n;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        points += `${x},${y} `;
        i++;
        const innerRadius = radius / 5;
        const innerX = cx + innerRadius * Math.cos(angle + Math.PI / n);
        const innerY = cy + innerRadius * Math.sin(angle + Math.PI / n);
        points += `${innerX},${innerY} `;
    }
    var polygonElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygonElement.setAttribute('points', points);
    polygonElement.setAttribute('fill', 'white');
    encodeStarElementList.push(polygonElement)
}
function drawFivePointStar(cx, cy, radius) {
    const points = [];
    for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        points.push(`${x},${y}`);
        const innerRadius = radius / 5;
        const innerX = cx + innerRadius * Math.cos(angle + Math.PI / 5);
        const innerY = cy + innerRadius * Math.sin(angle + Math.PI / 5);
        points.push(`${innerX},${innerY}`);
    }
    var polygonElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygonElement.setAttribute('points', points.join(' '));
    polygonElement.setAttribute('fill', "white");
    encodeStarElementList.push(polygonElement)
}
function drawSevenPointStar(cx, cy, radius) {
    const points = [];
    for (let i = 0; i < 14; i++) {
        const angle = (i * Math.PI) / 7 - Math.PI / 2;
        const r = i % 2 === 0 ? radius : radius / 5;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        points.push(`${x},${y}`);
    }
    var polygonElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygonElement.setAttribute('points', points.join(' '));
    polygonElement.setAttribute('fill', "white");
    encodeStarElementList.push(polygonElement)
}



function drawEncodeStar(poetry) {
    const svg = getEncodeSvg(poetry)
    clearContainer()
    encodeStarSvgContainer.appendChild(svg)
}
//-------------编码星星结束-----------------


//筛选诗词
async function filterPoetry() {
    searchInfo.originName = document.getElementById('select-originName').value;
    searchInfo.author = document.getElementById('input-author').value;
    searchInfo.theme = document.getElementById('select-theme').value;
    searchInfo.method = document.getElementById('select-method').value;
    searchInfo.emotion = document.getElementById('select-emotion').value;

    filteredPoetryList = poetryArray.filter(poetry => {
        return (
            (searchInfo.originName === '' || searchInfo.originName === '全部' || poetry.originName.includes(searchInfo.originName)) &&
            (searchInfo.author === '' || poetry.author.includes(searchInfo.author)) &&
            (searchInfo.theme === '' || searchInfo.theme === '全部' || poetry.theme.includes(searchInfo.theme)) &&
            (searchInfo.method === '' || searchInfo.method === '全部' || poetry.method.includes(searchInfo.method)) &&
            (searchInfo.emotion === '' || searchInfo.emotion === '全部' || poetry.emotion.includes(searchInfo.emotion))
            // Add more conditions for additional filters
        );
    });
    if (filteredPoetryList.length === 0) {
        showNotFund()
    } else {
        closeNotFund()
    }
    await createStars(filteredPoetryList)
}

//重置按钮
// Function to reset all select elements to "全部"
function resetFilters() {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.value = '全部';
    });
    var inputElement = document.getElementById('input-author');
    inputElement.value = '';
    filterPoetry();
}

// Attach click event listener to the reset button
document.getElementById('reset-btn').addEventListener('click', resetFilters);


//显示详细诗词的右侧panel
function closePoetryPanel() {
    resetStarAnimation() //恢复动画效果
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
    for (var key in poetry) {
        var element = document.getElementById('poetry-' + key);
        if (element) {
            element.textContent = poetry[key];
        }
    }
}

//加载效果
function closeLoading() {
    var div = document.getElementById('loading-container');
    div.style.display = 'none'
}
function showLoading() {
    var div = document.getElementById('loading-container');
    div.style.display = 'flex'
}

function closeNotFund() {
    var div = document.getElementById('not-fund-text');
    div.style.display = 'none'
}
function showNotFund() {
    var div = document.getElementById('not-fund-text');
    div.style.display = 'flex'
}

// 监听下拉框的改变事件
document.getElementById('select-originName').addEventListener('change', function () {
    filterPoetry();
    closePoetryPanel();
});

document.getElementById('select-emotion').addEventListener('change', function () {
    filterPoetry();
    closePoetryPanel();
});

document.getElementById('select-method').addEventListener('change', function () {
    filterPoetry();
    closePoetryPanel();
});

document.getElementById('select-theme').addEventListener('change', function () {
    filterPoetry();
    closePoetryPanel();
});

// 监听输入框的失焦事件
var inputElement = document.getElementById('input-author');
inputElement.addEventListener('blur', function () {
    filterPoetry();
    closePoetryPanel();
});

inputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        filterPoetry();
        closePoetryPanel();
    }
});

//监听关闭右侧panel的按钮
document.getElementById('close-btn').addEventListener('click', closePoetryPanel);

//获取星星出现的位置
function getRandomPosition() {
    const mainElement = document.getElementById("sky-canvas");
    const mainRect = mainElement.getBoundingClientRect();
    console.log(mainRect)
    const x = mainRect.left + Math.random() * (mainRect.width - 50);
    const y = Math.random() * (mainRect.height - 50);
    return { x, y };
}


async function createStars(starList) {
    const existingStars = document.querySelectorAll(".star");
    existingStars.forEach((star) => star.remove());
    showLoading()
    const promises = starList.map(async (poetry) => {
        return new Promise((resolve) => {
            const star = document.createElement("div");
            star.className = "star";
            const { x, y } = getRandomPosition();
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            const svg = getSimpleEncodeSvg(poetry)
            svg.classList.add("star-animation");
            svg.classList.add("encode-star");


            const animationDuration = Math.random() * 5 + 2;
            const animationDelay = Math.random();
            svg.style.animationDuration = `${animationDuration}s`;
            svg.style.animationDelay = `-${animationDelay}s`;

            star.addEventListener('click', function () {
                updatePanelInfo(poetry);
                drawEncodeStar(poetry);
                showPoetryPanel();
                highlightStar(star)
            });

            const infoBox = document.createElement("div");
            infoBox.className = "info-box";
            infoBox.innerHTML = `<p>${poetry.title}</p>`;
            star.appendChild(infoBox);
            star.appendChild(svg);

            // 添加到页面
            document.getElementById("sky-canvas").appendChild(star);

            // 动画最后的效果
            void star.offsetWidth;
            svg.style.opacity = 1;

            const starSize = Math.floor(Math.random() * (50 - 25 + 1)) + 5;
            svg.style.width = `${starSize}px`;
            svg.style.height = `${starSize}px`;

            resolve();
        });
    });
    // 等待所有的 Promise 完成
    await Promise.all(promises);
    closeLoading()
}
function highlightStar(star) {
    const existingStars = document.querySelectorAll(".star");
    existingStars.forEach((otherStar) => {
        otherStar.classList.remove("highlight-star")
        otherStar.classList.remove("hidden-star")
        const otherSvg = otherStar.querySelector(".encode-star");
        if (otherStar == star) {
            otherStar.classList.add("highlight-star")
        } else {
            otherStar.classList.add("hidden-star")
        }
        otherSvg.classList.remove("star-animation");
    });
}

function resetStarAnimation() {
    const existingStars = document.querySelectorAll(".star");
    existingStars.forEach((otherStar) => {
        otherStar.classList.remove("highlight-star")
        otherStar.classList.remove("hidden-star")
        const otherSvg = otherStar.querySelector(".encode-star");
        otherSvg.classList.add("star-animation");
    });
}


// 调用 filterPoetry
filterPoetry();


