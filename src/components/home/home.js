import React from 'react'
import img1 from '../../images/happy-smiling-woman-pink-shirt-sofa-home-among-colorful-shopping-bags-holding-credit-card-paying-online-laptop.jpg'
import img2 from '../../images/medium-shot-woman-sitting-desk.jpg'
function home() {

  return (
    <>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
        </div>
        <div class="carousel-inner" id="section1">
          <div class="carousel-item active">
            <img src={img1} alt="Los Angeles" class="d-block w-100" height={"600px"}  />
          </div>
          <div class="carousel-item">
            <img src={img2} alt="Chicago" class="d-block w-100" height={"600px"} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className='service mt-4 '>
        <div className='container'>
        <div className='row justify-content-around '>
        <div className='col-lg-3 ser-item text-center text-capitalize  my-3'>
          <h5>Worldwide Delivery</h5>
          <p className='my-4'>We offer competitive prices on our 100 million plus product any range.</p>
        </div>
        <div className='col-lg-3 ser-item text-center my-3'>
          <h5 className='mt-2'>Safe Payment</h5>
          <p className='my-4'>We offer competitive prices on our 100 million plus product any range.</p>
        </div>
        <div className='col-lg-3 ser-item text-center my-3'>
          <h5>Shop With Confidence</h5>
          <p className='my-4 pb-3 '>We offer competitive prices on our 100 million plus product any range.</p>
        </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default home