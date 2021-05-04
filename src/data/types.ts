export enum Tech {
    Ts = 'typescript',
    Js = 'javascript',
    Css = 'css',
    React = 'react',
    Redux = 'redux',
    Sass = 'sass',
    Material = 'material-ui',
    Mongo = 'mongodb',
}

export type Links = {
    mock: string;
    code: string;
    design: string;
    live: string;
}

export interface ProjectImages {
    main: string[];
    secondary: string[];
    turnary: string[];
}