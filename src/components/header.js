import React from "react"
import { Link } from "gatsby"

const Header = () => (
  (
    <nav>
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">In Development</Link>
            </div>
            <div className="icon-one">
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
    </nav>
  )
)
export default Header;

// const Header = () => {
//   return (
//     <header>
//       <div className="container">
//         <div className="inner-header">
//           <div className="logo">
//             <Link to="/">In Development</Link>
//           </div>
//           <div className="icon-one">
//           </div>
//           <div className="navigation">
//             <nav>
//               <Link to="/About">About</Link>
//               <Link to="/Work">Work</Link>
//               <Link to="/Contact">Contact</Link>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header >
//   )
// }
// export default Header;
