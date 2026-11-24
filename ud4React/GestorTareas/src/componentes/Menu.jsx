import { Link } from "react-router-dom";
import "./estilos/paginas.css";


function Menu (){


    return (
        <nav>
      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-mi">Sobre mí</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        
      </ul>
    </nav>
        
    )
}
export default Menu;