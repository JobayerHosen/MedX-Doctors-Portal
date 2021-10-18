import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./components/pages/Doctors/Doctors";
import Doctor from "./components/pages/Doctor/Doctor";
import Home from "./components/pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
