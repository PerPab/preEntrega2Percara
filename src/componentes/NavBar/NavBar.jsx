import React from "react";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'



const NavBar = () => {
  const url = '/search.svg'
  const logo = '/icono.png'
  return (
  
    <nav className="nav">
      <ul className="contenedor-lista">
        <li className="item-lista brandname">
          <Link to="/"><img className="logo" src = {logo}/>60FPS Store</Link>
        </li>
        <li className="item-lista xbox">
          <Link to='/category/Xbox' className="btn-xbox">Xbox</Link>
        </li>
        <li className="item-lista ps">
          <Link to='/category/Playstation' className="btn-ps" href="">PlayStation</Link>
        </li>
        <li className="item-lista pc">
          <Link className="btn-pc" to="/category/pc">PC</Link>
        </li>

        <li className="item-lista search">
        <input className="search-field" type="text"/>
        <button className="btn-search"><img src={url}/></button>
        </li>
        
        <button className="item-lista carrito">
          <CartWidget />
        </button>
      </ul>
    </nav>
  
  );
};

export default NavBar;