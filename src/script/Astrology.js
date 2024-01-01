// 古人眼中的星空js
//记录连接线
const buttonPaths = {
    "three-yuan-btn-direction-btn": "connection01",
    "three-yuan-btn-season-btn": "connection02",
    "three-yuan-btn-meaning-btn": "connection03",

    "four-xiang-btn-direction-btn": "connection04",
    "four-xiang-btn-attribute-btn": "connection05",
    "four-xiang-btn-animal-btn": "connection06",
    "four-xiang-btn-season-btn": "connection07",
    "four-xiang-btn-meaning-btn": "connection08",

    "five-star-btn-attribute-btn": "connection09",
    "five-star-btn-meaning-btn": "connection10",

    "twenty-eight-xiu-btn-direction-btn": "connection11",
    "twenty-eight-xiu-btn-attribute-btn": "connection12",
    "twenty-eight-xiu-btn-animal-btn": "connection13",
    "twenty-eight-xiu-btn-season-btn": "connection14",
    "twenty-eight-xiu-btn-meaning-btn": "connection15",
};

//记录连接线文字
const pathText = {
    "connection01": "紫微：三垣之“中垣”，居中且最大。<br\>太微：三垣之“上垣”，在紫微垣的西南方。<br\>天市：三垣之“下垣”，在紫微垣的东南方，太微垣的东边。<br\>",
    "connection02": "紫微垣中，北斗斗柄的方向指示四季。<br\>春季斗柄指东，夏季斗柄指南，秋季斗柄指西，冬季斗柄指北。",
    "connection03": "紫微：象征人间帝王的宫殿在天上的位置，统治天下的帝王。<br\>太微：象征政府，因此太微垣中的星星大多以朝廷中的官员和场所来命名。<br\>天市：象征天之都市，是聚汇的地方，代表着商业.",

    "connection04": "中国古代将天空分成东、北、西、南、中区域，有东方青龙、西方白虎、南方朱雀、北方玄武之说。后又将其运用于军营军列，有“前朱鸟而后玄武，左青龙而右白虎”的说法。",
    "connection05": "青龙：属木。玄武：属水。朱雀：属火。白虎：属金。",
    "connection06": "青龙白虎朱雀玄武是人们对四方星宿的总结。东方的星象如一条龙，西方的星象如一只虎，南方的星象如一只大鸟，北方的星象如龟和蛇。四象由此而来。",
    "connection07":"青龙：象征四象中的少阳，四季中的春季。<br\>玄武：象征四象中的太阴，四季中的冬季。<br\>朱雀：象征四象中的太阳，四季中的夏季。<br\>白虎：象征四象中的少阴，四季中的秋季。<br\>每到冬春之交的傍晚，苍龙显现；春夏之交，朱雀升起；夏秋之交，白虎露头；秋冬之交，玄武上升",
    "connection08":"青龙：祥瑞之兆。<br\>玄武：乌龟长寿，玄冥成了长生不老的象征。<br\>朱雀：见到朱雀意味天下太平。<br\>白虎：具有避邪、禳灾、祈丰及惩恶的扬善、发财致富、喜结良缘等多种神力。",

    "connection09": "岁星：木星<br\>荧惑：火星<br\>镇星：土星<br\>太白：金星<br\>辰星：水星",
    "connection10": "岁星：主祸福吉凶的星辰，民间传说中的凶神。<br\>荧惑：行为失礼的意思。出现就有战争，隐没战争就会停止。<br\>镇星：其寓意主要与安定、稳重有关，也讲仁义礼智。<br\>太白：被赋予了主司战争的职能，人们通过观测太白金星占卜战争的凶吉。<br\>辰星：代表法律与法治。",
    "connection11": "东方七宿：角、亢、氐、房、心、尾、箕<br\>北方七宿：斗、牛、女、虚、危、室、壁<br\>西方七宿：奎、娄、胃、昴、毕、觜、参<br\>南方七宿：井、鬼、柳、星、张、翼、轸<br\>",
    "connection12": "11介绍星宿-具体维度的一段文字",
    "connection13": "二十八星宿分别与二十八个动物相对应。",
    "connection14": "13介绍星宿-具体维度的一段文字",
    "connection15": "15介绍星宿-具体维度的一段文字",
}

// 星象图svg
async function loadAstrologySvg() {
    try {
        let astrology = await fetch('./src/svg/astrology.svg');
        let content = await astrology.text();
        document.querySelector('.astrology-holder').innerHTML = content;
        let svgElement = document.querySelector('.astrology-holder svg');
        let scale = 0.9;
        svgElement.style.transform = 'scale(' + scale + ')';

    } catch (error) {
        console.error('加载SVG时发生错误:', error);
    }

}

