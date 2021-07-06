import React from 'react';
import Services from '../../Services/TrabalhoReactMisleneServices';

const Home = () => {
    debugger
    Services.Usuarios.getUsuarios();
  return(
    <h1 className="container"> Home </h1>
  )
}

export default Home;