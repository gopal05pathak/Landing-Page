import './Navbar.css'

const navbar = () => {
  return (
    <div className='nav'>
      <div className="navlogo">Cars</div>
      <ul className="navmenu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='navcontact'>Contact</li>
      </ul>
    </div>
  )
}

export default navbar
