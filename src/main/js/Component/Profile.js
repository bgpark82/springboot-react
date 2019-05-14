import React from 'react'
import '../css/app/nav.css'

export default function Profile() {
  return (
    
    <div className="nav-profile">
        <img src="./img/tistory.png" alt="" className="nav-profile"/>
        <section>박병길</section>
        <p>bgpark82@gmail.com</p>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"><i class="fab fa-git"></i></div>
            <div className="col-sm-4"><i class="fab fa-linkedin-in"></i></div>
            <div className="col-sm-4"><i class="far fa-comment"></i></div>
          </div>
        </div>
        
    </div>  
  )
}

