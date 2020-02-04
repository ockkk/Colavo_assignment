import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Basket from "./Pages/Basket/Basket"

const App: React.FC = props => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Basket}/>
      </Router>
    </div>
  );
};

export default App;
