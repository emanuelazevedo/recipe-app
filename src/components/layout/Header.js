import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={title}>Recipe</h1>
        </header>
    )
}

const headerStyle = {
    background: '#000000',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: '2px',
    paddingTop:'0.1px',
    marginBottom: '25px',
}

const title = {
    marginBottom: '15px'
}

export default Header;