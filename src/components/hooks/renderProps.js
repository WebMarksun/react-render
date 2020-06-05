/* 
    Mouse组件提供“可变数据源”：鼠标位置不断变化 

*/

// 数据源可变基础组件
import React from 'react'
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          {this.props.render(this.state)}
        </div>
      );
    }
  }


  // UI 组件
  class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="https://dimg04.c-ctrip.com/images/300d0f0000007du6f6DC5_C_230_320.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }

  // 在通用的基础数据源组件里面使用UI组件
  export default class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }