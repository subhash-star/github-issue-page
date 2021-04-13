import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import IssueList from "./components/IssueList";
import IssueDetails from "./components/IssueDetails";

const App = () => {
  return (
    <Container>
      <Router>
        <div>
          <Container className="App-header" variant="dark">
            GITHUB ISSUE PAGE
          </Container>
          <Switch>
            <Route path="/" exact>
              <IssueList />
            </Route>
            <Route path="/:id" exact>
              <IssueDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
