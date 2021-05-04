import React from "react";
import { Helmet } from "react-helmet";

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
        </div>
    );
}

export default Hero;