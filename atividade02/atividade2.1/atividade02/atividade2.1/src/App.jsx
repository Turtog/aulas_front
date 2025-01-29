import './App.css';
import Header from './components/Header';
import Index from './components/pages/Index/Index';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Index />
      <Footer />
    </div>
  );
};



export default App;