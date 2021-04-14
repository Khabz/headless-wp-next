import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
export default class TopNavigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" className="shadow">
                    <Navbar.Brand href="/">
                        NextJs-WP Blog
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}
