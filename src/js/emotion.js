// 仰望星空，共托情思的图

//中间饼状图的数据
const centerPieData = [
    { value: 590, name: '星为代语' },
    { value: 885, name: '星为元素' },
    { value: 623, name: '星为原型意象' },
    { value: 287, name: '星为主题' },
]

const sidePieData = {
    '星为主题': [
        { value: 50, name: '紫微' },
        { value: 20, name: '木星' },
        { value: 19, name: '金宿' },
        { value: 18, name: '角宿' },
        { value: 180, name: '其他' }
    ],
    '星为元素': [
        { value: 190, name: '紫微' },
        { value: 98, name: '金星' },
        { value: 60, name: '木星' },
        { value: 55, name: '角宿' },
        { value: 482, name: '其他' }
    ],
    '星为原型意象': [
        { value: 147, name: '紫微' },
        { value: 49, name: '金星' },
        { value: 43, name: '尾宿' },
        { value: 38, name: '角宿' },
        { value: 346, name: '其他' }
    ],
    '星为代语': [
        { value: 99, name: '紫微' },
        { value: 46, name: '金星' },
        { value: 42, name: '角宿' },
        { value: 41, name: '木星' },
        { value: 362, name: '其他' }
    ]
}

// 玫瑰数据
const roseData = [
    { value: 231, name: '山水田园' },
    { value: 88, name: '边塞军旅' },
    { value: 186, name: '咏史怀古' },
    { value: 140, name: '咏物言志' },
    { value: 203, name: '送别怀人' },
    { value: 69, name: '羁旅思乡' },
    { value: 185, name: '爱情闺怨' },
    { value: 466, name: '感怀诗' },
    { value: 255, name: '哲理诗' },
    { value: 234, name: '赞颂诗' },
    { value: 328, name: '其他' },
]

//雷达图分割线数据
const radarIndicatorData = {
    '山水田园': [
        { name: '牛宿', max: 15 },
        { name: '井宿', max: 15 },
        { name: '斗宿', max: 15 },
        { name: '星宿', max: 15 },
        { name: '鬼宿', max: 15 },
    ],
    '爱情闺怨': [
        { name: '女宿', max: 20 },
        { name: '牛宿', max: 20 },
        { name: '井宿', max: 20 },
        { name: '斗宿', max: 20 },
        { name: '星宿', max: 20 },
    ],
    '边塞军旅': [
        { name: '鬼宿', max: 10 },
        { name: '牛宿', max: 10 },
        { name: '斗宿', max: 10 },
        { name: '井宿', max: 10 },
        { name: '轸宿', max: 10 },
    ],
    '感怀诗': [
        { name: '井宿', max: 25 },
        { name: '鬼宿', max: 25 },
        { name: '牛宿', max: 25 },
        { name: '星宿', max: 25 },
        { name: '女宿', max: 25 },
    ],
    '羁旅思乡': [
        { name: '牛宿', max: 10 },
        { name: '女宿', max: 10 },
        { name: '斗宿', max: 10 },
        { name: '翼宿', max: 10 },
        { name: '井宿', max: 10 },
    ],
    '送别怀人': [
        { name: '鬼宿', max: 10 },
        { name: '斗宿', max: 10 },
        { name: '女宿', max: 10 },
        { name: '井宿', max: 10 },
        { name: '牛宿', max: 10 },
    ],
    '咏史怀古': [
        { name: '牛宿', max: 10 },
        { name: '斗宿', max: 10 },
        { name: '星宿', max: 10 },
        { name: '井宿', max: 10 },
        { name: '女宿', max: 10 },
    ],
    '咏物言志': [
        { name: '牛宿', max: 10 },
        { name: '斗宿', max: 10 },
        { name: '井宿', max: 10 },
        { name: '鬼宿', max: 10 },
        { name: '女宿', max: 10 },
    ],
    '赞颂诗': [
        { name: '女宿', max: 15 },
        { name: '牛宿', max: 15 },
        { name: '鬼宿', max: 15 },
        { name: '井宿', max: 15 },
        { name: '斗宿', max: 15 },
    ],
    '哲理诗': [
        { name: '牛宿', max: 20 },
        { name: '星宿', max: 20 },
        { name: '井宿', max: 20 },
        { name: '室宿', max: 20 },
        { name: '鬼宿', max: 20 },
    ],
    '其他': [
        { name: '井宿', max: 15 },
        { name: '鬼宿', max: 15 },
        { name: '女宿', max: 15 },
        { name: '危宿', max: 15 },
        { name: '牛宿', max: 15 },
    ],
}

