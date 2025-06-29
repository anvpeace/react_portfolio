import React, { use } from "react";
import {useNavigate} from 'react-router-dom'

function Skills(){
    const navigate = useNavigate();
    return <>
    
        <section className="text-center py-4">
        <img id="headshot" src="\src\pages\Home\headshot.jpg" alt="Headshot" className="img-fluid rounded-circle shadow mb-3" />
        <h2 className="fw-bold" id="title1">Technical Background</h2>
      </section>

      <section className="container py-3">
        <div className="row g-3 justify-content-center">
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Networking" className="btn btn-primary w-100" onClick={()=> navigate("/networking")}>Networking</button>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Ethical-Hacking" className="btn btn-primary w-100" onClick={()=> navigate("/ethical")} >Ethical Hacking</button>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Security" className="btn btn-primary w-100" onClick={() => navigate("/infoSec") }>InfoSec</button>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Programming" className="btn btn-primary w-100">Programming</button>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Certificates" className="btn btn-primary w-100">Certificates</button>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <button id="Projects" className="btn btn-primary w-100">Projects</button>
          </div>
        </div>
      </section>
    </>
}

export default Skills;