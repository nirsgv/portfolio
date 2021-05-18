import { projects } from '../../data/projects';
import { Project } from './';



const Projects = (): JSX.Element => {
    return (
        <>
            {projects.map((project, index) => <Project key={index} {...project} />)}
        </>
    )
}
export default Projects;