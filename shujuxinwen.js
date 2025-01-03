import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

const dataSH = [
  [
    1,
    766.8,
    2837,
    125,
    0.82,
    34,
    1.4,
    '#最高法明确禁止以彩礼为名索取财物#',
    '“这落实不了的，不给就不结，你怎么办？”',
    '“没人会理这个法”',
    '“必须支持”'
  ],
  [
    2,
    2690.1,
    3886,
    78,
    0.86,
    45,
    7.1,
    '#彩礼和教育挂钩是否合理#',
    '“玷污教育公平”',
    '“用孩子作人质”',
    '“看来生育率还是太高了”'
  ],
  [
    2.5,
    1756.8,
    3319,
    84,
    1.09,
    73,
    5.6,
    '#低彩礼第一顺位择校为何引发争议#',
    '“这在制造新的不平等”',
    '“又一次刷新了我对江西的认知”',
    '“妈妈家收彩礼和孩子有什么关系”'
  ],
  [
    2.8,
    7830,
    10000,
    10000,
    1.28,
    68,
    5,
    '#低彩礼子女优先入学是否公平#',
    '“既然倡导低彩礼，这种正向激励没什么问题”',
    '“完全在剥削女性”',
    '“为移风易俗做的努力值得肯定”'
  ],
  [
    3,
    17000,
    37000,
    58000,
    1.07,
    55,
    42.7,
    '#彩礼是对女性的生育补偿吗#',
    '“和工伤补偿差不多，没有物化女性”',
    '“嫁妆和彩礼都是刚需，是小家庭的启动资金”',
    '“彩礼是社会对女性的要求和实际给女性报酬之间的差价”'
  ],
  [
    3.8,
    16000,
    58000,
    58000,
    1.07,
    55,
    26.1,
    '#江西农村彩礼涨到50万#',
    '“不要把自己的无能嫁祸给彩礼”',
    '“自己拿着50万多好，干嘛结婚”',
    '“替那些年轻女性悲哀，成了父母赚钱的工具”'
  ],
  [
    4.5,
    5863.9,
    19000,
    58000,
    1.07,
    55,
    9.7,
    '#彩礼纠纷致父子持刀杀害前亲家#',
    '“这还是个人的观念，不全是彩礼的原因”',
    '“彩礼和嫁妆是帮扶新家庭，不是一个家庭给另一个扶贫”',
    '“支持取消彩礼”'
  ],
  [
    6,
    7825.2,
    24000,
    58000,
    1.07,
    55,
    22,
    '#彩礼该以女方陪嫁形式返还小家庭吗#',
    '“与彩礼对应的还有嫁妆呢”',
    '“彩礼早期是男尊女卑歧视女性的象征”',
    '“当然应该返还给小家庭”'
  ],
  [
    8.8,
    742.2,
    944,
    944,
    1.07,
    55,
    1,
    '#宁夏一地招网格员零彩礼或低彩礼可加分#',
    '“婚姻这么私人的事和工作有什么关系”',
    '“怎么验证是零彩礼呢”',
    '“肯定男的支持，女的反对”'
  ],
  [
    8.1,
    20000,
    199000,
    114,
    1.07,
    55,
    222,
    '#结婚不要户口本或缓解天价彩礼现象#',
    '“户口本和彩礼没有任何关系”',
    '“竟然有人觉得年轻人不结婚是因为拿不到户口本”',
    '“女方出的嫁妆是一句不提”'
  ],
  [
    10,
    1720.5,
    2438,
    114,
    1.07,
    55,
    1,
    '#彩礼没有礼爱情何来爱#',
    '“嫁女儿不等于卖女儿”',
    '“现代婚姻本就是经济行为，谈何爱情”',
    '“这婚不结也罢”'
  ],
  [
    11,
    4670.8,
    14000,
    114,
    1.07,
    55,
    12.5,
    '#女子因父母要求加30万彩礼跳河轻生#',
    '“江西是这样的”',
    '“没想到21世纪了还有这种事”',
    '“这是真爱了”'
  ],
  [
    11.1,
    25000,
    120000,
    114,
    1.07,
    55,
    132.9,
    '#胖东来宣布员工结婚不允许要或付彩礼#',
    '“管得好宽”',
    '“可以倡导，不能强制”',
    '“不想干可以离职，双向选择挺好的”'
  ]
];
const schema = [
  { name: 'date', index: 0 },
  { name: 'AQIindex', index: 1, text: '阅读量' },
  { name: 'PM25', index: 2, text: '讨论量' },
  { name: 'PM10', index: 3, text: 'PM10' },
  { name: 'CO', index: 4, text: '一氧化碳（CO）' },
  { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
  { name: 'SO2', index: 6, text: '互动量' }
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
option = {
  color: ['rgb(159,32,17)', '#fec42c', '#80F1BE'],
  // legend: {
  //   top: 10,
  //   data: [ '上海'],
  //   textStyle: {
  //     fontSize: 16
  //   }
  // },
  grid: {
    left: '10%',
    right: 150,
    top: '30%',
    bottom: '10%'
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    formatter: function (param) {
      var value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '万' + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[6].text + '：' + value[6] + '万' + '<br>'
                + '网友声音：' + value[8] + '<br>'
                + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                + value[9] + '<br>'
                + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                + value[10];
    }
  },
  xAxis: {
    type: 'value',
    name: '月份',
    nameGap: 16,
    nameTextStyle: {
      fontSize: 16
    },
    max: 12,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: '阅读量（单位：万）',
    nameLocation: 'end',

    nameGap: 30,
    nameTextStyle: {
      fontSize: 16
    },
    splitLine: {
      show: false
    }
  },
  visualMap: [
    {
      left: 'right',
      top: '20%',
      dimension: 2,
      min: 0,
      max: 30000,
      itemWidth: 30,
      itemHeight: 120,
      precision: 0.1,
      text: ['圆形大小：讨论量'],
      textGap: 30,
      inRange: {
        symbolSize: [40, 120]
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
          color: ['#c23531']
        },
        outOfRange: {
          color: ['#999']
        }
      }
    },
    {
      left: 'right',
      bottom: '5%',
      dimension: 6,
      min: 0,
      max: 40,
      itemHeight: 120,
      text: ['明暗：互动量（单位：万）'],
      textGap: 30,
      inRange: {
        // opacity: [0.4, 1]
        colorLightness: [0.8, 0.3]
      },
      outOfRange: {
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
          color: ['#c23531']
        },
        outOfRange: {
          color: ['#999']
        }
      }
    }
  ],
  series: [
    {
      name: '上海',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataSH
    }
  ]
};

option && myChart.setOption(option);