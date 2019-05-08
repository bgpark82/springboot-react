import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Posts extends Component {

state={
    posts:[]
}

componentWillMount=async()=>{
    const req = await axios.get('/posts')
    const res = await req.data
    this.setState({
        posts:res
    })
    console.log(res);
}

  render() {
    return (
      <div className='portfolio-list'>
        <h1>Projects</h1>
        <p>지금까지의 프로젝트</p>
        <hr className='portfolio-list-hr'/>
        {this.state.posts.map((item)=>{
            return(
                <div key={item.id}>
                  <Link to={{
                    pathname:`/portfolio/${item.id}`,
                    state:{
                      id:item.id,
                      title:item.title, 
                      content:item.content,
                      author:item.author,
                    }}}>
                    <h2><strong>{item.title}</strong></h2>
                    <p>{item.content}</p>
                    <hr/>
                  </Link>    
                </div>
            )
        })}
        
      </div>
    )
  }
}
