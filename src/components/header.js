import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">In Development</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/About">About</Link>
            <Link to="/Work">Work</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header >
)
export default Header
