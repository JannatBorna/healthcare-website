import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Banner from './components/Pages/Banner/Banner';
import Services from './components/Pages/Services/Services';
import Login from './components/Pages/Login/Login';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/banner">
                <Banner></Banner>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
            
        </Switch>
        <Footer></Footer>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
