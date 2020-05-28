import React from 'react'
import Child from './child'
// react 16之前的生命周期函数
export default class Parent extends React.Component{
    constructor(){
        super()
		console.log('01父类构造函数')
		this.state = {
			count:1,
			num:1
		}	
    }
    //组件将要挂载时候触发的生命周期函数
	componentWillMount(){
		console.log('02父组件将要挂载')
	}
	//组件挂载完成时候触发的生命周期函数
	componentDidMount(){
		console.log('04父组件完成挂载')
    }
    
    //是否要更新数据，如果返回true才会更新数据
	shouldComponentUpdate(nextProps,nextState){
		console.log('01父组件是否要更新数据')
		return true;				
	}
	
	handleClick = (type) =>{
		if(type === 'count'){
			this.setState((state,props) => { 
				return {
					count:state.count+1
				}
			})
		}
		if(type === 'num'){
			this.setState((state,props) => { 
				return {
					num:state.num+1
				}
			})
		}
		
	}
    
    render(){
        console.log('03父类数据渲染render')
        return (
            <div>
				<div onClick={() => this.handleClick('count')}>点我count{this.state.count}</div>
				<div onClick={() => this.handleClick('num')}>点我num{this.state.num}</div>
				<Child count={this.state.count}></Child>
			</div>
        )
    }
}


/**
 *  正常执行: constructor => componentWillMount => render => componentDidMount
 *  数据更新：
 *      1. componentWillReceiveProps：父组件中改变了props传值时触发的函数
 * 
 * 
 */