import React from "react";

interface HeaderProps {
    welcomeText?: string;
    author?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
    return (
        <div className="header">
            <h1>{props.welcomeText}</h1>
        </div>
    );
}

export default Header;