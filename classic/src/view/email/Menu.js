Ext.define('Admin.view.email.Menu', {
  extend: 'Ext.menu.Menu',

  alias: 'widget.emailmenu',

  viewModel: {
    type: 'emailmenu'
  },

  title: 'Email',

  iconCls: 'x-fa fa-inbox',

  floating: false,

  items: [
    //如果没有指定xtype，则为panel
    {
      //用来做路由跳转的
      routeId: 'emailcompose', //xtype and used for url routing
      //传递给url的参数
      params: {
        openWindow: true, // Let the controller know that we want this component in the window,
        targetCfg: {
          //put any extra configs for your view here
        },
        windowCfg: {
          // Any configs that you would like to apply for window popup goes here
          title: 'Compose Message'
        }
      },
      iconCls: 'x-fa fa-edit',
      text: 'Compose'
    },
    {
      iconCls: 'x-fa fa-inbox',
      text: 'Inbox'
    },
    {
      routeId: '',
      iconCls: 'x-fa fa-check-circle',
      text: 'Sent Mail'
    },
    {
      routeId: '',
      iconCls: 'x-fa fa-exclamation-circle',
      text: 'Spam'
    },
    {
      routeId: '',
      iconCls: 'x-fa fa-trash-alt',
      text: 'Trash'
    }
  ]
});
