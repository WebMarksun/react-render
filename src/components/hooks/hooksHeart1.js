/* 
    hooks坑1:
        使用useState时候，使用push，pop，splice等直接更改数组对象会出现问题，
        demo中使用push直接更改数组无法获取到新值，应该采用析构方式，但是在class里面不会有这个问题
 */

 // hooks的方式
function Indicatorfilter() {
    let [num,setNums] = useState([0,1,2,3])
    const test = () => {
        // 这里坑是直接采用push去更新num，setNums(num)是无法更新num的，必须使用num = [...num ,1]
        num.push(1)
        // num = [...num ,1]
        setNums(num)
    }
    return (
        <div className='filter'>
            <div onClick={test}>测试</div>
            <div>
                {num.map((item,index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    )
}

// class的方式
class Indicatorfilter1 extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            nums:[1,2,3]
        }
        this.test = this.test.bind(this)
    }

    test(){
         // class采用同样的方式是没有问题的
        this.state.nums.push(1)
        this.setState({
            nums: this.state.nums
        })
    }

    render(){
        let {nums} = this.state
        return(
            <div>
                <div onClick={this.test}>测试</div>
                    <div>
                        {nums.map((item,index) => (
                            <div key={index}>{item}</div>
                        ))}
                    </div>
            </div>
                       
        )
    }
}

export default Indicatorfilter
