// 诗中常见的星象名称
const rollingInfo = [
    {
        name: "紫微",
        otherNameStr: "紫微 中宫 紫垣 辰极 耀魄 天枪 枪星 司中 应星 四辅 璇 璇玑 天枢 极枢 枢极 太乙 太一 枢纽 华盖 天璇 天玑 玉衡 开阳 瑶光 台斗 泰斗 天魁 文昌 北斗 北极 北辰 勾陈一 ",
        radius: 430,
    }, {
        name: "太微",
        otherNameStr: "太微 东垣 掖门 魁三象 郎位 右执法 虎贲 大微 上垣 ",
        radius: 155,
    }, {
        name: "天市",
        otherNameStr: "天市 天牢 天纪 帝座 帝坐 贯索 ",
        radius: 125,
    }, {
        name: "金星",
        otherNameStr: "金星 太白 白角 昏星 晨星 启明 长庚 明星 大星 刑星 殷星 大正 营星 观星 宫星 大衰 大泽 终星 大相 天浩 序星 月纬 梁星 灭星 ",
        radius: 350,
    }, {
        name: "木星",
        otherNameStr: "木星 岁星 太岁 龙集 青龙 苍龙 仓龙 木精 端蒙 纪星 经星 周星 摄提 重华 重星 德星 福星 善星 得岁 ",
        radius: 320,
    }, {
        name: "水星",
        otherNameStr: "水星 辰星 水精 小白 细爽 细极 勾星 钩星 辰勾 小正 兔星 伺晨 安周 安调 ",
        radius: 220,
    }, {
        name: "火星",
        otherNameStr: "火星 火房 荧惑 营惑 火精 罚星 法星 执法 法使 ",
        radius: 150,
    }, {
        name: "土星",
        otherNameStr: "土星 镇星 土精 填星 信星 地候 ",
        radius: 125,
    }, {
        name: "角",
        otherNameStr: "角宿 角星 天门 天关 天柱 辰角 苍龙角 角木蛟 龙角 平道 天田 进贤 周鼎 天门 库楼 南门 ",
        radius: 280,
    }, {
        name: "亢",
        otherNameStr: "亢宿 疏庙 亢星 天府 天庭 亢金龙 大角 折威 摄提 顿顽 阳门 ",
        radius: 200,
    }, {
        name: "氐",
        otherNameStr: "氐宿 天根 氐星 天符 天乳 招摇 梗河 帝席 亢池 骑官 阵车 车骑 天辐 骑阵将军 ",
        radius: 240,
    }, {
        name: "房",
        otherNameStr: "房宿 天驷 房星 房驷 马王 马祖 龙马 房日兔 罚 钩钤 键闭 两咸 从官 ",
        radius: 220,
    }, {
        name: "心",
        otherNameStr: "心宿 商心 大火 大辰 心火 龙火 心星 辰星 阙伯 马星 心月狐 积卒 ",
        radius: 220,
    }, {
        name: "尾",
        otherNameStr: "九子 析木 辰尾 尾星 龙尾 尾火虎 九江 尾宿 傅说 天江 神功 龟 鱼 ",
        radius: 220,
    }, {
        name: "箕",
        otherNameStr: "南星 南箕 傲客 敖客 龙尾 龙箕 天津 箕水豹 箕宿 糠 木杵 ",
        radius: 200,
    }, {
        name: "斗",
        otherNameStr: "南斗 天斧 天阙 斗宿 天鸡 天渊 天弁 天鳌 钥 狗国 农丈人 ",
        radius: 200,
    }, {
        name: "牛",
        otherNameStr: "牛宿 牵牛 斗牛 天田 九坎 罗堰 河鼓 织女 左旗 右旗 天桴 辇道 渐台 ",
        radius: 220,
    }, {
        name: "女",
        otherNameStr: '女宿 须女 婺女 织女 务女 离珠 瓠瓜 败瓜 天津 奚仲 扶筐 ',
        radius: 200,
    }, {
        name: "虚",
        otherNameStr: '虚宿 墟 天节 司命 司禄 司危 司非 天垒城 败臼 离瑜 ',
        radius: 190,
    }, {
        name: "危",
        otherNameStr: '危宿 危月燕 盖屋 天钩 坟墓 盖屋 虚梁 杵 臼 人 车府 造父 天钱 ',
        radius: 210,
    }, {
        name: "室",
        otherNameStr: "室宿 营室 元宫 豕韦 结蝓 北落师门 鈇钺 离宫 雷电 羽林军 垒壁阵 八魁 天纲 腾蛇 土功吏 ",
        radius: 280,
    }, {
        name: "壁",
        otherNameStr: "壁宿 文府 霹雳 天厩 土功 鈇锧 ",
        radius: 120,
    }, {
        name: "奎",
        otherNameStr: "奎宿 封豕 武库 天溷 外屏 王良 阁道 附路 土司空 军南门 ",
        radius: 190,
    }, {
        name: "娄",
        otherNameStr: "娄宿 聚众 左更 右更 天仓 天庚 天大将军 ",
        radius: 140,
    }, {
        name: "胃",
        otherNameStr: "胃宿 天仓 天船 积水 天囷 天廪 大陵 积尸 ",
        radius: 140,
    }, {
        name: "昴",
        otherNameStr: "昴宿 大梁 西陆 旄头 岳事 天耳 天阿 天阴 天苑 刍藁 卷舌 天谗 砺石 ",
        radius: 220,
    }, {
        name: "毕",
        otherNameStr: "毕宿 罕车 天罔 雨师 云师 罔车 天关 天潢 附耳 天街 天节 诸王 天高 九州 殊口 五车 咸池 参旗 九游 天园 ",
        radius: 320,
    }, {
        name: "觜",
        otherNameStr: "觜宿 罚 虎首 司怪 坐旗 ",
        radius: 100,
    }, {
        name: "参",
        otherNameStr: "参宿 伐 三星 实沈 伐 玉井 军井 厕 天矢 ",
        radius: 140,
    }, {
        name: "井",
        otherNameStr: "井宿 玉羊 鹑首 水衡 钺 弧矢 天狼 南极老人 丈人 五诸侯 南河 北河 天樽 积水 积薪 四渎 水府 水位 军市 野鸡 阙丘 ",
        radius: 340,
    }, {
        name: "鬼",
        otherNameStr: "鬼宿 弧 天目 天庙 积尸气 天狗 爟 外厨 天社 天纪 ",
        radius: 160,
    }, {
        name: "柳",
        otherNameStr: "柳宿 咮 鹑火 鸟注 鸟衡 天厨 噣 鸟槠 酒旗 ",
        radius: 150,
    }, {
        name: "星",
        otherNameStr: "星宿 员官 鸟颈 天都 轩辕 天相 天稷 内平 ",
        radius: 150,
    }, {
        name: "张",
        otherNameStr: "张宿 鸟嗉 鹑尾 天庙 ",
        radius: 100,
    },
    {
        name: "翼",
        otherNameStr: "翼宿 羽翮 天倡 东瓯 ",
        radius: 100,
    }, {
        name: "轸",
        otherNameStr: "轸宿 鸟驾 天车 土司空 左辖 青邱 军门 器府 ",
        radius: 150,
    }
]

