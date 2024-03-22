import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import LogoutForm from "./pages/auth/LogoutForm";
import LoggedOutHomePage from "./components/LoggedOutHomePage";
import LoggedInHomePage from "./components/LoggedInHomePage";
import ProfilePage from "./components/ProfilePage";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import UserProfile from "./components/LoggedOutProfilePage"

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
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" component={LoggedOutHomePage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/logout" component={LogoutForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/profilepage" component={ProfilePage} />
              <Route exact path="/userprofile" component={LoggedOutHomePage} />
              <Route exact path="/homepage" component={Post} />
              <Route
                exact
                path="/home"
                render={() => <LoggedInHomePage currentUser={currentUser} />}
              />
              <Route render={() => <p>Page Not Found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
