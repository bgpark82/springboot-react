import React, { Component } from 'react'
import axios from 'axios'

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
}

  render() {
    return (
      <div className='portfolio'>
        <h1>Projects</h1>
        <span>지금까지의 프로젝트</span>
        <hr/>
        {this.state.posts.map((item)=>{
            return(
                <div key={item.id}>
                    <h2><strong>{item.title}</strong></h2>
                    <p>{item.content}</p>
                    <hr/>
                </div>
            )
        })}
      </div>
    )
  }
}
