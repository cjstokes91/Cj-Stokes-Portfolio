import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
        query {
          darla: file(relativePath: { eq: "darla.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          jeep: file(relativePath: { eq: "jeep.png" }) {
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
    <div className="about-blurb">
      <div className='container'>
        <div className="inner-blurb">
        </div>
        <div className="content">
          <h3>Ability to build</h3>
          <p> I am a full stack developer from Los Angeles with a passion for creating projects that are rooted in bringing equality to all. When i am not programming , you can find me usually surfing , exercising or researching a new technology.</p>
          <div className="btn-row">
            <Link to="/work">View Work</Link>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb; 