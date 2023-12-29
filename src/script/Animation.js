// let angle = 0;
// let radius = 100;
// let font;
// let canvasWidth = 800;
// let canvasHeight = 200;

// let starNameData = [
//     { star: "太阳", otherName: "日sssssssssssssssssssssssssss" },
//     // { star: "月亮", otherName: "月ssssssssssssssssssssssss" },
//     // { star: "金星", otherName: "吴老sssssssssssssssssssss" },
// ];

// function preload() {
//     font = loadFont('../font/PingFang-SC-Regular.ttf'); // 替换成你想要使用的字体文件路径
// }

// function setup() {
//     let canvas = createCanvas(canvasWidth, canvasHeight);
//     canvas.parent('StarName-Chart'); // 将画布添加到指定的 div 中
//     textFont(font);
//     textSize(12);
//     textAlign(CENTER, CENTER);
// }

// function draw() {
//     background(0);
//     let totalItems = starNameData.length;

//     for (let i = 0; i < totalItems; i++) {
//         // 计算句子中每个字符的位置
//         let totalChars = starNameData[i].otherName.length;
//         let otherName =starNameData[i].otherName;
//         let deltaAngle = TWO_PI / totalChars;

//         for (let i = 0; i < totalChars; i++) {
//             let x = width / 2 + radius * cos(angle + i * deltaAngle);
//             let y = height / 2 + radius * sin(angle + i * deltaAngle);
//             fill(255);
//             text(otherName.charAt(i), x, y);
//         }
//     }

//     // 更新角度以实现旋转动画
//     //   angle += 0.01;

//     // 如果需要，你还可以在这里添加滚动事件处理代码，控制圆圈的滚动方向和速度
// }


// function toggleHighlight(element) {
//     element.classList.toggle('highlight');
//     const line = element.querySelector('.line');
//     line.style.width = element.classList.contains('highlight') ? '100%' : '0';
//   }

//   function highlight(element) {
//     element.classList.add('highlight');
//     const lines = document.querySelectorAll('.line');
//     lines.forEach(line => {
//       line.style.width = '100%';
//     });
//   }

//   function removeHighlight(element) {
//     element.classList.remove('highlight');
//     const lines = document.querySelectorAll('.line');
//     lines.forEach(line => {
//       line.style.width = '0';
//     });
//   }
