Ext.define('Admin.view.charts.Line', {
  extend: 'Admin.view.charts.ChartBase',
  xtype: 'chartslinepanel',

  requires: [
    'Ext.chart.CartesianChart',
    'Ext.chart.axis.Category',
    'Ext.chart.axis.Numeric',
    'Ext.chart.interactions.PanZoom',
    'Ext.chart.series.Line'

  ],

  title: 'Line Chart',
  iconCls: 'x-fa fa-line-chart',

  items: [{
    xtype: 'cartesian',
    colors: [
      '#6aa5db',
      '#94ae0a'
    ],
    bind: '{lineData}',
    axes: [{
      type: 'category',
      fields: [
        'xvalue'
      ],
      hidden: true,
      position: 'bottom'
    }, {
      type: 'numeric',
      fields: [
        'yvalue',
        'y1value',
        'y2value',
        'y3value',
        'y4value',
        'y5value'
      ],
      hidden: true,
      position: 'left'
    }],
    series: [{
      type: 'line',
      xField: 'xvalue',
      yField: [
        'yvalue'
      ]
    }, {
      type: 'line',
      xField: 'xvalue',
      yField: [
        'y1value'
      ]
    }],
    platformConfig: {
      phone: {
        // On a phone the whole view becomes a vertical strip of charts,
        // which makes it impossible to scroll the view if touch action
        // started on a chart. So we use a custom touchAction config.
        touchAction: {
          panX: true,
          panY: true
        }
      },
      '!phone': {
        interactions: {
          type: 'panzoom',
          zoomOnPanGesture: true
        }
      }
    }
  }]
});