//雷达图数据
const radarData = {
    '山水田园': [[12, 10, 7, 6, 5]],
    '爱情闺怨': [[20, 19, 2, 1, 1]],
    '边塞军旅': [[9, 7, 4, 3, 3]],
    '感怀诗': [[21, 20, 18, 15, 12]],
    '羁旅思乡': [[6, 4, 4, 2, 2]],
    '送别怀人': [[9, 9, 8, 7, 4]],
    '咏史怀古': [[10, 7, 6, 6, 5]],
    '咏物言志': [[9, 7, 6, 3, 3]],
    '赞颂诗': [[13, 12, 11, 8, 5]],
    '哲理诗': [[16, 13, 9, 9, 7]],
    '其他': [[13, 12, 9, 9, 8]]
}


//小的环形图色彩范围
const colorList = {
    '星为主题': ['#B2DDF8', '#8EADC0', '#556E7D', '#3A5565', '#3A474F'],
    '星为元素': ['#4059B3', '#2C45A0', '#1C3694', '#152970', '#121729'],
    '星为原型意象': ['#7BA0CA', '#5D87B8', '#58728F', '#415368', '#2A3541'],
    '星为代语': ['#1F25A6', '#151A95', '#161A6D', '#090E6C', '#0A0D53']
}

//选择的情感
var selectedMethod = ''
var selectedEmotion = "咏史怀古"


//绘制中间的情感饼图
function drawCenterPieChart() {
    var dom = document.getElementById('Center-Pie-Chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    var option;
    option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '星象与入诗手法',
                type: 'pie',
                radius: '82%',
                data: centerPieData,
                selectedMode: true,
                startAngle: 168,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                color: ['#1F24A6', '#4059B3', '#7BA0CA', '#B2DDF8'],
                label: {
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: 'SongTi-regular',
                    position: 'inside'
                },
                select: {
                    label: {
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: 'SongTi-regular',

                    },

                    labelLine: {
                        show: true,
                        length: 10,
                        length2: 15,
                        lineStyle: {

                            color: "#fff",
                            maxSurfaceAngle: 80
                        }
                    },
                },

            }
        ]
    };


    myChart.on('click', function (params) {
        var name = params.name;
        selectedMethod = name;
        drawSidePieChart();
        drawVector();
    });

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

}

