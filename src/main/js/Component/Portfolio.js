import React, { Component } from 'react'
import '../css/app/portfolio.css'

export default class Portfolio extends Component {

  renderMessage=(id)=>{
       
  }

  rollBack=()=>{
    this.props.history.push('/')
  }

  render() {
    const {id,title, content, author} = this.props.location.state
    return (
      <div className="container portfolio">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-9">
            <h1>{title}</h1>
            <p>{content}</p>
            <br/><br/>
            <a href={author}>깃 허브로 가기😆</a><br/><br/>
            <span onClick={this.rollBack} > 뒤로가기 </span> 
          </div>
        </div>
        
      </div>
    )
  }
}
