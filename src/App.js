import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home'; 
import About from '../src/Pages/About'; 
import Features from '../src/Pages/Features'; 
import Pricing from '../src/Pages/Pricing'; 
import Review from '../src/Pages/Review' 
import Contact from '../src/Pages/contact' 


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/feature' component={Features} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/review' component={Review} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
