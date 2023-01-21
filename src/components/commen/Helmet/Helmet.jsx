import React from 'react'

import { HelmetProvider, Helmet } from "react-helmet-async";


const HelmetTitle = ({title}) => {
  return (
        <HelmetProvider> 
         <Helmet> 
           <title> {title}</title> 
         </Helmet> 
     </HelmetProvider> 
  )
}

export default HelmetTitle