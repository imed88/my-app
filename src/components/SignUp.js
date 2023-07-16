import React from 'react'

export default function SignUp() {
  return (
    <div>
  <div className="hero overlay" style={{backgroundImage: 'url("assets/images/bg_3.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-9 mx-auto text-center">
          <h1 className="text-white">SignUp</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" placeholder="Phone" />
            </div>
           
            <div className="form-group">
              <input type="submit" className="btn btn-primary py-3 px-5" defaultValue="Send Message" value="Sign Up" />
            </div>
          </form>  
        </div>
        <div className="col-lg-4 ml-auto">
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong className="text-white d-block">Address</strong>
              273 South Riverview Rd. <br /> New York, NY 10011
            </li>
            <li className="mb-2">
              <strong className="text-white d-block">Email</strong>
              <a href="#">info@unslate.co</a>
            </li>
            <li className="mb-2">
              <strong className="text-white d-block">
                Phone
              </strong>
              <a href="#">+12 345 6789 012</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}