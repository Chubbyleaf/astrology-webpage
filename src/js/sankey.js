import sankeyData from '../data/sankeyData.js';
var dom = document.getElementById('Sankey-Chart');
var myChart = echarts.init(dom, null, {
    renderer: 'svg',
    useDirtyRect: false
});

var option;

option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    animation: false,
    series: [
        {
            type: 'sankey',
            bottom: '10%',
            emphasis: {
                focus: 'adjacency'
            },
            data: sankeyData.nodes,
            links: sankeyData.links,
            nodeAlign: 'justify',
            draggable: false,
            orient: 'vertical',
            color: ['#8685BF', '#5478D4', '#A5DAE2', '#82C4D2', '#46C3EA', '#7EB6DB', '#5CB1DA', '#53A6DA', '#31A9DD', '#3E90B6', '#045DAD', '#045DAD', '#003E6E', '#143385', '#17216E'],
            label: {
                position: 'top'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            },
            label: {
                fontFamily: "SongTi-regular",
                fontSize: 8,
                position: 'inside',
                color: '#fff',
            },
            // nodeGap: 30,
            levels: [
                {
                    depth: 0,
                    itemStyle: {
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                },
                {
                    depth: 1,
                    itemStyle: {
                        color: '#000',
                        borderColor:"#fff"
                    },
                    lineStyle: {
                        color: 'target',
                        opacity: 0.3
                    }
                },
                {
                    depth: 2,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'target',
                        opacity: 0.2
                    }
                }
            ],
        }
    ]
};
// })

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);