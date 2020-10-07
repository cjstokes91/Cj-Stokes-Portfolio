import React from "react"
// import Link from "gatsby"
// import { BrowserRouter as Router, Route } from 'react-router-dom'

const Work = () => {
  return (
    <>
      <div>
        <h1>
          Work
      </h1>
      </div>
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
            <div>
              </div>
            </p>
            <div class="card__btn">
              <button>Read More...</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="app-two"> */}
      <div class="card-two">
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
            <div>
            </div>
          </p>
          <div class="card__btn">
            <button>Read More...</button>
          </div>
        </div>
      </div>
      {/* </div> */}
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