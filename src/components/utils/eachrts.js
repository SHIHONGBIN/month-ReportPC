import React from 'react';
// 引入组件
import ReactEcharts from 'echarts-for-react';

class Examples extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color1: props.props?props.props.data1[0]:'',
      color2: props.props?props.props.data1[1]:'',
      data1Percent: props.props?props.props.data2:'',
      data2Percent: props.props?props.props.data3:'',
      data1text: props.props?props.props.data3.replace('%', '') * 1:'',
      data2text: props.props?props.props.data2.replace('%', '') * 1:''
    };
  }
  render() {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {d}%"
      },
      series: [{
        label: {
          show: false
        },
        type: 'pie',
        radius: ['50%', '90%'],
        data: [{
          value: this.state.data2text,
          name: '自动出借'
        },
        {
          value: this.state.data1text,
          name: '手动出借'
        },
        ],
        color: [this.state.color1, this.state.color2]
      },
      ], selectedMode: 'single'
    };
    return (<ReactEcharts option={option} />);
  }
}

export default Examples