import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./components/pages/Doctors/Doctors";
import Doctor from "./components/pages/Doctor/Doctor";
import Home from "./components/pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

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
            <Doctors></Doctors>
          </Route>
          <Route path="/doctor/:doctorId">
            <Doctor></Doctor>
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
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
