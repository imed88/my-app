import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
export const Routes=()=>{
return(
    <Router>
        <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/contact'><Contact/></Route>
        <Route exact path='/nopage'><NoPage/></Route>
        </Switch>
    </Router>
)
}