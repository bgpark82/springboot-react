import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Component/Home'
import Portfolio from './Component/Portfolio'

export default class App extends Component {  

render() {  
  return (  
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio/:id" component={Portfolio}/>
        </Switch>
    </Router>
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))