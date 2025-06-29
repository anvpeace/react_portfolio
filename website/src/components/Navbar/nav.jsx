import React from "react";
import {useNavigate} from 'react-router-dom'

import "./nav.css"

function Nav (){
    const navigate = useNavigate();

   return <>
     <nav className="navbar navbar-expand-lg shadow-sm">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold fs-4" href="#" onClick={()=> navigate("/")}>McKenna C. Peace</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-link" href="https://www.linkedin.com/in/mcpeace072035" target="_blank">LinkedIn</a>
          <a className="nav-link" href="https://github.com/anvpeace" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </nav>
   
   </> 
}

export default Nav;