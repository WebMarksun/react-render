import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import LifeCycle15 from './components/lifeCycle15/parent'
import MouseTracker from './components/hooks/renderProps'
import HookTest from './components/hooks/hooks'
import UseState from './components/hooks/hookCase.js/useState'
import Count from './components/hooks/countTimer'
const RouteConfig = () => {
   
    return (
        <BrowserRouter>
            <Route path="/lifecycle" component={LifeCycle15}/>
            <Route path='/hooks/MouseTracker' component={MouseTracker}/>
            <Route path='/hooks/hooktest' component={HookTest}/>
            <Route path='/hooks/hookcase/usestate' component={UseState}/>
            <Route path='/hooks/count' component={Count}/>
        </BrowserRouter>
    )
}
export default RouteConfig
