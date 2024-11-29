import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const HeaderComponent = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                <a href='https://www.google.com/' className='navbar-brand'>
                    Employee Management Application
                </a>
                <div className="text-center mt-5">
                <Link to="/employees">
                    <button className="btn btn-primary">Employee</button>
                </Link>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default HeaderComponent