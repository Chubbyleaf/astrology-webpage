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
    "connection01": "1介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection02": "2介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection03": "3介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",

    "connection04": "4介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection05": "5介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection06": "6介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection07": "7介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection08": "8介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",

    "connection09": "9介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection10": "10介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",

    "connection11": "11介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection12": "12介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection13": "13介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection14": "14介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
    "connection15": "15介绍星宿-具体维度的一段文字，根据选择而变 边在传统文学和生活中，古代人类为星宿创造了多样的别名。他们有的根据本名改编异化而来，有的通过比喻借代，将原先的存在的事物移植到天上，有的根据星星的寓意吉凶赋予了星占学的意义，有的根据传统神话与民族故事加以命名...... 多样的名称用于文学中，同样丰富了内涵并增强了文学性。",
}

// 星象图svg
async function loadAstrologySvg() {
    try {
        let astrology = await fetch('./src/svg/astrology.svg');
        let content = await astrology.text();
        document.querySelector('.astrology-holder').innerHTML = content;
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
                document.getElementById('connection-explain-text').textContent = ''
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
                connectionExplainText.textContent = getPathText(connectionPath);
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