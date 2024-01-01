import sankeyData from '/src/data/sankeyData.js';
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
            label: {
                position: 'top'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            },
            label: {
                fontFamily: "SongTi-regular",
                fontSize: 12,
                position: 'inside',
                color: '#fff',
            },
            levels: [
                {
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                },
                {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'target',
                        opacity: 0.6
                    }
                },
                {
                    depth: 2,
                    itemStyle: {
                        color: '#fff'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    },
                    label: {
                        fontFamily: "SongTi-regular",
                        fontSize: 12,
                        position: 'inside',
                        color: '#000',
                    },
                    nodeGap: 50,
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