//绘制边上的情感饼图
function drawSidePieChart() {
    var dom = document.getElementById('Side-Pie-Chart');
    dom.style.position = 'absolute'
    dom.style.removeProperty('top');
    dom.style.removeProperty('right');
    dom.style.removeProperty('left');
    dom.style.removeProperty('bottom');
    if (selectedMethod == '星为主题') {
        dom.style.top = '287px';
        dom.style.left = '270px';
    } else if (selectedMethod == '星为元素') {
        dom.style.top = '166px';
        dom.style.right = '333px';
    } else if (selectedMethod == '星为代语') {
        dom.style.top = '-25px';
        dom.style.left = '518px';
    } else if (selectedMethod == '星为原型意象') {
        dom.style.top = '458px';
        dom.style.left = '464px';
    }
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    var option;
    option = {
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: '星宿',
                type: 'pie',
                radius: ['60%', '90%'],
                avoidLabelOverlap: false,
                selectedMode: true,
                selectedOffset: 0,
                color: colorList[selectedMethod],
                label: {
                    show: false,
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                labelLine: {
                    show: false
                },
                data: sidePieData[selectedMethod]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    window.addEventListener('resize', myChart.resize);

}

async function drawVector() {
    var piePieLine = document.getElementById('pie-pie-line');
    var src;
    piePieLine.style.position = 'absolute'
    piePieLine.style.removeProperty('top');
    piePieLine.style.removeProperty('right');
    piePieLine.style.removeProperty('left');
    piePieLine.style.removeProperty('bottom');
    piePieLine.style.zIndex = -1

    if (selectedMethod == '星为主题') {
        src = './src/svg/vector4.svg'
        piePieLine.style.top = '275px';
        piePieLine.style.left = '340px';
    } else if (selectedMethod == '星为元素') {
        src = './src/svg/vector2.svg'
        piePieLine.style.top = '174px';
        piePieLine.style.right = '400px';
    } else if (selectedMethod == '星为代语') {
        src = './src/svg/vector1.svg'
        piePieLine.style.top = '33px';
        piePieLine.style.left = '532px';
    } else if (selectedMethod == '星为原型意象') {
        src = './src/svg/vector3.svg'
        piePieLine.style.top = '375px';
        piePieLine.style.left = '500px';
    }
    try {
        let vector = await fetch(src);
        let content = await vector.text();
        piePieLine.innerHTML = content;
    } catch (error) {
        console.error('加载SVG时发生错误:', error);
    }

    var methodChartWarp = document.getElementById('method-chart-warp');
    methodChartWarp.appendChild(piePieLine);
}

function drawRoseChart() {
    var dom = document.getElementById('Rose-Chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    var option;
    option = {
        title: {
            text: "图 星象与诗的题材",
            textStyle: {
                color: "#fff",
                fontSize: 16,
                fontFamily: 'SongTi-regular',
                fontWeight: 'normal',
                lineHeight: 30,
            },
            left: 'center',
            bottom: 0
        },
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: '诗的题材',
                type: 'pie',
                radius: ['40%', '90%'],
                roseType: 'area',
                avoidLabelOverlap: false,
                selectedMode: true,
                selectedOffset: 0,
                label: {
                    position: 'center',
                    show: false
                },
                color: ['#BBD0E9', '#92C3E7', '#64ACE1', '#1678CC', '#0054C2', '#003384', '#00264E', '#0054C2', '#60B4E2', '#9ECFE3', '#CEE7F2'],
                itemStyle: {
                    borderColor: '#fff', // 默认描边颜色
                    borderWidth: 0.3, // 默认描边宽度
                    opacity: 0.5

                },
                select: {
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        opacity: 1
                    },
                    label: {
                        show: true,
                        fontSize: 16,
                        fontFamily: 'SongTi-regular',
                        color: "#fff",
                        backgroundColor: {
                            image: '../image/blue-star3.png',
                        },
                        width: 106,
                        height: 106,
                    },
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontFamily: 'SongTi-regular',
                        color: "#fff",
                        backgroundColor: {
                            image: '../image/blue-star3.png',
                        },
                        width: 106,
                        height: 106,
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                },
                labelLine: {
                    show: false
                },
                data: roseData
            }
        ]
    };


    myChart.on('click', function (params) {
        var name = params.name;
        selectedEmotion = name;
        myChart.dispatchAction({ type: "downplay", seriesIndex: 0, dataIndex: 2 });
        drawRadarChart()
    });


    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    myChart.dispatchAction({ type: "highlight", seriesIndex: 0, dataIndex: 2 }); //设置默认选中高亮部分
    window.addEventListener('resize', myChart.resize);
}

//绘制雷达图
function drawRadarChart() {
    var dom = document.getElementById('Radar-Chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;
    option = {
        tooltip: {
            trigger: 'item',
        },
        radar: {
            indicator: radarIndicatorData[selectedEmotion],
            shape: 'circle',
            axisName: {
                color: '#fff',
                fontFamily: 'SongTi-regular',
                fontSize: 14
            },
            splitLine: {
                lineStyle: {
                    color: "#fff",
                    width: 0.3,
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: 'rgb(255,255,255,0.1)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 0.3
                }
            }
        },
        series: [
            {
                name: selectedEmotion,
                type: 'radar',
                lineStyle: {
                    width: 1,
                    opacity: 1
                },
                data: radarData[selectedEmotion],
                symbol: 'none',
                itemStyle: {
                    color: '#2347C4',
                },
                areaStyle: {
                    opacity: 0.4,
                }
            }

        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawCenterPieChart();
drawRoseChart();
drawRadarChart();
