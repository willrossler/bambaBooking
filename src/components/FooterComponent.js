import React from 'react'
import Footer from './Footer'

import FooterMobile from './FooterMobile'

function returnMobileFooter () {
    return (
        <Footer/>
    )
        }
    
        function returnDeskTopFooter () {
           return  <FooterMobile/>
        }
    

const FooterComponent = () => {
     
   return  ( 
  <>
     {window.innerWidth < 1024 ?
     <FooterMobile/> : <Footer/>
     }
  </>
  )
}

export default FooterComponent