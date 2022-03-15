import React from 'react'


function NavBar(props) {

    const [selNav, setSelNav] = React.useState('home');
    const navItems = {
        display: 'inline',
        padding: '1rem',
        cursor: 'pointer'
    }
    const selNavItems = {
        display: 'inline',
        padding: '1rem',
        backgroundColor: 'green',
        cursor: 'pointer'
    }

    const navbar = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem'
    }

    const itemClick = (a) => {
        console.log(a + " is clicked");
        setSelNav(a)
        props.toggleItem(a)
    }

    return (
        <div>

            <ul style={navbar}>
                <li style={selNav === 'home' ? selNavItems : navItems} onClick={() => { itemClick("home") }}>Home</li>
                <li style={selNav === 'fun' ? selNavItems : navItems} onClick={() => { itemClick("fun") }}>Fun</li>
                <li style={selNav === 'xox' ? selNavItems : navItems} onClick={() => { itemClick("xox") }}>XOX</li>
                <li style={selNav === 'conn' ? selNavItems : navItems} onClick={() => { itemClick("conn") }}>Conn 4</li>
            </ul>

        </div>
    )
}

export default NavBar