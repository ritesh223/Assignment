
import React, { Component } from 'react'
import './Page_1.css';
import myImg from './back.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTelegram } from '@fortawesome/free-brands-svg-icons';


export class Page_1 extends Component {
  render() {
    return (
      <div className='page_1'>
        <div className="container px-lg-6">
          <div className="row ">
            <div className="col-md-7 px-lg-5" id='section_1'>
              <div className="intro">
                <h1><strong>Get Valuable <br /> Industry Experience</strong></h1>
                <p>work on industry projects gain employibility <br></br> and explore interships and jobs</p>
                <button className='btn btn-success'> <strong> Explore <a href="https://www.telegram.com/"><FontAwesomeIcon icon={faTelegram} id="sicon1" className="rotate" style={{
                  color: "black",
                }}></FontAwesomeIcon></a> </strong></button>
              </div>
            </div>

            <div className="col-md-5 px-lg-5" id='section_2'>
              <img src={myImg} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="half">
          <h1>mdfj dnsdbsi</h1>
        </div> */}
      </div>
    )
  }
}

export default Page_1


