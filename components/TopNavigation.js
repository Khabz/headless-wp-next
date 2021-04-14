import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
export default class TopNavigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light" className="shadow">
                    <Navbar.Brand>
                        <img 
                            src="logo.svg"
                            width="30"
                            height="30"
                            color="white"
                        />{' '}
                        NextJs-WP Blog
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}
