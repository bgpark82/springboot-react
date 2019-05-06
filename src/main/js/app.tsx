import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import Post from './Component/Posts'

export default class App extends Component {  

render() {  
  return (  
    <div className="container">  
        <div className="row">
            <div className="col-sm-3">
              사진<br/>
              이름<br/>
              자기소개<br/>
              스택<br/>
              프로젝트<br/>
              SNS주소<br/>

            </div>
            <div className="col-sm-9">	
              <h1>자기소개</h1>
              <h1>스택</h1>
              <h1>프로젝트</h1>
              
              <Post></Post>
            </div>
        </div>
    </div>  
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))