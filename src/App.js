import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/projects" component={Projects}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
