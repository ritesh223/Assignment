
import React, { Component } from 'react'
import './Page_3.css';
import myImg from '../img/old_Man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export class Page_3 extends Component {
  render() {
    return (
        <div className='page_3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" id='section_1'>
                        <div className="page_3_intro">
                            <p id='title'>Work on real Industry <br /> projects & showcase <br /> capabilities </p>
                            <p>Stand out from the competition with savvy marketing strategies , state of the art careers sites ,engaging job ads, and an easy hiring process -- not just for your candidates ,but foryour own team too.</p>
                            <button className='btn btn-lg'><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faUpRightFromSquare} id="sicon1" className='text-white'></FontAwesomeIcon></a>Signup for free</button>
                        </div>
                    </div>
                    <div className="col-md-6" id='section_2'>
                        <img src={myImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Page_3




