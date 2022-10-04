import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-md  ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span class="navbar-toggler-icon"></span>
          <h1>click</h1>
        </button>
        <div class="navbar-collapse collapse  w-100 order-1 order-md-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <img src={require('../components/colab1.png')} alt="" />
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Companies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Students</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">College/Universities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">AboutUs</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
              <li class="nav-item" style={{  backgroundColor: "white", borderRadius: "10px"}}>
                <a class="nav-link" style={{ color: "#a020f0", }} href="#">Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr style={{backgroundColor:"white",width:"90%"}} />
    </div>
    </>
  )
}
