export default {
  menus: [    // 菜单相关路由
    { key: '/app/home', title: '首页', icon: 'home', component: 'Home' },
    {
      key: 'test', title: 'test', icon: 'setting',
      subs: [
        {
          key: '/app/test',
          title: 'test',
          component: 'Test',
          subs: [
            {
              key: '/app/test/threePage',
              title: '3级子分类',
              component: 'Test',
              disable: 'true',
              subs: [
                {
                  key: '/app/test/threePage/fourPage',
                  title: '4级子分类',
                  component: 'Test',
                  disable: 'true'
                }
              ]
            },
          ]
        },
        {
          key: '/app/test/drag',
          title: 'drag',
          component: 'Drag'
        }
      ]
    },
    {
      key: 'management', title: '门店管理', icon: 'setting',
      subs: [
        {
          key: '/app/management', title: '门店骑士管理', component: 'Management',
          subs: [
            { key: '/app/management/add', title: '添加骑士', component: 'AddKnight' },
          ]
        }
      ],
    },
    {
      key: 'intelligent',
      title: '智能调度',
      icon: 'line-chart',
      subs: [
        {
          key: '/app/intelligent', title: '人工调度', component: 'Intelligent',
          subs: [
            { key: '/app/intelligent/details', title: '详情页', component: 'Details' },
          ]
        }
      ]
    }
  ],
  others: [
    { key: '/login', title: '登录', icon: 'user', component: 'Login' },
    { key: '/404', title: '404', icon: 'warning', component: 'NotFound' },
  ]  // 非菜单相关路由
}