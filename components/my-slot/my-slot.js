// components/my-slot/my-slot.js
Component({
  // -----------  在使用该组件时传递的prop参数  -----------
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  // -----------  组件内部数据  -----------
  data: {
    num: 0
  },

  // -----------  该组件的一些配置相关的信息  -----------
  options: {
    // 设置为 true 表示 可以使用多个插槽
    multipleSlots: true,
    // 组件内部的样式隔离形式
    styleIsolation: 'apply-shared'
  },

  // -----------  使用该组件传递过来的一些样式类名  -----------
  externalClasses: [],

  // -----------  组件内部的方法  -----------
  methods: {
    sum() {}
  },
  // -----------  组件数据字段监听器，用于监听 properties 和 data 的变化  ----------- 
  observers: {
    // 它与 properties 当中的监视者不同，这个函数形参只会给最新的值
    num(newVal) {
      console.log(newVal)
    }
  },

  // -----------  组件的生命周期函数  -----------
  // 1. 在使用组件的页面的生命周期
  pageLifetimes: {
    show() {
      console.log('组件所在页面显示');
    },
    hide() {
      console.log('组件所在页面隐藏');
    },
    resize() {
      console.log('组件所在页面尺寸发送改变');
    },
  },

  // 2. 组件自己的生命周期
  lifetimes: {
    created() {
      console.log('组件被创建时');
    },
    attached() {
      console.log('组件实例进入页面节点树时执行');
    },
    ready() {
      console.log('组件在视图层布局完成');
    },
    moved() {
      console.log('组件被移动到另一个节点时');
    },
    detached() {
      console.log('组件被移除时');
    }
  }
})