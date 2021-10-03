import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Owners from './routes/owners/Owners'
import Contact from './routes/Contact/Contact'
import Privacy from './routes/Privacy/Privacy'
import Statute from './routes/Statute/Statute'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/projects" component={Projects}/>
          <Route path="/owners" component={Owners}/>
          <Route path="/contacts" component={Contact}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/statute" component={Statute}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
