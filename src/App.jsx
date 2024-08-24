import React, {useState} from 'react';
import Barra from './componentes/Barra.jsx';
//import Home from './componentes/Home.jsx';
import Footer from './componentes/Footer.jsx';
import Cart from './componentes/Cart.jsx';
//import RegisterPage from './componentes/RegisterPage.jsx';
//import LoginPage from './componentes/LoginPage.jsx';


const App = () => {
  return (
    <>
      <Barra></Barra>
      {/*<Home></Home> */}
      {/*<RegisterPage></RegisterPage> */}
      {/*<LoginPage></LoginPage> */}
      <Cart></Cart>
      <Footer></Footer>
    </>
  )
}

export default App;
