import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase ">VENUE</h5>
            
              9 April 2024
            <br></br>
            
              8:30 AM - 7:00 PM
              <br></br>
           
HBS, Chowbaga Road, Anandapur. P.O. East KolkataTownship, Kolkata - 700107
          </div>
          
          
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="/">SQUAREONE</a>
      </div>
    </footer>
  );
}

export default Footer;
