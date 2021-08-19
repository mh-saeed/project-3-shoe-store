import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Products, ProductItem, Navigation } from "./components";

function RouterConfig() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:slug" component={ProductItem} />
        <Route path="/about" component={About} />
        <Route path="*" component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
