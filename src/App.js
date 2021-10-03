import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Pilica from './routes/pilica/Pilica';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:childRoute" component={Pilica}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
