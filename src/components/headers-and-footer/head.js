import React from 'react'
import { Envelope, Phone } from 'react-bootstrap-icons'

function head() {
    return (
        <>
            <section className='head'>
                <div className='container-fluid'>
                    <div className='row justify-content-between'>
                    <div className='col-5 justify-content-around d-flex'>
                        <div>
                        <Phone />
                        <label> +201076548732</label>
                        </div>
                        <div>
                        <Envelope />
                        <label> support@shopee.com</label>
                        </div>
                    </div>
                    <div className=' col-7 d-flex justify-content-around '>
                        <label>Theme FAQ"s</label>
                        <label>Need Help?</label>
                        <div>
                        <span>🏳️‍⚧️</span>
                        <label>EN</label>
                        <span>🏳️‍⚧️</span>
                        <label>USD</label>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default head