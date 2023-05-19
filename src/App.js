
import './App.css';
import CreateBook from './components/CreateBook';
import Inicio from './components/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route } from "react-router-dom" ;



function App() {
  return (
    <Router>
      <Route path="/" render={() => <Inicio/>} />
      <Route path="/CreateBooks" component={CreateBook} />
    </Router>
  );
}

export default App;
