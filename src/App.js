import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Play from './pages/Play'
import Finish from './pages/Finish'

import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <Router  >
      <header >
            <div style={{backgroundColor:"#6fa3f7",paddingTop: 15}}>
              <p style={{fontFamily: "Evanter", fontSize: 48,color: "white", marginBottom: 0}}>E-Belajar</p>
            </div>

      </header>
      <img src="https://i.ytimg.com/vi/MU3qrgR2Kkc/maxresdefault.jpg" style={{position: "absolute",zIndex: -1, width: "100%"}}></img>
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/play">
        <Play/>
      </Route>
      <Route path="/finish" component={Finish}/>
    </Switch>
    
  </Router>
  );
}

export default App;
