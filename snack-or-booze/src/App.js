import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import NewSnackForm from "./NewSnackForm";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snackList, setSnackList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    async function getMenu() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnackList(snacks);
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinkList(drinks);
      setIsLoading(false);
    }
    getMenu();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snackList} drinks={drinkList}/>
            </Route>

            <Route exact path="/snacks">
              <Menu foodItems={snackList} title="Snack" />
            </Route>

            <Route exact path="/drinks">
              <Menu foodItems={drinkList} title="Drink" />
            </Route>

            <Route path="/snacks/:id">
              <Snack itemList={snackList} cantFind="/snacks" />
            </Route>

            <Route path='/drinks/:id'>
              <Snack itemList={drinkList} cantFind="/drinks" />
            </Route>

            <Route path="/add-item" >
              <NewSnackForm addSnack={setSnackList} addDrink={setDrinkList}/>
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
