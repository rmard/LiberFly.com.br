import React from 'react'

class Navbar extends React.Component {

  render = () => (
    <div className="navbar-fixed">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center hide-on-small-only">
              <img src="logo-liberfly.png" className='nav-big-logo' alt="Logo"/>
          </a>
          <a href="/" className="brand-logo left hide-on-med-and-up">
            <div className='nav-small-logo'></div>
          </a>
        </div>
      </nav>    
    </div>
  )
}

export default Navbar