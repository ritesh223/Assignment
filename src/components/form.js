import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div className='bg-white'>
            <div className="d-flex align-items-center flex-column bd-highlight justify-content-center" 
            style={{
            
            height:"450px",
                background: `url("https://img.freepik.com/premium-vector/abstract-boxes-background-modern-technology-with-square-mesh-geometric-white-background-with-lines-cube-cell-vector-illustration_41981-1987.jpg?w=1060") no-repeat center`,
                backgroundSize:"75% 100%"
                
            
            }}>
                <div className="p-2  mt-2">
                <h2
                style={{fontWeight:"bolder",
                lineHeight:"15px",
                fontSize:"35px"}}>

                Subscribe To Newsletter
                </h2>
                </div>
                <div className="p-2 bd-highlight" style={{
                    color:"#949eb4"
                }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eaque,<br />
                       vero ullam nisi assumenda unde est explicabo perspiciatis dolor ipsum</div>
                <div className="p-2 bd-highlight mt-4" style={{
                    width:"400px"
                }}>
                    <form className="d-flex" style={{
                        height:"45px",
                        
                    }}>
                        <input className="form-control" type="search" placeholder="" aria-label="Search" />
                            <button className="text-center btn-outline-none" type="submit" style={{borderRadius:"0px 10px 10px 0px",
                            backgroundColor:"#6149cd",
                            width:"190px",
                            border:"none",
                            boxShadow:"-5px 15px 50px 0px #6149cd",
                            color:"white",
                            fontWeight:"lighter"
                        }}>Submit &rarr;</button>
                    </form>
                </div>
            </div>
        
      </div>
    )
  }
}

export default Form
