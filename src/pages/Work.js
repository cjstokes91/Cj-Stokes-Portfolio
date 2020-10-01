import React from "react"
import Img from "gatsby-image"
import Link from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
            <h1>work</h1>
            <div className="images">
                <div className="top-right">
                    <Img fluid={data.bar.childImageSharp.fluid} />
                </div>
                <div className="image2">
                    <div className="top-left">
                        <Img fluid={data.fridgeDoor.childImageSharp.fluid} />
                    </div>
                </div>
                {/* <div className="bottom-left">
                    <Img fluid={data.turtles.childImageSharp.fluid} />
                </div>
                <div className="bottom-right">
                    <Img fluid={data.fridgeDoor.childImageSharp.fluid} />
                </div> */}
            </div>
        </>
    )
}

export default Work;
