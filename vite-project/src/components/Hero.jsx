

const Hero = () => {
  return (
    <div class="container hero">
        <div class="row pb-0 pe-lg-0 align-items-center rounded-3 shadow-lg">
          <div class="col-lg-7  p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 lh-1 text-light">Find your perfect trip</h1> <h3 class="lh-2 text-light">designed by insiders who knows and love ther cities!</h3>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
            <button type="button" class="btn btn-primary btn-lg fw-bold"><a class="nav-link" href="cities.html">Cities</a></button>
            </div>
          </div>
        
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="src/img-mindhub-example/25.jpg" alt="" width="720"></img>
          </div>
        </div>
      
    </div>
  )
}

export default Hero