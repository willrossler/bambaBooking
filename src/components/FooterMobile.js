import React from "react";
import bLogo from '../assets/logos/bLogo.svg'

const FooterMobile = () => {
  return (
     <>
      <div className='d-flex flex-row justify-content-around' style={{ backgroundColor: "black" }}>
       <img style={{height: '64px', width: '51px'}} src={bLogo}/>

  

       <div style={{fontSize: '14px', lineHeight: '18px'}} className="col text-white ">
                
                
                <p style={{ marginBottom: "0" }}>Bamba</p>
                <p style={{ marginBottom: "0", opacity: "0.5" }}>
                  Lützengatan 10
                </p>
                <p style={{ marginBottom: "0", opacity: "0.5" }}>
                  11520 Stockholm
                </p>
                <p style={{ opacity: "0.5" }}>Sweden</p>
                <p style={{ marginBottom: "0" }}>info@bamba.se</p>
                <p style={{}}>www.bambaostermalm.se</p>
                <p style={{ marginBottom: "0" }}>Instagram@bambaostermalm</p>
              </div>
       
      </div>

  </>
  )
};

export default FooterMobile;
