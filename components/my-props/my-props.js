Component({
  /**
   * 组件的属性列表
   * properties  这个就是用于 定义 传递过来的 props 参数的
   */
  properties: {
    // 第一种定义方式
    // title: String
    // 第二种定义方式
    title: {
      type: String, // 类型
      value: '我是默认标题', // 默认值

      // 可以为该 prop 添加监听 当 传递过来的 prop 发生改变的时候会触发
      // 第一个形参为  改变之后的值   第二个形参为  改变之前的值
      observer: (newTitle, oldTitle) => {
        console.log(newTitle, oldTitle);
      }
    }
  },
  // 接受传递过来的 class  也就是  样式类名
  externalClasses: ['titleclass']
})