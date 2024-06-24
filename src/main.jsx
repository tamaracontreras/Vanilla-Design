import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/components/Header.jsx';
import Nav from './assets/components/Nav.jsx';
import Banner from './assets/components/Banner.jsx';
import Circles from './assets/components/Circles.jsx';
import Cards from './assets/components/Cards.jsx';
import './styles/main.scss'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Banner />
    <Circles />

    <Cards />

   

  </React.StrictMode>,
)
