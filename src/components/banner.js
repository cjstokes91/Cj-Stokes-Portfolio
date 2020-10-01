import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {
  const data = useStaticQuery(graphql`
        query {
          skullLogo: file(relativePath: { eq: "skullLogo.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          cuties: file(relativePath: { eq: "cuties.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              } 
            }
          }
          solo: file(relativePath: { eq: "solo.png" }) {
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
    <div className="banner">
      <div className='container'>
        <div className="row">
          {/* <div className='side-image left'>
            <Img fluid={data.cuties.childImageSharp.fluid} />
          </div> */}
          <div className='main-text'>CJ STOKES</div>
          <div className='main-image'>
            <Img fluid={data.skullLogo.childImageSharp.fluid} />
          </div>
          <div className='side-image right'>
            <Img fluid={data.solo.childImageSharp.fluid} />
          </div>
        </div>
        <div className='scroll'>
          <span>Scroll Down</span>
        </div>
      </div>
      <div className='fixed-misc'>
        Software Developer
            </div>
    </div>
  )
}

export default Banner; 