import React from 'react'
import '../css/app/nav.css'


export default function Profile() {
  return (
    
    <div className="nav-profile">
        <img src="./img/tistory.png" alt="" className="nav-profile"/>
        <section>박병길</section>
        <p>bgpark82@gmail.com</p>
            <a href="https://github.com/pop8682/"><i className="fab fa-git profile-space"></i></a>
            <a href="https://www.linkedin.com/in/byeonggilpark/"><i className="fab fa-linkedin-in profile-space"></i></a>
            <a href="https://bgpark.tistory.com/"><i className="far fa-comment"></i></a>
    </div>  
  )
}

