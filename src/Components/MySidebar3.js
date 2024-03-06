import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';


const MySidebar3 = () => {
  return (
    <div className='main d-flex justify-content-around'>
    <div className='sidebar-part'>
      <ul>
        <li>
          <Nav.Link href="/mysidebar3/mysidebar3a">Sidebar3.1</Nav.Link>
        </li>
        <li>
          <Nav.Link href="/mysidebar3/mysidebar3b">Sidebar3.2</Nav.Link>
        </li>
        <li>
          <Nav.Link href="/mysidebar3/mysidebar3c">Sidebar3.3</Nav.Link>
        </li>
      </ul>
    </div>
    <div className='body-part'>
      this is third sidebar list.
    </div>
    <div className='outelet-container'>
        <Outlet/>
      </div>
  </div>
  )
}

export default MySidebar3
