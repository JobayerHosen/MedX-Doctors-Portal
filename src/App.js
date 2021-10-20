import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Doctors from "./components/pages/Doctors/Doctors";
import Doctor from "./components/pages/Doctor/Doctor";
import Home from "./components/pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
import Login from "./components/pages/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Signup from "./components/pages/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Faq from "./components/Faq/Faq";
import About from "./components/About/About";
import Appoinment from "./components/pages/Appointment/Appoinment";
import Contact from "./components/pages/Contact/Contact";

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
            <PrivateRoute path="/doctor/:doctorId">
              <Doctor></Doctor>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
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
