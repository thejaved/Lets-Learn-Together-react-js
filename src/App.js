import react from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/error' component={Error}/>
        <Redirect to='/error'/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
