// 玫瑰图数据
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

//象形柱状图数据
const pbData = {
    "其他": {
        "starList": [
            "紫微",
            "木星",
            "金星",
            "氐宿",
            "井宿"
        ],
        "valueList": [
            47,
            27,
            19,
            15,
            13
        ]
    },
    "哲理诗": {
        "starList": [
            "紫微",
            "金星",
            "牛宿",
            "昴宿",
            "尾宿"
        ],
        "valueList": [
            55,
            22,
            16,
            15,
            15
        ]
    },
    "山水田园": {
        "starList": [
            "紫微",
            "木星",
            "水星",
            "金星",
            "毕宿"
        ],
        "valueList": [
            42,
            24,
            17,
            17,
            14
        ]
    },
    "咏物言志": {
        "starList": [
            "紫微",
            "金星",
            "角宿",
            "牛宿",
            "斗宿"
        ],
        "valueList": [
            38,
            17,
            12,
            9,
            7
        ]
    },
    "感怀诗": {
        "starList": [
            "紫微",
            "金星",
            "木星",
            "尾宿",
            "角宿"
        ],
        "valueList": [
            106,
            37,
            28,
            23,
            22
        ]
    },
    "咏史怀古": {
        "starList": [
            "紫微",
            "金星",
            "角宿",
            "木星",
            "尾宿"
        ],
        "valueList": [
            43,
            26,
            13,
            11,
            10
        ]
    },
    "爱情闺怨": {
        "starList": [
            "紫微",
            "角宿",
            "女宿",
            "牛宿",
            "尾宿"
        ],
        "valueList": [
            42,
            36,
            20,
            19,
            15
        ]
    },
    "送别怀人": {
        "starList": [
            "紫微",
            "金星",
            "胃宿",
            "斗宿",
            "鬼宿"
        ],
        "valueList": [
            46,
            25,
            15,
            9,
            9
        ]
    },
    "赞颂诗": {
        "starList": [
            "紫微",
            "金星",
            "木星",
            "角宿",
            "尾宿"
        ],
        "valueList": [
            27,
            22,
            19,
            15,
            13
        ]
    },
    "边塞军旅": {
        "starList": [
            "紫微",
            "鬼宿",
            "牛宿",
            "金星",
            "奎宿"
        ],
        "valueList": [
            19,
            9,
            7,
            7,
            6
        ]
    },
    "羁旅思乡": {
        "starList": [
            "紫微",
            "牛宿",
            "亢宿",
            "角宿",
            "斗宿"
        ],
        "valueList": [
            16,
            6,
            4,
            4,
            4
        ]
    }
}

var selectedTheme = '咏史怀古'

//绘制玫瑰图
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
                // color: ['#BBD0E9', '#92C3E7', '#64ACE1', '#1678CC', '#0054C2', '#003384', '#00264E', '#0054C2', '#60B4E2', '#9ECFE3', '#CEE7F2'],
                color: {
                    image:"src/image/shuimo.png",
                    repeat: 'repeat'
                },

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
                            image: 'src/image/blue-star3.png',
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
                            image: 'src/image/blue-star3.png',
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
        selectedTheme = name;
        myChart.dispatchAction({ type: "downplay", seriesIndex: 0, dataIndex: 2 });
        drawPBChart()
    });


    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    myChart.dispatchAction({ type: "highlight", seriesIndex: 0, dataIndex: 2 }); //设置默认选中高亮部分
    window.addEventListener('resize', myChart.resize);
}
//绘制右侧的象形柱状图
function drawPBChart() {
    var dom = document.getElementById('Pictorial-BarChart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    var app = {};

    var option;
    var imagePath = []
    starList = pbData[selectedTheme].starList
    valueList = pbData[selectedTheme].valueList

    for (let i = 0; i < 5; i++) {
        imagePath.push(`src/svg/sankey-icons/${starList[i]}.svg`)
    }
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        yAxis: {
            data: starList,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                margin: -5,
                width: 80,
                formatter: function (value, index) {
                    // 根据横坐标标签值的不同设置不同的图片路径
                    console.log(imagePath)
                    // 制作富文本标签
                    return `{a|${value}}  {${index}|}`;
                },
                rich: {
                    a: {
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'SongTi-regular'
                    },
                    0: {
                        height: 50,
                        width: 50,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[0]
                        },
                    },
                    1: {
                        height: 50,
                        width: 50,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[1]
                        },
                    },
                    2: {
                        height: 50,
                        width: 50,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[2]
                        },
                    },
                    3: {
                        height: 50,
                        width: 50,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[3]
                        },
                    },
                    4: {
                        height: 50,
                        width: 50,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[4]
                        },
                    },
                }
            }

        },
        xAxis: {
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false }
        },
        color: ['#fff'],
        series: [
            {
                name: 'hill',
                type: 'pictorialBar',
                barCategoryGap: '-100%',
                symbol: 'image://src/svg/moji.svg',
                itemStyle: {
                    opacity: 0.2
                },
                emphasis: {
                    itemStyle: {
                        opacity: 1
                    }
                },
                data: valueList,
                z: 10
            },
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

}

drawRoseChart();
drawPBChart();