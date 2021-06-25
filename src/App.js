import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthRouter from "./components/AuthRouter";
import Cart from "./components/Cart";
import DetailDrink from "./components/DetailDrink";
import GlobalLoading from "./components/GlobalLoading";
import DrinksList from "./components/DrinksList";
import LoginForm from "./components/LoginForm";
import NotFound from "./components/NotFound";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <div className="App">
      <GlobalLoading />
      <Switch>
        <PrivateRouter exact path={`/`} component={DrinksList} />
        <PrivateRouter exact path={`/cart`} component={Cart} />
        <AuthRouter exact path={"/login"} component={LoginForm} />
        <PrivateRouter exact path={`/:drinkId`} component={DetailDrink} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
