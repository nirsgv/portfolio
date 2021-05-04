import React from "react";
import Tags from "./tags";
import LinksSection from "./linksSection";
import { Tech, Links, ProjectImages } from '../../data/types';

interface ProjectProps {
    bkgColor?: string;
    title: string;
    text: string;
    tags: Tech[];
    links: Links;
    images: ProjectImages;

}

const Project = (props: ProjectProps): JSX.Element => {
    return (
        <div className="project" style={{ backgroundColor: props.bkgColor, height: "200px" }}>
            <h2>{props.title}</h2>
            <h3>{props.text}</h3>

            <Tags tags={props.tags}></Tags>
            <LinksSection links={props.links}></LinksSection>
            <div style={{ width: "300px", height: "200px", overflow: "hidden" }}>
                <img src={props.images.main[0]} />
            </div>
        </div>
    );
}

export default Project;