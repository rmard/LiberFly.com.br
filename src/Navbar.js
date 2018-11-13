import React from 'react'
import './navbar.css';

class Navbar extends React.Component {

  render = () => (    
    <div>
      <div className="navbar-fixed">
        <nav className="white">
          <div className="nav-wrapper">
            <a href="#!" data-target="slide-out" className="blue-text sidenav-trigger left"><i className="material-icons">menu</i></a>
            <a href="/" className="brand-logo center">
                <img src="logo-liberfly.png" className='nav-big-logo' alt="Logo"/>
            </a>
            <a href="/" className="brand-logo hide">
              <div className='nav-small-logo'></div>
            </a>
          </div>
        </nav>         
      </div>
      <ul id="slide-out" className="sidenav left-align">
        <li><div className="user-view">
          <div className="background">
            &nbsp;
          </div>
          { /*
          <a href="#user"><img className="circle" src="optimized-ross-parmly-25230-unsplash.jpg"/></a>
          <a href="#name"><span className="white-text name">John Doe</span></a>
          <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
           */ }
        </div></li>
        {//<li><a href="#!">Início</a></li>
        }
        <li><a href="/about">Quem somos</a></li>
        <li><a href="/your-rights">Conheça seus direitos</a></li>
        <li><a href="/blog">Blog de viagem</a></li>
        <li><a href="/news">Notícias</a></li>
        <li><a href="/faq">Ajuda</a></li>
        <li><a href="/claim">Envie sua reclamação</a></li>
        <li><div className="divider"></div></li>
        {//<li><a className="subheader">Subheader</a></li>
        }
        <li><a className="btn waves-effect waves-light" href="/">Calcule sua indenização</a></li>
      </ul> 
    </div>
  )
}

export default Navbar