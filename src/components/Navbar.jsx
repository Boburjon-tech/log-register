import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-base-200">
        <div className="navbar main-container">
        <div className="navbar-start">
            <Link className="btn btn-netural">Logo</Link>
        </div>
        <div className="navbar-center">2</div>
        <div className="navbar-end">
            <button className="btn btn-secondary">Logout</button>
        </div>

        </div>
    </header>
  )
}

export default Navbar
