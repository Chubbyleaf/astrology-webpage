// 玫瑰图数据
const roseData = [
    {
        "name": "其他",
        "value": 287,
        "proportion": "12.24%"
    },
    {
        "name": "送别怀人",
        "value": 229,
        "proportion": "9.77%"
    },

    {
        "name": "咏史怀古",
        "value": 183,
        "proportion": "7.81%"
    },
    {
        "name": "山水田园",
        "value": 245,
        "proportion": "10.45%"
    },
    {
        "name": "咏物言志",
        "value": 156,
        "proportion": "6.66%"
    },
    {
        "name": "边塞军旅",
        "value": 77,
        "proportion": "3.28%"
    },
    {
        "name": "哲理诗",
        "value": 239,
        "proportion": "10.2%"
    },
    {
        "name": "赞颂诗",
        "value": 256,
        "proportion": "10.92%"
    },
    {
        "name": "羁旅思乡",
        "value": 74,
        "proportion": "3.16%"
    },
    {
        "name": "爱情闺怨",
        "value": 132,
        "proportion": "5.63%"
    },

    {
        "name": "感怀诗",
        "value": 466,
        "proportion": "19.88%"
    },
]

//象形柱状图数据
const pbData = {
    "其他": {
        "starList": [
            "紫微",
            "木星",
            "金星",
            "角宿",
            "井宿"
        ],
        "valueList": [
            0.1812,
            0.0941,
            0.0697,
            0.0523,
            0.0453
        ]
    },
    "送别怀人": {
        "starList": [
            "紫微",
            "角宿",
            "金星",
            "氐宿",
            "尾宿"
        ],
        "valueList": [
            0.2009,
            0.1266,
            0.1092,
            0.0568,
            0.048
        ]
    },
    "感怀诗": {
        "starList": [
            "紫微",
            "金星",
            "角宿",
            "木星",
            "井宿"
        ],
        "valueList": [
            0.2275,
            0.0858,
            0.0773,
            0.0601,
            0.0451
        ]
    },
    "咏史怀古": {
        "starList": [
            "紫微",
            "金星",
            "木星",
            "角宿",
            "牛宿"
        ],
        "valueList": [
            0.235,
            0.1475,
            0.0601,
            0.0546,
            0.0546
        ]
    },
    "山水田园": {
        "starList": [
            "紫微",
            "角宿",
            "木星",
            "金星",
            "水星"
        ],
        "valueList": [
            0.1714,
            0.1388,
            0.098,
            0.0694,
            0.0653
        ]
    },
    "咏物言志": {
        "starList": [
            "紫微",
            "金星",
            "角宿",
            "尾宿",
            "牛宿"
        ],
        "valueList": [
            0.2436,
            0.109,
            0.0705,
            0.0577,
            0.0577
        ]
    },
    "哲理诗": {
        "starList": [
            "紫微",
            "金星",
            "角宿",
            "牛宿",
            "星宿"
        ],
        "valueList": [
            0.2301,
            0.0921,
            0.0669,
            0.0669,
            0.0544
        ]
    },
    "赞颂诗": {
        "starList": [
            "紫微",
            "尾宿",
            "金星",
            "木星",
            "角宿"
        ],
        "valueList": [
            0.1055,
            0.0898,
            0.0898,
            0.0742,
            0.0664
        ]
    },
    "羁旅思乡": {
        "starList": [
            "紫微",
            "尾宿",
            "牛宿",
            "角宿",
            "亢宿"
        ],
        "valueList": [
            0.2162,
            0.1216,
            0.0811,
            0.0541,
            0.0541
        ]
    },
    "爱情闺怨": {
        "starList": [
            "紫微",
            "女宿",
            "牛宿",
            "太微",
            "金星"
        ],
        "valueList": [
            0.3182,
            0.1515,
            0.1439,
            0.0985,
            0.0606
        ]
    },
    "边塞军旅": {
        "starList": [
            "紫微",
            "鬼宿",
            "金星",
            "牛宿",
            "斗宿"
        ],
        "valueList": [
            0.2468,
            0.1169,
            0.1039,
            0.0909,
            0.0519
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
            text: "星宿在使用题材上的比例分布，可点击查看详情",
            textStyle: {
                color: "#fff",
                fontSize: 16,
                fontFamily: 'SongTi-regular',
                fontWeight: 'normal',
                lineHeight: 40,
            },
            left: 'center',
            bottom: -10
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
                    opacity: 0.3

                },
                select: {
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        opacity: 1
                    },
                    label: {
                        show: true,
                        fontSize: 20,
                        fontFamily: 'SongTi-regular',
                        color: "#fff",
                        opacity: 1,
                        formatter: function (params) {
                            return ` ${params.name}\n\n${params.data.proportion}`;
                        }
                    },
                },
                emphasis: {
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
    myChart.dispatchAction({ type: "select", seriesIndex: 0, dataIndex: 2 }); //设置默认选中高亮部分
    window.addEventListener('resize', myChart.resize);
}

function drawPBChart() {
    var dom = document.getElementById('Pictorial-BarChart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;
    var imagePath = []
    starList = pbData[selectedTheme].starList
    valueList = pbData[selectedTheme].valueList

    for (let i = 0; i < 5; i++) {
        imagePath.push(`src/svg/sankey-icons/${starList[i]}.svg`)
    }

    var maxData = 1;
    option = {
        tooltip: {
            formatter: function (params) {
                return ` 【${params.name}】"${selectedTheme}"题材的诗占比${(params.value * 100).toFixed(2)}%`;
            }
        },
        title: {
            text: `《${selectedTheme}》题材中使用最多的五个星宿`,
            textStyle: {
                color: "#fff",
                fontSize: 16,
                fontFamily: 'SongTi-regular',
                fontWeight: 'normal',
                lineHeight: 40,
            },
            left: 'center',
            bottom: -10
        },
        xAxis: {
            max: maxData,
            splitLine: { show: false },
            offset: -10,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                margin: 10,
                formatter: function (value) {
                    // 仅在整数或者小数部分为0时显示
                    return (value * 100) + '%';
                }
            }
        },
        yAxis: {
            data: starList,
            inverse: true,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                margin: 20,
                width: 80,
                align: "right",
                formatter: function (value, index) {
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
                        height: 54,
                        width: 54,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[0]
                        },
                    },
                    1: {
                        height: 54,
                        width: 54,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[1]
                        },
                    },
                    2: {
                        height: 54,
                        width: 54,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[2]
                        },
                    },
                    3: {
                        height: 54,
                        width: 54,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[3]
                        },
                    },
                    4: {
                        height: 54,
                        width: 54,
                        align: 'centers',
                        backgroundColor: {
                            image: imagePath[4]
                        },
                    },
                }
            }
        },
        grid: {
            top: 'left',
            height: 400,
            width: 500,
            left: 120
        },
        series: [
            {
                // current data
                type: 'pictorialBar',
                symbol: 'image://src/svg/pb-chart-icon.svg',
                symbolRepeat: 10,
                symbolMargin: '2%',
                symbolClip: true,
                symbolSize: 38,
                symbolBoundingData: maxData,
                data: valueList,
                z: 10
            },
            {
                // full data
                type: 'pictorialBar',
                itemStyle: {
                    opacity: 0.2
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return (params.value * 100).toFixed(2) + ' %';
                    },
                    position: 'right',
                    offset: [20, 0],
                    color: 'white',
                    fontSize: 26,
                    opacity: 1,
                    fontFamily: 'SongTi-regular'
                },
                animationDuration: 0,
                symbolRepeat: 10,
                symbolMargin: '2%',
                symbol: 'image://src/svg/pb-chart-icon.svg',
                symbolSize: 38,
                symbolBoundingData: maxData,
                data: valueList,
                z: 5
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawRoseChart();
drawPBChart();