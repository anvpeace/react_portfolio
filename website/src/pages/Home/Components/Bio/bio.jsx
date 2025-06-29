import React from "react";

export default function Bio(){
    return <>
    <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold" id="title2">About Me</h2>
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
    </>
}