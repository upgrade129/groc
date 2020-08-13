import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Your routes.js file
// import routes from './routes';
import App from './components/App';
import Shop from './components/Shop';


ReactDOM.render(
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shop" component={Shop} />
      </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);