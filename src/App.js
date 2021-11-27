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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Spinner from './components/Pages/Spinner/Spinner';
import Details from './components/Pages/Details/Details';

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

             <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>

            <PrivateRoute exact path="/event">
              <Events></Events>
            </PrivateRoute>
            

            <PrivateRoute exact path="/our team">
              <Team></Team>
            </PrivateRoute>

            <PrivateRoute exact path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute exact path="/spinner">
              <Spinner></Spinner>
            </PrivateRoute>

            <PrivateRoute exact path="/appointments">
              <Appointments></Appointments>
            </PrivateRoute>
            
            <PrivateRoute exact path="/details">
             <Details></Details>
            </PrivateRoute>
            

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