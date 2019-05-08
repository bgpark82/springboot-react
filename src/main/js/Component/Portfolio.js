import React, { Component } from 'react'
import '../css/app/portfolio.css'

export default class Portfolio extends Component {

  renderMessage=(id)=>{
       
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
            <a href={author}>깃 허브로 가기😆</a>
          </div>
        </div>
        
      </div>
    )
  }
}
