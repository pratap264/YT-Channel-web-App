import React from 'react'
import "./Header.css"
import{Link} from "react-router-dom";

export const Header = () => {
  return (
      <nav id="navbar" className="h-nav">
        <section id="head">
        <div id="logo">
            <img src="https://yt3.ggpht.com/Vad0CrV73EsHi_QDvlxkteEgxVShtvTwiUOXcXhl_zoiOGykrqm1iDx-IjrAiBZDTV11rmBmRw=s176-c-k-c0x00ffffff-no-rj"
                alt="Silent X jerry"/>
        </div>
        <ul className="items">
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/about" >Contact</Link>
            <Link className="item" to="/giveaway" >Giveaway</Link>
            <Link className="item" to="/contact" >About Us</Link>
            {/* <Link className="item" to="/discord" >Join Discord</Link> */}
        </ul>
        </section>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
    
  );
}
