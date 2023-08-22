import '../styles/Hero.css'

const Hero = () => {


  return (
    <div className="container hero">
        <div className="row pb-0 pe-lg-0 align-items-center rounded-3 shadow-lg">
          <div className="col-lg-7  p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 lh-1 text-light">Find your perfect trip</h1> <h3 className="lh-2 text-light">designed by insiders who knows and love ther cities!</h3>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg fw-bold"><a className="nav-link" href="cities.html">Cities</a></button>
            </div>
          </div>
        
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://i.postimg.cc/phtZNQT2/Florencia.jpg" alt="" width="820"></img>
          </div>
        </div>
      
    </div>
  )
}

export default Hero