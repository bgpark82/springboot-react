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
      <div>
        {this.state.posts.map((item)=>{
            return(
                <div key={item.id}>
                    <p><strong>{item.title}</strong></p>
                    <p>{item.content}</p>
                    <p>{item.createdDate}</p>
                </div>
            )
        })}
      </div>
    )
  }
}
