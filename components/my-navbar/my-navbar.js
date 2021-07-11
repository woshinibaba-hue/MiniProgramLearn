// components/my-navtab/my-navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 定义 props 参数
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    toggle(e) {
      // 1. 获取传递过来的索引值  通过 事件对象获取
      console.log(e.currentTarget.dataset.index);
      const {index} = e.currentTarget.dataset
      this.setData({
        currentIndex:index
      })
      // 2. 向外发射事件 改变页面内容
      this.triggerEvent('toggle', {index})
    }
  }
})
