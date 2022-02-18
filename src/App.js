import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import PageCTA from "./pages/PageCTA"
import PageOne from "./pages/PageOne"
import PageThree from "./pages/PageThree"
import PageTwo from "./pages/PageTwo"

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/page-one" component={PageOne}></Route>
            <Route exact path="/page-two" component={PageTwo}></Route>
            <Route exact path="/page-three" component={PageThree}></Route>
            <Route exact path="/page-cta" component={PageCTA}></Route>
          </Routes>
      </Layout>
    </Router>
  )
}

export default App;
