import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';

const MySidebar2 = () => {
  return (
    <div className='main d-flex justify-content-around'>
      <div className='sidebar-part'>
        <ul>
          <li>
            <Nav.Link href="/mysidebar2/mysidebar2a">Sidebar2.1</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/mysidebar2/mysidebar2b">Sidebar2.2</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/mysidebar2/mysidebar2c">Sidebar2.3</Nav.Link>
          </li>
        </ul>
      </div>
      <div className='body-part'>
        this is second sidebar list.
      </div>
      <div className='outelet-container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MySidebar2
