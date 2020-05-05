<template>
  <div id="line-echarts">折线</div>
</template>

<script>
export default {
  data () {
    return {
      options: {}
    }
  },

  components: {},

  computed: {},

  methods: {
    initEcharts () {
      console.log('this', this)
      console.log('ec', this.$echarts)
      let myChart = this.$echarts.init(document.querySelector('#line-echarts'))
      let options = {
        title: {
          text: '折线图'
        },
        legend: {
          data: ['测试', '开发']
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              bacbackgroundColor: '#6a7985'
            }
          }
        },
        series: [
          {
            name: '测试',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
            areaStyle: {}
          },
          {
            name: '开发',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410],
            areaStyle: {
              normal: {
                color: 'yellow' //折线区域颜色
              }
            },
            itemStyle: {
              normal: {
                color: 'red', // 折线点的颜色
                lineStyle: { // 折线颜色
                  color: 'blue'
                }
              }
            }
          }
        ]
      }
      console.log('options', this.options)
      myChart.setOption(options)
      console.log('myChart', myChart)
    }
  },
  mounted () {
    this.initEcharts()
  }
}

</script>
<style lang='scss' scoped>
  #line-echarts {
    width: 500px;
    height: 300px;
  }
</style>
