// 仰望星空，共托情思的图
const doughnutData2 = [
    { value: 44, name: '山水田园' },
    { value: 32, name: '边塞军旅' },
    { value: 117, name: '咏史怀古' },
    { value: 19, name: '咏物言志' },
    { value: 86, name: '送别怀人' },
    { value: 51, name: '羁旅思乡' },
    { value: 50, name: '爱情闺怨' },
    { value: 44, name: '感怀诗' },
    { value: 35, name: '哲理诗' },
    { value: 68, name: '赞颂诗' },
    { value: 74, name: '其他' },
]

function drawDoughnutChart1() {

}

var selectedEmotion = "山水田园"

function drawDoughnutChart2() {
    var dom = document.getElementById('Doughnut-Chart2');
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
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                selectedMode: true,
                selectedOffset: 0,
                label: {
                    position: 'center',
                    show: false
                },
                itemStyle: {
                    color: '#0e1438', // 默认颜色
                    borderColor: '#fff', // 默认描边颜色
                    borderWidth: 0.3 // 默认描边宽度
                },
                select: {
                    itemStyle: {
                        color: '#3F66D1',
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    label: {
                        show: true,
                        fontSize: 16,
                        fontFamily: 'SongTi-regular',
                        color: "#fff",
                        backgroundColor: {
                            image: '/src/image/blue-star3.png',
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
                            image: '/src/image/blue-star3.png',
                        },
                        width: 106,
                        height: 106,
                    },
                    itemStyle: {
                        color: '#3F66D1',
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                labelLine: {
                    show: false
                },
                data: doughnutData2
            }
        ]
    };


    myChart.on('click', function (params) {
        var name = params.name;
        selectedEmotion = name;
    });

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
function drawRadarChart() {
    var dom = document.getElementById('Radar-Chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;

    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [
        [160, 120, 186, 2.77, 91, 50, 28, 11, 11],
    ];
    option = {
        radar: {
            indicator: [
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
                { name: '角宿', max: 300 },
            ],
            shape: 'circle',
            axisName: {
                color: '#fff',
                fontFamily: 'SongTi-regular',
                fontSize: 10
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
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    width: 1,
                    opacity: 1
                },
                data: dataBJ,
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

drawRadarChart();
drawDoughnutChart2();
