import './App.css';
import {Reach, Router, Link} from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './views/Main';
import Create from './views/Create';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/create" />
        {/* <Show path="/show/:id" /> */}
      </Router>
    </div>
  );
}

export default App;
