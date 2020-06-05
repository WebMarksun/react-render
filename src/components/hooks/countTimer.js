import React from 'react'
import { useState,useRef,useEffect } from 'react'

// 错误的写法
// const CountTimer = () => {
//     let [count, setCount] = useState(0)
//     let CountTimer
//     useEffect(() => {
//         setInterval(() => {
//             setCount(count+1)   
//         })
//         return () => window.clearInterval(CountTimer)
//     }, [count])
//     return (
//         <React.Fragment>
//             <div> {count} </div>
//         </React.Fragment>
//     )
// }



//正确的写法
const CountTimer = () => {
    let [count, setCount] = useState(0)
    let intervalCb = useRef(null)
    let CountTimer
    useEffect(() => {
        intervalCb.current = () => {
            setCount(count+1)   
        }
    }, [count])

    useEffect(() => {
        function itvFn() {
            intervalCb.current()
        }
        CountTimer = window.setInterval(itvFn, 1000)
        return () => window.clearInterval(CountTimer)
    }, [])

    const handleStop = () => {
        window.clearInterval(CountTimer)
    }
    return (
        <React.Fragment>
            <div >{count}</div>
            <div onClick={() => {handleStop()}}>停止计时</div>
        </React.Fragment>
    )
}

export default CountTimer