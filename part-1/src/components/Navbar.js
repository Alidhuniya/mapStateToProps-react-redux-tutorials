import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
      <div >
        <Link  to="/">mapStateToProps</Link>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)