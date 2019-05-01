import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import Post from './Component/Posts'

export default class App extends Component {  

render() {  
  return (  
    <div>  
      <h1>hello world</h1>
      <Post></Post>
    </div>  
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))