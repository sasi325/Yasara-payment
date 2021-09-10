import "./App.css";
import AddPayment from "./component/AddPayment";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Payments from "./pages/Payments";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add" exact component={AddPayment} />
          <Route path="/payments" component={Payments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
