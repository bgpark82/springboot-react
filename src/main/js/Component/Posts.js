import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class Posts extends Component {

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



//https://www.zerocho.com/category/HTML&DOM/post/599d2fb635814200189fe1a7

  render() {
    return (
      <div className='portfolio-list'>
        <h1>Projects</h1>
        <p>지금까지의 프로젝트</p>
        <button onClick={this.handleClick}>click</button>
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

export default withRouter(Posts)