import React from "react";
import Nav from "../../components/Navbar/nav";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import {useNavigate} from 'react-router-dom'
import "./home.css"
import InfoSec from "../InfoSec/infoSec";

const Home = () =>{
  const navigate = useNavigate();
    return <>
  <Nav/>
      <Header/>

      <section className="text-center py-4">
        <img id="headshot" src="\src\pages\Home\headshot.jpg" alt="Headshot" className="img-fluid rounded-circle shadow mb-3" />
        <h2 className="fw-bold">Technical Background</h2>
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

      <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold">About Me</h2>
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">
              <p>Hi, I’m a cybersecurity student pursuing my AAS degree with a 3.7 GPA, as well as an active member in PTK Honors Chapter. As an aspiring cybersecurity professional, I have a passion for protecting digital systems through network defense and secure coding.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">
              <p>I’m skilled in network configuration, vulnerability scanning, firewall management, and threat detection using tools like Wireshark, Nmap, Metasploit, Burp Suite, and Snort.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">
              <p>I specialize in secure software development and hold a Full-Stack Web Development Certificate from Columbia University. I build secure, scalable apps with Python, Java, C++, JavaScript, and the MERN stack.</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card p-4 h-100">
              <p>I'm trained in access control models (RBAC, DAC, MAC), encryption (AES, RSA), hashing (SHA-256, bcrypt), and frameworks like NIST. I’m also preparing for the CompTIA Security+ certification.</p>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-4 h-100">
              <p>With a developer’s precision and a security-first mindset, I’m seeking internship or entry-level roles where I can help organizations build strong, secure systems and grow as a cybersecurity professional.</p>
            </div>
          </div>
        </div>
      </section>
  <Footer/>
    
    </>

};

export default Home;