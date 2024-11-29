import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './component/FooterComponent';
import ListEmployeeComponent from './component/ListemployeeComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import AppStore from './services/AppStore';

function App() {
  return (
    <>
    <Router>
      <div className= "container">
        <Switch>
            <Route exact path = "/" component = {AppStore}></Route>
            <Route path = "/employees" component = {ListEmployeeComponent}></Route>
            <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
            <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
          </Switch>
      </div>
      <FooterComponent />
      </Router>
  </> 
   );
}

export default App;
