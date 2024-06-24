import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/components/App.jsx'
import Nav from './assets/components/Nav.jsx';
import Banner from './assets/components/Banner.jsx';

import Cards from './assets/components/Cards.jsx';
import './styles/main.scss'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Banner />

    <Cards />

    <App />

  </React.StrictMode>,
)
