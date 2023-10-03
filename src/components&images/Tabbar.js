import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tabbar() {

  return (
    <div>
         <div className="head_container">
            {/* <NavLink   className={(navData) => (navData.isActive ? "active1 tabs" : 'none tabs')} to="/"></NavLink> */}
            <NavLink   className={(navData) => (navData.isActive ? "active1 tabs" : 'none tabs')} id = "NewYork"  to="/NewYork">NewYork</NavLink>
            <NavLink   className={(navData) => (navData.isActive ? "active1 tabs" : 'none tabs')} id = "Mumbai" to="/Mumbai">Mumbai</NavLink>
            <NavLink   className={(navData) => (navData.isActive ? "active1 tabs" : 'none tabs')} id = "Paris" to="/Paris">Paris</NavLink>
            <NavLink   className={(navData) => (navData.isActive ? "active1 tabs" : 'none tabs')} id = "London" to="/London">London</NavLink>
         </div>
    </div>
  )
}
