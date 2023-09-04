import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux"
const Header = () => {

  const photo=useSelector(photo=>photo.userReducer.photo)


  const links=[
    {title: 'Home', to:'/'},
    {title:'Cities', to:'/cities'}
  ]
  

return (
<header className='header-container'>
      <nav className="navbar navbar-dark ">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">Mytinerary</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-light" id="offcanvasDarkNavbarLabel">My Tinerary</h5>
              
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <div className="container-sm rounded rounded-5 overflow-hidden border border-white border-2">
                {console.log(photo)}
                <img className="rounded-circle" width="50" height="50"  src={photo} alt="" />
              </div>
              {links.map((link) => (
              <Link className="nav-link text-light" key={link.title} to={link.to}>{link.title}</Link>))}


              <Link to={'/login'}><button type="button" className="btn btn-primary btn-lg px-3 "><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person"
                  viewBox="0 0 24 24">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>Login</button></Link>




            </div>
          </div>
        </div>
      </nav>
    </header>
)
}

export default Header