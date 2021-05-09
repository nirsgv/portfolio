import React from "react";
import { Helmet } from "react-helmet";
import ReactLogo from "../../assets/mr-oizo.svg";

interface HeroProps {
    title: string;
}

const Hero = (props: HeroProps): JSX.Element => {
    return (
        <div className="hero">
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <h1>{props.title}</h1>
            <div style={{ height: "100px", width: "200px" }}>
                <img src={ReactLogo} alt="React Logo" />
            </div>

        </div>
    );
}

export default Hero;