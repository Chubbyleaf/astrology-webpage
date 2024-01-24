// 玫瑰图数据
const roseData = [
    {
        "name": "其他",
        "value": 264,
        "proportion": "10.74%"
    },

    {
        "name": "羁旅思乡",
        "value": 81,
        "proportion": "3.3%"
    },

    {
        "name": "咏史怀古",
        "value": 203,
        "proportion": "8.26%"
    },
    {
        "name": "送别怀人",
        "value": 264,
        "proportion": "10.74%"
    },
    {
        "name": "山水田园",
        "value": 191,
        "proportion": "7.77%"
    },
    {
        "name": "爱情闺怨",
        "value": 62,
        "proportion": "2.52%"
    },

    {
        "name": "咏物言志",
        "value": 164,
        "proportion": "6.67%"
    },
    {
        "name": "哲理诗",
        "value": 301,
        "proportion": "12.25%"
    },
    {
        "name": "边塞军旅",
        "value": 92,
        "proportion": "3.74%"
    },
    {
        "name": "赞颂诗",
        "value": 281,
        "proportion": "11.44%"
    },
    {
        "name": "感怀诗",
        "value": 554,
        "proportion": "22.55%"
    },
]

//象形柱状图数据
const pbData = {
    "感怀诗": {
      "starList": [
        "火星",
        "太微",
        "觜宿",
        "土星",
        "水星"
      ],
      "valueList": [
        0.4,
        0.3438,
        0.3333,
        0.3333,
        0.3108
      ]
    },
    "山水田园": {
      "starList": [
        "胃宿",
        "角宿",
        "虚宿",
        "毕宿",
        "井宿"
      ],
      "valueList": [
        0.2603,
        0.1965,
        0.1818,
        0.175,
        0.1163
      ]
    },
    "送别怀人": {
      "starList": [
        "柳宿",
        "娄宿",
        "胃宿",
        "亢宿",
        "氐宿"
      ],
      "valueList": [
        0.375,
        0.25,
        0.2329,
        0.2143,
        0.1806
      ]
    },
    "赞颂诗": {
      "starList": [
        "张宿",
        "尾宿",
        "房宿",
        "箕宿",
        "心宿"
      ],
      "valueList": [
        0.6,
        0.2323,
        0.2286,
        0.2258,
        0.2258
      ]
    },
    "哲理诗": {
      "starList": [
        "土星",
        "室宿",
        "壁宿",
        "星宿",
        "心宿"
      ],
      "valueList": [
        0.6667,
        0.2571,
        0.2222,
        0.2131,
        0.1935
      ]
    },
    "其他": {
      "starList": [
        "娄宿",
        "觜宿",
        "危宿",
        "虚宿",
        "壁宿"
      ],
      "valueList": [
        0.75,
        0.6667,
        0.6,
        0.3636,
        0.3333
      ]
    },
    "咏物言志": {
      "starList": [
        "房宿",
        "参宿",
        "斗宿",
        "箕宿",
        "尾宿"
      ],
      "valueList": [
        0.2286,
        0.1111,
        0.1061,
        0.0968,
        0.0909
      ]
    },
    "咏史怀古": {
      "starList": [
        "金星",
        "水星",
        "毕宿",
        "壁宿",
        "斗宿"
      ],
      "valueList": [
        0.1517,
        0.1486,
        0.1125,
        0.1111,
        0.1061
      ]
    },
    "羁旅思乡": {
      "starList": [
        "箕宿",
        "亢宿",
        "尾宿",
        "翼宿",
        "天市"
      ],
      "valueList": [
        0.0968,
        0.0952,
        0.0909,
        0.0909,
        0.0789
      ]
    },
    "爱情闺怨": {
      "starList": [
        "女宿",
        "牛宿",
        "轸宿",
        "参宿",
        "太微"
      ],
      "valueList": [
        0.2381,
        0.157,
        0.1,
        0.0833,
        0.0312
      ]
    },
    "边塞军旅": {
      "starList": [
        "昴宿",
        "轸宿",
        "鬼宿",
        "壁宿",
        "火星"
      ],
      "valueList": [
        0.1585,
        0.15,
        0.1139,
        0.1111,
        0.1
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