import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Route,Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import LogoutForm from "./pages/auth/LogoutForm";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);


  return (
  <CurrentUserContext.Provider value={currentUser}>
    <SetCurrentUserContext.Provider value={setCurrentUser}>
      <div className="styles.App">
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <HomePage/>} />
            <Route exact path="/login" render={() => <LoginForm/>} />
            <Route exact path="/logout" render={() => <LogoutForm/>} />
            <Route exact path="/signup" render={() => <SignUpForm/>} />
            <Route exact path="/profile" render={() => <Profile/>} />

            <Route render={() => <p>Page Not Found!</p>} />
          </Switch>
        </Container>
      </div>
    </SetCurrentUserContext.Provider>
  </CurrentUserContext.Provider>
  );
}

export default App;