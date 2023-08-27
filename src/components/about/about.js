import React from 'react'
import imga from '../../images/21727022_6505894.jpg'
function about() {
  return (
    <>
    <div className='container'>
    <div className='row justify-content-between text-capitalize  mt-5'>
    <div className='col-lg-5 col-12 '>
      <h3 className=' '>why choose us</h3>
      <ul className='mt-3'>
        <li>We offer competitive prices on our 100 million plus product any range.</li>
        <li>We offer competitive prices on our 100 million plus product any range.</li>
        <li>We offer competitive prices on our 100 million plus product any range.</li>
        <li>We offer competitive prices on our 100 million plus product any range.</li>
        <li>We offer competitive prices on our 100 million plus product any range.</li>
      </ul>
    </div>
    <div className='col-lg-6 col-12'>
      <img src={imga} className='w-100' height={"400px"} alt='about' ></img>
    </div>
    </div>
    </div>
    </>
  )
}

export default about