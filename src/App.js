import './App.css';
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/index'
import Booking from './components/pages/Booking/index'

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/booking' element={<Booking />} />
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;