//生成div框
function drawRollingDiv() {
    const chartContainer = document.getElementById('Rolling-Star-Chart');
    for (let i = 0; i < rollingInfo.length; i++) {
        if (i == 0) {
            const typeNameDiv = document.createElement('div');
            typeNameDiv.classList.add('rolling-left-type-name');
            typeNameDiv.innerText = "三垣"
            chartContainer.appendChild(typeNameDiv)
        } else if (i == 3) {
            const typeNameDiv = document.createElement('div');
            typeNameDiv.classList.add('rolling-left-type-name');
            typeNameDiv.innerText = "五星"
            chartContainer.appendChild(typeNameDiv)
        } else if (i == 8) {
            const typeNameDiv = document.createElement('div');
            typeNameDiv.classList.add('rolling-left-type-name');
            typeNameDiv.innerText = "二十八宿"
            chartContainer.appendChild(typeNameDiv)
        }
        const div = document.createElement('div');
        div.classList.add('rolling-item-warp');
        div.setAttribute('id', 'rolling' + i);
        chartContainer.appendChild(div);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add("rolling-item")
        innerDiv.style.width = rollingInfo[i].radius + "px"
        innerDiv.style.height = rollingInfo[i].radius + "px"
        const otherName = rollingInfo[i].otherNameStr
        for (let j = 0; j < otherName.length; j++) {
            let letter = otherName[j]
            let spanEle = document.createElement("span")
            spanEle.innerText = letter
            let r = (360 / otherName.length) * j
            spanEle.style.transform = `rotate(${r}deg)`
            innerDiv.appendChild(spanEle)
        }
        let centerText = document.createElement("div")
        centerText.innerText = rollingInfo[i].name
        centerText.classList.add("center-blue-gradient-text")
        innerDiv.appendChild(centerText)
        div.appendChild(innerDiv)
    }
}

drawRollingDiv();