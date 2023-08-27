import React from 'react'
import { Apple, GooglePlay } from 'react-bootstrap-icons'

function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <h1>shopee</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
        </p>
        <div className="d-flex justify-content-around">
          <div className="img">
            <GooglePlay/>
            <span>Google Play</span>
          </div>
          <div className="img">
            <Apple/>
            <span>App Store</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6">
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center </li>
          <li>How to Buy </li>
          <li>Track Your Order </li>
          <li>Corporate & Bulk Purchasing </li>
          <li>Returns & Refunds </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6">
        <h2>Contact Us</h2>
        <ul>
          <li>70 distract, cairo, NY 10012, egypt </li>
          <li>Email: shopee.help@gmail.com</li>
          <li>Phone: +201076548732</li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer