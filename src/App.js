import './App.css';
import Header from "./components/Header";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import AddingForm from "./components/AddingForm";
import Edit from "./components/edit";
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Switch>
            <Route path="/addMovie"> <AddingForm/> </Route>
            <Route path="/edit/:id?"> <Edit/> </Route>
            <Route path="/"> <Header/> </Route>
            <Route path="/home"> <Header/> </Route>
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
