import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div style={header}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
        </div>
    )
}

const header={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0px',
    textDecoration: 'none'
    
}

const linkStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0px',
    border: '1px solid'
    
}

export default Header


