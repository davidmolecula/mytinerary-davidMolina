

const Footer = () => {
return (
    <footer>
        
        <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <p className="text-light">mytirenary© 2023</p>
    </div>

    <div className="col mb-3">

    </div>
    <div className="col mb-3">

</div>


    <div className="col mb-3">
      <h4 className="text-light text-bold">Explore</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
        <li className="nav-item mb-2"><a href="cities.html" className="nav-link p-0 text-light">Cities</a></li>
     
      </ul>
    </div>

    <div className="col mb-3">
      <h4 className="text-light">Social media</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Facebook</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Instagram</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Twitter</a></li>
        
      </ul>
    </div>

    
  </footer>
</div>
    </footer>
)
}

export default Footer