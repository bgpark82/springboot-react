import React, { Component } from 'react'
import Post from './Posts'
import Profile from './Profile'
import '../css/app/main.css'
import '../css/app/portfolio-list.css'

export default class Home extends Component {
  render() {
    return (
      
      <div className="container">  
        <div className="row">
            <div className="col-sm-3 container nav-container">
            <Profile></Profile>   
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
