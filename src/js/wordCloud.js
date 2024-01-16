
// 绘制词云图
import keywordNumber from "../data/keyword.js";
import xiuOtherNames from '../data/otherNames.js'

//生成三员的div框
function drawYuanDiv() {
  const gridContainer = document.getElementById('three-boxes');
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.classList.add('yuan-grid-item');
    div.setAttribute('id', 'yuan' + i);
    gridContainer.appendChild(div);
  }
}

//生成五星的div框
function drawXingDiv() {
  const gridContainer = document.getElementById('five-boxes');
  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('xing-grid-item');
    div.setAttribute('id', 'xing' + i);
    gridContainer.appendChild(div);
  }
}

//生成28个画星宿的div框
function drawXiuDiv() {
  const gridContainer = document.getElementById('twenty-eight-boxes');
  for (let i = 0; i < 28; i++) {
    const div = document.createElement('div');
    div.classList.add('xiu-grid-item');
    div.setAttribute('id', 'xiu' + i);
    gridContainer.appendChild(div);
  }
}

function normalizeArray(arr) {
  // const maxVal = Math.max(...arr);
  const maxVal = 34;
  const normalizedArray = arr.map(num => (num / maxVal) > 1 ? 1 : (num / maxVal));
  return normalizedArray;
}

//计算每个星宿别名的数量
function getShrinkSize() {
  var numArray = []
  for (const starEntry of xiuOtherNames) {
    let num = 0;
    for (const otherNameEntry of starEntry.otherNames) {
      num += otherNameEntry.size
    }
    numArray.push(num)
  }
  // 归一化 numArray
  return normalizeArray(numArray);
}

//绘制大的词云图
function drawWordCloudChart() {
  cloud.make({
    width: 940,
    height: 450,
    container: "#WordCloud-Chart",
    words: keywordNumber,
    fontRange: [10, 100]
  })
}


//绘制二十八宿的词云图
function drawWordCloudChart1() {
  const shrinkSizes = getShrinkSize()
  for (let i = 0; i < 36; i++) {
    const starEntry = xiuOtherNames[i]
    var containerName;
    if (i < 3) {
      containerName = "yuan" + i
    } else if (i < 8) {
      containerName = "xing" + (i - 3)
    } else {
      containerName = "xiu" + (i - 8)
    }
    const otherNameEntry = starEntry.otherNames
    const shrinkSize = shrinkSizes[i]
    cloud.make({
      width: 120,
      height: 70,
      container: '#' + containerName,
      words: otherNameEntry,
      fontRange: [10 * shrinkSize, 50 * shrinkSize]
    })
  }
}



function drawCharts() {
  drawXiuDiv();
  drawXingDiv();
  drawYuanDiv();
  drawWordCloudChart();
  drawWordCloudChart1();
}

drawCharts();
