import React from 'react'
import Herosection from './Herosection'
import Marquee from './Marquee'
import About from './About'
import Features_container from './Features_container'
import Clients from './Clients'
import Eyes from './Eyes'
import Achievement from './Achievement'

function Homepage() {
  return (
    <> 
<Herosection></Herosection>
<Marquee></Marquee>
<About></About>
<Features_container></Features_container>
<Clients></Clients>
<Achievement></Achievement>
<Eyes></Eyes>
    </>
  )
}

export default Homepage
