import React from "react";
import Nav from "../../components/Navbar/nav";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import {useNavigate} from 'react-router-dom'
import "./home.css"
import Skills from "./Components/Skills/skills";
import Bio from "./Components/Bio/bio";
// import InfoSec from "../InfoSec/infoSec";

const Home = () =>{
  const navigate = useNavigate();
    return <>
  <Nav/>
  <Header/>
  <Skills/>
  <Bio/>
  <Footer/>
    
    </>

};

export default Home;