import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default () => {
  Vue.use(VueAnalytics, {
    id: 'UA-158090632-1'
  })
}
