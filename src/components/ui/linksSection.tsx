import { Links } from '../../data/types';
interface LinksSectionProps {
    links: Links;
}

const LinksSection = (props: LinksSectionProps): JSX.Element => {
    const linksKeys = Object.keys(props.links) as Array<keyof Links>;

    return (
        <ul className="links">
            {linksKeys.map(linkKey => <li key={props.links[linkKey]}><a href={props.links[linkKey]}>{linkKey}</a></li>)}
        </ul>
    );
}

export default LinksSection;