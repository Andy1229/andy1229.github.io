import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './pages/Header';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Career from './pages/Career';

import Footer from './pages/Footer';

function App() {

  return (
    <div className="App" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column row align-items-center">
      <Router>
        <header class="mb-auto">
          <Header />
        </header>

        <main class="px-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Career" component={Career} />
            <Route path="/Portfolio" component={Portfolio} />
          </Switch>
        </main>
      </Router>

      <footer footer class="mt-auto text-white-50" >
        <Footer />
      </footer>
    </div >

  );
}

export default App;
