import React from "react";
import "./cards.css"

function Cards(){
    return<>
      <section className="container">
    <div className="row justify-content-center">
      <h4>Relative Experience</h4>

      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="./src/images/BasicStaticRouting.PNG" className="card-img-top" alt="Static Routing" />
          <div className="card-body">
            <h5 className="card-title">Packet Tracer Static Routing</h5>
            <p className="card-text">Configured a Frame Relay WAN with hub-and-spoke topology using Cisco Packet Tracer and Frame Relay encapsulation.</p>
            <a href="#" className="btn" id="packet_tracer">Packet Tracer File</a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="./src/images/TCP_Scanner.PNG" className="card-img-top" alt="TCP Scanner" />
          <div className="card-body">
            <h5 className="card-title">Python Network Scanner</h5>
            <p className="card-text">Python + Nmap tool for automated network scanning with interactive CLI and structured output for security teams.</p>
            <a href="#" className="btn" id="scanner">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="./src/images/FrameRelay_HubSpoke.PNG" className="card-img-top" alt="Frame Relay" />
          <div className="card-body">
            <h5 className="card-title">Hub-and-Spoke WAN Design</h5>
            <p className="card-text">Engineered a scalable hub-spoke model using Frame Relay, enabling centralized control across multiple branch networks.</p>
            <a href="#" className="btn" id="tracer2">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </section>

    
    </>
}

export default Cards;