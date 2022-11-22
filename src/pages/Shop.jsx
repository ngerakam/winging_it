import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SideMenu from '../components/sideMenu/SideMenu'

function Shop() {
  return (
    <>
    <Navbar />
    <div className="container-fluid row mt-2">
      <SideMenu/>

      <div className="col-9">This is a product area</div>
    </div>
    </>
    
    
  )
}

export default Shop