import React from 'react'
import '../css/app/nav.css'

export default function Profile() {
  return (
    
    <div className="nav-profile">
        <img src="./img/tistory.png" alt="" className="nav-profile"/>
        <section>박병길</section>
        <p>bgpark82@gmail.com</p>
            <i class="fab fa-git profile-space"></i>
            <i class="fab fa-linkedin-in profile-space"></i>
            <i class="far fa-comment"></i>
    </div>  
  )
}

