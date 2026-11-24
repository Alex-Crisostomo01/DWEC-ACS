import { useState } from 'react';
import "./estilos/paginas.css";
function Contacto() {
 const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <main className="pagina">
      <section className="tarjeta">
        <h1>Contacto</h1>
        <p className="subtitulo">¿Hablamos? Escríbeme un mensaje.</p>

        <form className="formulario" onSubmit={manejarEnvio}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" type="text" placeholder="Tu nombre" required />

          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="tucorreo@ejemplo.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows="5" placeholder="Escribe aquí..." required />

          <button type="submit">Enviar</button>
        </form>

        {enviado && <p className="exito">¡Mensaje enviado correctamente!</p>}

        <div className="datos">
          <p>📧 correo@ejemplo.com</p>
          <p>📍 Madrid, España</p>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
