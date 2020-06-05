// 介绍useState使用时候的坑，以及如何解决
/*
* 1. 使用push，pop，splice等直接更改数组对象的坑，demo中使用push直接更改数组会报错
* 2. useState返回的state只会在组件第一次初始化的时候被计算出来,想动态变化必须使用useEffect
* 3. 不要在循环，条件或嵌套函数中调用Hook，必须始终在React函数的顶层使用Hook。
*/
import React,{useState,useEffect} from 'react'
var a = 1
const Child = (props) => {
    const [num,setNum] = useState(props.counts)
    useEffect(()=>{
        setNum(props.counts)
    }, [props.counts])
    return(
        <div>
            {num.map((count) => (
                <div key={count}>{count}</div>
            ))}
        </div>
    )
}
const UseState = () => {
    const [counts, setCounts] = useState([1, 2])
    const [state,setState] = useState(0)
    const currentState = React.useRef(state)
    const handleAdd = () => {
        const randomCount = Math.round(Math.random()*100)
        // 错误使用
        //setCounts(counts.push(randomCount))
        // 正确用法是采用析构
        setCounts([
            ...counts,
            randomCount
        ])
    }
    const handleClick = () => {
        setState(state + 1)
        setTimeout(() => {
          //console.log(state)
          console.log(currentState.current)
        }, 2000)
      }
  return (
    <div>
      {counts.map((count) => (
        <div key={count}>{count}</div>
      ))}
      <button onClick={handleAdd}>增加</button>
      <Child  counts={counts}/>
      <button onClick={handleClick}>增加</button>
    </div>
  );
}
export default UseState