import React from 'react';

function Header(props) {
    return (
        <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day</h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
    );
}

// Can also have const Header = (props) => {}

export default Header;