import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {UserContext} from './Context/UserContext'

// import components
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'
import Footer from './layout/Footer';
import Header from './layout/Header'
function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user , setUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path = '*' element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
