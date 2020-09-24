import React from "react"
import '../styles/styles.scss'

//Import Components 
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <About />
    <Work />
    <Contact />

  </div>

)

export default IndexPage