// 连线图svg
async function loadConnectionSvg() {
    try {
        let astrology = await fetch('./src/svg/connection.svg');
        let content = await astrology.text();
        document.querySelector('.connection-holder').innerHTML = content;
        window.dispatchEvent(new Event('load'));
    } catch (error) {
        console.error('加载SVG时发生错误:', error);
    }

}

//把所有的星星都调暗
async function dimAllStars(opacity) {
    const threeyuan = document.querySelectorAll(".three-yuan");
    threeyuan.forEach(function (element) {
        element.style.opacity = opacity;
    });
    const fourxiang = document.querySelectorAll(".four-xiang");
    fourxiang.forEach(function (element) {
        element.style.opacity = opacity;
    });
    const twentyeightxiu = document.querySelectorAll(".twenty-eight-xiu");
    twentyeightxiu.forEach(function (element) {
        element.style.opacity = opacity;
    });
    const fivestar = document.querySelectorAll(".five-star");
    fivestar.forEach(function (element) {
        element.style.opacity = opacity;
    });
}


//改变透明度的通用函数
function changeOpacityByClass(classNames, opacity) {
    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            element.style.opacity = opacity;
        });
    });
}

function changeOpacityById(ids, opacity) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.opacity = opacity;
        }
    });
}




//获取左边一个按钮的连线
function getPathForOneButton(buttonName) {
    const connections = [];
    for (const key in buttonPaths) {
        if (key.includes(buttonName)) {
            connections.push(buttonPaths[key]);
        }
    }
    return connections;
}

// 检查是否存在连接线
function hasConnection(button1, button2) {
    const key = `${button1}-${button2}`;
    return buttonPaths.hasOwnProperty(key);
}

//获取两个按钮之间的连线
function getPathForButtonPair(button1, button2) {
    const key = `${button1}-${button2}`;
    return buttonPaths[key] || null;
}

//获取解释文字
function getPathText(connectionName) {
    return pathText[connectionName] || null;
}

var tmpLeftBtn = '';//当前选择的左边的按钮
var tmpRightBtn = '';//当前选择的右边的按钮

