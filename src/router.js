import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import LifeCycle15 from './components/lifeCycle15/parent'
const RouteConfig = () => {
   
    return (
        <BrowserRouter>
            <Route path="/lifecycle" component={LifeCycle15}/>
        </BrowserRouter>
    )
}
export default RouteConfig
