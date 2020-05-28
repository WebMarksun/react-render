import React from 'react'

// react 16之前的生命周期函数
export default class Child extends React.Component{
    constructor(props){
        super(props)
		console.log('01子构造函数')	
		this.state = {
			childCount:props.count
		}
    }
    //组件将要挂载时候触发的生命周期函数
	componentWillMount(){
		console.log('02子组件将要挂载')
	}
	//组件挂载完成时候触发的生命周期函数
	componentDidMount(){
		console.log('04子组件完成挂载')
    }
    
    //是否要更新数据，如果返回true才会更新数据
	shouldComponentUpdate(nextProps,nextState){
		console.log('01子组件是否要更新数据')
		if(this.props.count === nextProps.count){
			return false
		}
		return true
	}
    
    //父组件中改变了props传值时触发的函数
    componentWillReceiveProps(nextProps){
		console.log('父组件传递的值')
		if(this.props.count !== nextProps.count){
			console.log(this.props.count)
			this.setState({
				childCount: nextProps.count
			})
		}
        
    }
    render(){
        console.log('03子数据渲染render')
        return (
			<div>{this.state.childCount}</div>
        )
    }
}
