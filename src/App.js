import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Banner from './components/Pages/Banner/Banner';
import Services from './components/Pages/Services/Services';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Team from './components/Pages/Team/Team';
import About from './components/Pages/About/About';
import Appointments from './components/Pages/Appointments/Appointments';
import Events from './components/Pages/Events/Events';
import AuthProvider from './context/AuthProvider';
import Login from './components/Pages/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <AuthProvider>
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
            
             <Route exact path="/services">
              <Services></Services>
            </Route>

             <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/event">
              <Events></Events>
            </Route>
            

            <Route exact path="/our team">
              <Team></Team>
            </Route>

            <Route exact path="/appointments">
              <Appointments></Appointments>
            </Route>

            <Route exact path="/login">
               <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>


            



            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
