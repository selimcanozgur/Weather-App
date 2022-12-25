import React from 'react'

function Footer() {
  return (
    <div>
        <div className='container footerContainer mt-4'>
            <div className='row'>
              <div className='col-3'></div>
                <div className='col-2 mt-1'>
                  <h5> Selimcan Özgür </h5>
                </div>
                <div className='col-2 mt-1'>
                <h5> <i className="fa-brands fa-github"></i> <a className='links' href='https://github.com/selimcanozgur' target='blank'>
                  GitHub           
                   </a> </h5>
                </div>
                <div className='col-2 mt-1 links '>
                <h5> <i className="fa-brands fa-twitter"></i> <a className='links' href='https://twitter.com/selimozgur0' target='blank'>
                  Twitter
                   </a> </h5>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer