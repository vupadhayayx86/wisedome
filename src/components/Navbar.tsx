import logoimage from "../assets/newlogodark2.png"

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <img src={logoimage} alt="" />
          <h3>WISEDOME</h3>
          <p>Be wise with wonders!</p>
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
  )
}

export default Navbar