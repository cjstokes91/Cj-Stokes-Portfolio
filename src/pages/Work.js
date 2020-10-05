import React from "react"
// import Img from "gatsby-image"
// import Link from "gatsby"
// import { Link } from 'react-router-dom'
import { useStaticQuery, graphql } from "gatsby"
// import { BrowserRouter as Router, Route } from 'react-router-dom'

const Work = () => {
  const data = useStaticQuery(graphql`
        query {
          foodivity: file(relativePath: { eq: "foodivity.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          fridgeDoor: file(relativePath: { eq: "fridgeDoor.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          bar: file(relativePath: { eq: "bar.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          turtles: file(relativePath: { eq: "turtles.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
        }
      `)
  console.log(data);
  return (
    <>
      <div class="app">
        <div class="card">
          <div class="card__visual">
            <div class="card__likeBtn">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div class="card__texts">
            <h1 class="title">Sky's Falling</h1>
            <p class="subtitle">by : Jane Doe</p>
            <div class="line"></div>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
              rerum laudantium soluta ipsam voluptatum, ipsa quae architecto.
              Molestias eveniet repudiandae facilis officiis, voluptatibus illo
              distinctio culpa esse inventore iusto architecto.
          </p>
            <div class="card__btn">
              {/* <Link to="https://github.com/cjstokes91/bartending-bible"> */}
              <button>Read More...</button>
              {/* </Link> */}
            </div>
            <div class="card__socials">
              <h2 class="title">Share on socials :</h2>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work;

/* <h1>work</h1>
<div className="images">
  <div className="top-right-image">
    <Img fluid={data.bar.childImageSharp.fluid} />
  </div>
  <div className="image2">
    <div className="top-left-image">
      <Img fluid={data.fridgeDoor.childImageSharp.fluid} />
    </div>
  </div>
  <div className="bottom-left-image">
    <Img fluid={data.turtles.childImageSharp.fluid} />
  </div>
  <div className="bottom-right-image">
    <Img fluid={data.fridgeDoor.childImageSharp.fluid} />
  </div>
</div> */