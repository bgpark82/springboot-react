import React, { Component } from 'react'  
import ReactDOM from 'react-dom'
import Post from './Component/Posts'
import '../css/app/nav.css'
import '../css/app/main.css'
import '../css/app/portfolio.css'

export default class App extends Component {  

render() {  
  return (  
    <div className="container">  
        <div className="row">
            <div className="col-sm-3 container nav-container">
              <div className="nav-profile">
                <img src="./img/tistory.png" alt="" className="nav-profile"/>
                <section>박병길</section>
                <p>bgpark82@gmail.com</p>
              </div>   
              
              

            </div>
            <div className="col-sm-9 main-container">	
              <h1>Web Developer</h1>
              <h2>어제보다 더 나은, 웹 개발자 </h2>
              <h2><strong>박병길</strong>입니다.</h2>
              <br/><br/><br/>
              
              <Post></Post>
            </div>
        </div>
    </div>  
  )  
}  
}  

ReactDOM.render(<App />,document.getElementById('root'))