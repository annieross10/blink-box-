import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import {Route,Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from "./pages/auth/SignUpForm";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="styles.App">
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/login" render={() => <h1>Log In</h1>} />
          <Route exact path="/signup" render={() => <SignUpForm/>} />
          <Route render={() => <p>Page Not Found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;