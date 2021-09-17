// import Navbar from './components/navbar/Navbar';
// import Tabs from './components/tabs/Tabs'
// import Accordion from "./components/accordion/Accordion";
import SideDrawer from "./components/drawer/SideDrawer";

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <main>
      {/* <Navbar /> */}
      {/* <Tabs /> */}
      {/* <Accordion /> */}
      <SideDrawer />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>

    </main>
  );
}

export default App;
