import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Pilica from './routes/pilica/Pilica';
import Sobieszyn from './routes/sobieszyn/Sobieszyn';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/pilica" component={Pilica} />
          <Route exact path="/projects/sobieszyn" component={Sobieszyn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
