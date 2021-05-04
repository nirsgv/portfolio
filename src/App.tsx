import './App.css';
import { Hero, Header, Project } from './components/ui'
import { Tech } from './data/types'
import { projects } from './data/projects'


const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header welcomeText="Welcome" author="Nir Segev" />
      <Hero title="page name here"></Hero>
      <main>
        {projects.map(project => <Project {...project} />)}
      </main>
    </div>
  );
}

export default App;
