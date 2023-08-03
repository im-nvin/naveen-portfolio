import React from 'react'
import Codeimg from "../../images/code.jpg"

import "./about.css"
export const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            {/* this one is for background effect for image  */}
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Codeimg} alt="" className="a-img" />
            </div>
       </div>
        <div className="a-right">
          <h1 className="a-title">About me</h1>
          <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga veniam doloremque?</p>
          <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio eius quae alias, veritatis similique rem iste architecto esse quasi voluptate accusantium enim velit voluptatum numquam consequuntur voluptatem animi molestias quas, odit odio. Iure, ad totam tenetur excepturi voluptatem commodi.</p>
        </div>
     </div>
  )
}
