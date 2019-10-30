import React from 'react';
// 引入组件
import ReactEcharts from 'echarts-for-react';

class Examples extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color1: props.props?props.props.data1:'',
      datas:props.props?props.props.data2:'0'
    };
  }
  render() {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}个"
      },
      series: [{
        type: 'pie',
        radius: ['0', '55%'],
        color:[this.state.color1[0], this.state.color1[1],this.state.color1[2],this.state.color1[3],this.state.color1[4],this.state.color1[5],this.state.color1[6]],
        data: this.state.datas?this.state.datas.map((item, index)=> {
          return {
            value: item.value||0,
            name: `期限${item.name}天标` 
          }
        }):'',
        selectedMode: 'single' 
      }]
    };
    return (<ReactEcharts option={option} />);
  }
}

export default Examples