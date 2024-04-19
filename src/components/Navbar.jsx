import React from 'react'


function Navbar() {
  return (
    
    <div> <header className="topNav">
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
      <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        
        <div className="navbar">
          <form className="d-flex" role="search">
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="btn btn-danger">Signin</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  </div>
  
  )
}

export default Navbar
