import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Home></Home>
          </Route>
          <Route path="/about">
            <Home></Home>
          </Route>
          <Route path="/faq">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
