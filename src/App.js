import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Banner from './components/Pages/Banner/Banner';
import Services from './components/Pages/Services/Services';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
    <br/>
    <Services></Services>
    <br />
    <Login></Login>
    <Footer></Footer>
    </div>
  );
}

export default App;
