import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Success from "./components/Success";

import "./scss/style.scss";

function App() {
  const [formSubmit, setFormSubmit] = useState(false);
  return (
    <Router>
      {console.log(formSubmit)}
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Tools />
          {formSubmit ? (
            <Redirect to="/success" />
          ) : (
            <Contact setFormSubmit={setFormSubmit} />
          )}

          <Footer />
        </Route>
        <Route path="/success">
          <Success setFormSubmit={setFormSubmit} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
