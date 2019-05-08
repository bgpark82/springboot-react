import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './Component/Home'
import Portfolio from './Component/Portfolio'

export default class App extends Component {  

render() {  
  return (  
    <BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio/:id" component={Portfolio}/>
        </Switch>
      </div>
    </BrowserRouter>
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))