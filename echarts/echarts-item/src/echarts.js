import Vue from 'vue'
import echarts from 'echarts/lib/echarts'

// chart为线图
import 'echarts/lib/chart/line' // 折线图
import 'echarts/lib/chart/bar' // 柱状图
import 'echarts/lib/chart/pie' // 饼状图

// component为组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'

Vue.prototype.$echarts = echarts
