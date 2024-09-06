import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import StudentResult from './components/StudentResult/StudentResult';
import Grants from './components/Grants/Grants';
import Register from './components/Register/Register';
import WhyTOPIK from './components/WhyTOPIK/WhyTopik';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <OurAdvantages />
    <StudentResult />
    <Grants />
    <Register />
    <WhyTOPIK />
    <FAQ />
    <Footer />
  </div>
);

export default App;
