import { Tech, Links, ProjectImages } from './types';

const projects = [
    {
        bkgColor: "#eee",
        title: "abc1",
        text: "some text here",
        tags: [Tech.Js, Tech.Ts],
        links: {
            code: 'https://codepen.io/rahulsahofficial/pen/NWbJrLe',
            live: 'https://codepen.io/rahulsahofficial/pen/NWbJrLe',
            mock: 'https://codepen.io/rahulsahofficial/pen/NWbJrLe'
        } as Links,
        images: {
            main: ["https://placedog.net/500", "https://placedog.net/500", "https://placedog.net/500"],
            secondary: [],
            turnary: [],
        } as ProjectImages,
    },
    {
        bkgColor: "#eee",
        title: "abc1",
        text: "some text here",
        tags: [Tech.Sass, Tech.Redux],
        links: {
            code: '', live: '', mock: ''
        } as Links,
        images: {
            main: ["https://placedog.net/500", "https://placedog.net/500", "https://placedog.net/500"],
            secondary: [],
            turnary: [],
        }
    },
    {
        bkgColor: "#eee",
        title: "abc1",
        text: "some text here",
        tags: [Tech.Js, Tech.Ts],
        links: {
            code: '', live: '', mock: ''
        } as Links,
        images: {
            main: ["https://placedog.net/500", "https://placedog.net/500", "https://placedog.net/500"],
            secondary: [],
            turnary: [],
        }
    }
];

export { projects }