import './App.css';
import {Reach, Router, Link} from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './views/Main';
import Create from './views/Create';
import Show from './views/Show';
import Edit from "./views/Edit";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/create" />
        <Show path="/show/:_id" />
        <Edit path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
