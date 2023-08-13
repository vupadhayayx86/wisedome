import React from 'react'
import logoimage from "./assets/newlogodark2.png"

const App = () => {
  return (
    <div className="container">
      <div className="content">
      <nav>
        <div className="logo">
          <img src={logoimage} alt="" />
          <h3>WISEDOME</h3>
          <p>BE WISE WITH WONDERS</p>
        </div>
        <div className="navitems">
          <ul>
            <li>ART</li>
            <li>SCIENCE</li>
            <li>TECHNOLOGY</li>
            <li>MUSIC</li>
            <li>FOOD</li>
            <li>CINEMA</li>
            <li>LOGIN</li>
            <li>WRITE</li>
          </ul>
        </div>
      </nav>
      <main>
        main content
      </main>
      <footer>
        footer
      </footer>
      </div>
    </div>
  )
}

export default App