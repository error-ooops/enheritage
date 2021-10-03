import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
<<<<<<< HEAD
import Owners from './routes/owners/Owners'
import Contact from './routes/Contact/Contact'
import Privacy from './routes/Privacy/Privacy'
import Statute from './routes/Statute/Statute'
=======
import Pilica from './routes/pilica/Pilica';
import Sobieszyn from './routes/sobieszyn/Sobieszyn';
import Almanac from './routes/almanac/Almanac';
import Documentaries from './routes/short documentaries/Documentaries';
>>>>>>> 87ce8e1fd553f6212f51dacf4160a3d9344e1cc0

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
<<<<<<< HEAD
          <Route path="/projects" component={Projects}/>
          <Route path="/owners" component={Owners}/>
          <Route path="/contacts" component={Contact}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/statute" component={Statute}/>
=======
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/almanac" component={Almanac} />
          <Route exact path="/projects/pilica" component={Pilica} />
          <Route exact path="/projects/sobieszyn" component={Sobieszyn} />
          <Route exact path="/projects/shortdocumentaries" component={Documentaries} />
>>>>>>> 87ce8e1fd553f6212f51dacf4160a3d9344e1cc0
        </Switch>

      </div>
    </Router>
  );
}

export default App;