window.addEventListener('load', function () {
    const threeyuanbtn = document.querySelector(".three-yuan-btn");//三远按钮
    const fourxiangbtn = document.querySelector(".four-xiang-btn");//四象按钮
    const fivestarbtn = document.querySelector(".five-star-btn");//五星按钮
    const twentyeightxiubtn = document.querySelector(".twenty-eight-xiu-btn");//二十八宿按钮
    const dircbtn = document.querySelector(".direction-btn");//方向位置按钮
    const attrbtn = document.querySelector(".attribute-btn");//五行属性按钮
    const animbtn = document.querySelector(".animal-btn");//动物比喻按钮
    const seabtn = document.querySelector(".season-btn");//时令节气按钮
    const meanbtn = document.querySelector(".meaning-btn");//吉凶寓意按钮

    const connections = document.querySelectorAll('.connection')

    const buttons = [threeyuanbtn, fourxiangbtn, fivestarbtn, twentyeightxiubtn, dircbtn, attrbtn, animbtn, seabtn, meanbtn];
    const buttons1 = [threeyuanbtn, fourxiangbtn, fivestarbtn, twentyeightxiubtn];
    const buttons2 = [dircbtn, attrbtn, animbtn, seabtn, meanbtn];


    buttons1.forEach(button => {
        //鼠标悬浮效果
        button.addEventListener('mouseover', function () {
            if (tmpLeftBtn == '') {
                buttons.forEach(otherButton => {
                    //先把别的所有的调暗
                    otherButton.style.opacity = 0.3;
                });
                connections.forEach(connection => {
                    //先把别的所有的调暗
                    connection.style.opacity = 0.3;
                });
                const firstClassName = button.classList.item(0);
                lightClassList = []//需要调亮的元素
                lightIdList = []
                if (firstClassName == 'three-yuan-btn') {
                    lightClassList = ["three-yuan-btn", "direction-btn", "season-btn", "meaning-btn"]
                    lightIdList = getPathForOneButton(firstClassName);
                } else if (firstClassName == 'four-xiang-btn') {
                    lightClassList = ["four-xiang-btn", "direction-btn", "attribute-btn", "animal-btn", "season-btn", "meaning-btn"]
                    lightIdList = getPathForOneButton(firstClassName);
                } else if (firstClassName == "five-star-btn") {
                    lightClassList = ["five-star-btn", "attribute-btn", "meaning-btn"]
                    lightIdList = getPathForOneButton(firstClassName);
                } else if (firstClassName == "twenty-eight-xiu-btn") {
                    lightClassList = ["twenty-eight-xiu-btn", "direction-btn", "attribute-btn", "animal-btn", "season-btn", "meaning-btn"]
                    lightIdList = getPathForOneButton(firstClassName);
                }
                changeOpacityByClass(lightClassList, 1)
                changeOpacityById(lightIdList, 1)
            }
        });

        //鼠标离开效果
        button.addEventListener('mouseleave', function () {
            if (tmpLeftBtn == '') {
                buttons.forEach(otherButton => {
                    otherButton.style.opacity = 1;
                });
                connections.forEach(connection => {
                    connection.style.opacity = 1;
                });
            }
        });

        // 点击效果
        button.addEventListener('click', function () {
            const firstClassName = button.classList.item(0);
            tmpLeftBtn = firstClassName
            if (tmpRightBtn != '') {
                // 清空文本内容，右边按钮
                document.querySelector(`.${tmpRightBtn} rect`).setAttribute('fill', '#000');
                tmpRightBtn = ''
                document.getElementById('connection-explain-text').innerHTML = ''
                connectionExplainText.style.opacity = 0;

            }
            lightClassList = []
            lightIdList = []
            buttons.forEach(otherButton => {
                otherButton.style.opacity = 0.3;
            });
            connections.forEach(connection => {
                connection.style.opacity = 0.3;
            });
            if (firstClassName == 'three-yuan-btn') {
                lightClassList = ["three-yuan-btn", "direction-btn", "season-btn", "meaning-btn"]
                lightIdList = getPathForOneButton(firstClassName);
            } else if (firstClassName == 'four-xiang-btn') {
                lightClassList = ["four-xiang-btn", "direction-btn", "attribute-btn", "animal-btn", "season-btn", "meaning-btn"]
                lightIdList = getPathForOneButton(firstClassName);
            } else if (firstClassName == "five-star-btn") {
                lightClassList = ["five-star-btn", "attribute-btn", "meaning-btn"]
                lightIdList = getPathForOneButton(firstClassName);
            } else if (firstClassName == "twenty-eight-xiu-btn") {
                lightClassList = ["twenty-eight-xiu-btn", "direction-btn", "attribute-btn", "animal-btn", "season-btn", "meaning-btn"]
                lightIdList = getPathForOneButton(firstClassName);
            }
            showStar(firstClassName)
            changeOpacityByClass(lightClassList, 1)
            changeOpacityById(lightIdList, 1)
        });
    });

    buttons2.forEach(button => {
        // 点击效果
        button.addEventListener('click', function () {
            const firstClassName = button.classList.item(0);
            console.log("点击", firstClassName)
            const connectionPath = getPathForButtonPair(tmpLeftBtn, firstClassName);
            if (tmpLeftBtn != '' && connectionPath != null) {
                if (tmpRightBtn != '') {
                    document.querySelector(`.${tmpRightBtn} rect`).setAttribute('fill', '#000');
                }
                //填写文字
                var connectionExplainText = document.getElementById('connection-explain-text');
                connectionExplainText.innerHTML = getPathText(connectionPath);
                connectionExplainText.style.opacity = 1;
                //明度和填充变化
                tmpRightBtn = firstClassName
                buttons.forEach(otherButton => {
                    otherButton.style.opacity = 0.3;
                });
                connections.forEach(connection => {
                    connection.style.opacity = 0.3;
                });
                button.querySelector('rect').setAttribute('fill', '#84D3FF');
                changeOpacityByClass([tmpLeftBtn, tmpRightBtn], 1)
                changeOpacityById([connectionPath], 1)
            }
        });
    });
});


//右边的图展示星星
function showStar(name) {
    var lightStars;
    dimAllStars(0.4);
    if (name == 'three-yuan-btn') {
        lightStars = document.querySelectorAll(".three-yuan");
        console.log("点击三垣")
    } else if (name == 'four-xiang-btn') {
        lightStars = document.querySelectorAll(".four-xiang");
        console.log("点击四象")
    } else if (name == 'five-star-btn') {
        lightStars = document.querySelectorAll(".five-star");
        console.log("点击五星")
    } else if (name == 'twenty-eight-xiu-btn') {
        lightStars = document.querySelectorAll(".twenty-eight-xiu");
        console.log("点击二十八宿")
    }
    lightStars.forEach(function (element) {
        element.style.opacity = 1;
    });

}

loadAstrologySvg();
loadConnectionSvg();