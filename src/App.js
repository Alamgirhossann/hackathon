import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchingUi from "./Components/SearchingUi/SearchingUi";
import SearchResult from "./Components/SearchResult/SearchResult";
export const UseContext = createContext();
function App() {
  const [result, setResult] = useState([]);
  return (
    <UseContext.Provider value={{result, setResult}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchingUi />
          </Route>
          <Route path="/searchResult">
            <SearchResult />
          </Route>
        </Switch>
      </Router>
    </UseContext.Provider>
  );
}

export default App;
