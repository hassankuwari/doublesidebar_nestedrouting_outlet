import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';


const MySidebar1 = () => {
  return (
    <div className='main d-flex justify-content-around'>
      <div className='sidebar-part'>
        <ul>
          <li>
            <Nav.Link href="/mysidebar1/mysidebar1a">Sidebar1.1</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/mysidebar1/mysidebar1b">Sidebar1.2</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/mysidebar1/mysidebar1c">Sidebar1.3</Nav.Link>
          </li>
        </ul>
      </div>
      <div className='body-part'>
        this is first sidebar list.
      </div>
      <div className='outelet-container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MySidebar1
