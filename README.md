# Getting Started with React Simple Router Starter Kit

This project provides a fast environment to the routing code structure.

# Paging

This project constitutes the simplest infrastructure of routing. What we will do?

When we create a new page in a "pages" folder. You should add to main.js your route like this:

```javascript
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/index";

import Login from "../pages/login"; //New!

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>

            <Route exact path="/login" component={Login}></Route> //New!

        </Switch>
    );
};

export default Main;

```

Main.js file run in to the App.js file.

```javascript
import React from 'react'
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Main />
    </div >
  );
}

export default App;

All we need to add to route name that you want, and connect the component.

```

## Installation

To get you started fork and clone the `react-router-starter-kit` repository and install the dependencies using Yarn or the npm client.

```bash
❯ cd react-router-starter-kit/
❯ yarn
```

## Quick start

### Yarn

```bash 
❯ yarn start
✔ Development server running on: http://localhost:3000
```

### npm
````bash
❯ npm start
✔ Development server running on: http://localhost:3000
````


[![gifd241cdbce062558f.gif](https://s2.gifyu.com/images/gifd241cdbce062558f.gif)](https://gifyu.com/image/Uwzl)