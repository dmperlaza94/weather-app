import React from 'react'
import cloud from "../images/cloud.png"

const header = () => {
    return (
       <nav className="navbar bg-primary">
           <div className="container">
               <img className="rounded-circle" src={cloud} alt="" width="35" height="30" />
               <a className="text-dark navbar-brand ">  Hello weather</a>
           </div>
       </nav>
    )
}

export default header
