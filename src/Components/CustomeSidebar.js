import React from 'react'
import Nav from 'react-bootstrap/Nav';


const CustomeSidebar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Nav.Link href="/mysidebar1">Sidebar1</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/mysidebar2">Sidebar2</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/mysidebar3">Sidebar3</Nav.Link>
                </li>
            </ul>
        </div>
    )
}

export default CustomeSidebar
