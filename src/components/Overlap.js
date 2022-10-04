
import React, { Component } from 'react'
import './overlap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo,faUserPlus} from '@fortawesome/free-solid-svg-icons';


export class Overlap extends Component {
  render() {
    return (
        <div className="div">
            <div className="cont">
                <div className="div_1">
                    <button className='btn btn-primary btn-lg'> <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faVideo} id="sicon1" className=''></FontAwesomeIcon></a>Explore Opportunities</button>
                </div>
                <div className="div_2">
                    <button className='btn btn-primary btn-lg'> <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faVideo} id="sicon1" className=''></FontAwesomeIcon></a>Connect with Us</button>
                </div>
                <div className="div_3">
                    <button className='btn btn-primary btn-lg'> <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faUserPlus} id="sicon1" className=''></FontAwesomeIcon></a>Sign Up For Free</button>
                </div>
            </div>
        </div>
      
    )
  }
}

export default Overlap



