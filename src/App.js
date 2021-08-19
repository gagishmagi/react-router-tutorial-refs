import './App.css';



import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router';

import HomePage from './components/HomePage';
import Contact from './components/Contact';
import About from './components/About';
import Page404 from './components/Page404';
import SingleContact from './components/SingleContact';


function App() {
  return (
      <div>
        <Header/>
        <div className="page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/contact/:id" component={SingleContact} />

            <Route path="/about" component={About} />  
            <Route component={Page404}/>
          </Switch>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
