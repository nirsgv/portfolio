import { Tech } from '../../data/types';
interface TagsProps {
    tags: Tech[];
}

const Tags = (props: TagsProps): JSX.Element => {
    return (
        <ul className="tags">
            {props.tags && props.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    );
}

export default Tags;