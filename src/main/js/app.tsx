import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import Post from './Component/Posts'

export default class App extends Component {  

render() {  
  return (  
    <div className="container">  
        <div className="row">
            <div className="col-sm-3">
              this is the left side 
            </div>
            <div className="col-sm-9">	
              <h1>this is the right side</h1>
              <Post></Post>
            </div>
        </div>
    </div>  
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))