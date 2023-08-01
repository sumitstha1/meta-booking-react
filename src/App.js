import './App.css';
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/index'
import Booking from './components/pages/Booking/index'
import PageNotAvailable from './components/pages/PageNotAvailable/index'
import PageNotFound from './components/pages/404/index'

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<PageNotAvailable />} />
        <Route exact path='/menu' element={<PageNotAvailable />} />
        <Route exact path='/reservation' element={<Booking />} />
        <Route exact path='/order-online' element={<PageNotAvailable />} />
        <Route exact path='/login' element={<PageNotAvailable />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;
