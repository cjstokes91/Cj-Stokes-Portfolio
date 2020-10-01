import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'


const About = () => {
  const data = useStaticQuery(graphql`
        query {
          hike: file(relativePath: { eq: "hike.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          mountain: file(relativePath: { eq: "mountain.png" }) {
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
    <div className="about">
      <div className='container'>
        <div className="inner-about">
          <div className="content">
            <h3>Who I am</h3>
            <p> I am a full stack developer from Los Angeles with a passion for creating projects that are rooted in bringing equality to all. When i am not programming , you can find me usually surfing , exercising or researching a new technology.</p>
            <div className="btn-row-top">
              <Link to="/work">View Work</Link>
              <div>
                <Link to="/">Return to main page</Link>
              </div>
            </div>
            <div className="btn-row-bottom">
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.hike.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.mountain.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="black-box">
        </div>
        <div className="black-box overlay">
        </div>
      </div>
    </div>
  )
}

export default About;
