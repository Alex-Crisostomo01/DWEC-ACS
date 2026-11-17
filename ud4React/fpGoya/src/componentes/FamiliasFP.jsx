// FamiliasFP.jsx
import React, { useState } from 'react';
import './estilos/FamiliasFP.css';

const FamiliasFP = ({apellidos , nombre , setNombre}) => {
  // Toda la información en un array dentro del componente
  const familias = [
    {
      id: 'informatica',
      nombre: 'Informática',
      icono: '💻',
      color: '#2563eb',
      descripcion:
        'Formación en desarrollo de software, sistemas, redes y ciberseguridad. Prepárate para las profesiones más demandadas del sector tecnológico.',
      ciclos: [
        { nombre: 'SMR', nivel: 'Grado Medio', descripcion: 'Sistemas Microinformáticos y Redes' },
        { nombre: 'DAM', nivel: 'Grado Superior', descripcion: 'Desarrollo de Aplicaciones Multiplataforma' },
        { nombre: 'DAW', nivel: 'Grado Superior', descripcion: 'Desarrollo de Aplicaciones Web' },
        { nombre: 'ASIR', nivel: 'Grado Superior', descripcion: 'Administración de Sistemas Informáticos en Red' },
      ],
      salidas: ['Desarrollador web', 'Técnico de sistemas', 'Administrador de redes', 'Especialista en ciberseguridad'],
    },
    {
      id: 'imagen-personal',
      nombre: 'Imagen Personal',
      icono: '💇',
      color: '#db2777',
      descripcion:
        'Especialízate en estilismo, peluquería y estética. Un sector creativo con alta empleabilidad y posibilidad de emprendimiento.',
      ciclos: [
        { nombre: 'Peluquería', nivel: 'Grado Medio', descripcion: 'Técnico en Peluquería y Cosmética Capilar' },
        { nombre: 'Estética', nivel: 'Grado Medio', descripcion: 'Técnico en Estética y Belleza' },
        { nombre: 'Estilismo', nivel: 'Grado Superior', descripcion: 'Estilismo y Dirección de Peluquería' },
        { nombre: 'Cosmética', nivel: 'Grado Superior', descripcion: 'Cosmética Integral y Bienestar' },
      ],
      salidas: ['Peluquero/a', 'Esteticista', 'Asesor/a de imagen', 'Emprendedor en salón de belleza'],
    },
    {
      id: 'automocion',
      nombre: 'Automoción',
      icono: '🚗',
      color: '#ea580c',
      descripcion:
        'Aprende sobre mecánica, electrónica del automóvil y vehículos híbridos y eléctricos. Formación práctica con alta inserción laboral.',
      ciclos: [
        { nombre: 'Electromecánica', nivel: 'Grado Medio', descripcion: 'Electromecánica de Vehículos Automóviles' },
        { nombre: 'Carrocería', nivel: 'Grado Medio', descripcion: 'Carrocería' },
        { nombre: 'Automoción', nivel: 'Grado Superior', descripcion: 'Automoción' },
        { nombre: 'Mantenimiento', nivel: 'Grado Superior', descripcion: 'Mantenimiento de Vehículos Híbridos y Eléctricos' },
      ],
      salidas: ['Mecánico/a', 'Técnico en electrónica del automóvil', 'Jefe de taller', 'Especialista en vehículos eléctricos'],
    },
  ];


  const [familiaActiva, setFamiliaActiva] = useState(familias[0].id);

  const familiaSeleccionada = familias.find((f) => f.id === familiaActiva);

  return (
    <>
    <p>{nombre} {apellidos}</p>
    <button
  key="actualizarNombre"
  onClick={() => setNombre("julian")}
  style={{
    padding: "8px 16px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  }}
          > Actualizar nombre
          </button>
      <input

        id='nombreProfesor'
        type='text'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder='Escribe el nombre del profesor '/>





    <section className="familias-fp">
      <h1 className="familias-fp__titulo">Familias de Formación Profesional</h1>
      <p className="familias-fp__subtitulo">
        Descubre las tres familias de FP que ofrecemos en nuestro instituto
      </p>

      {/* Pestañas */}
      <div className="familias-fp__tabs">
        {familias.map((familia) => (
          <button
            key={familia.id}
            className={`familias-fp__tab ${
              familiaActiva === familia.id ? 'familias-fp__tab--activa' : ''
            }`}
            style={{
              '--color-familia': familia.color,
              borderColor: familiaActiva === familia.id ? familia.color : 'transparent',
              color: familiaActiva === familia.id ? familia.color : '#333',
            }}
            onClick={() => setFamiliaActiva(familia.id)}
          >
            <span className="familias-fp__tab-icono">{familia.icono}</span>
            {familia.nombre}
          </button>
        ))}
      </div>

      {/* Contenido de la familia seleccionada */}
      <div className="familias-fp__contenido" style={{ '--color-familia': familiaSeleccionada.color }}>
        <div className="familias-fp__cabecera">
          <span className="familias-fp__icono-grande">{familiaSeleccionada.icono}</span>
          <div>
            <h2 style={{ color: familiaSeleccionada.color }}>{familiaSeleccionada.nombre}</h2>
            <p>{familiaSeleccionada.descripcion}</p>
          </div>
        </div>

        <h3>Ciclos formativos</h3>
        <div className="familias-fp__ciclos">
          {familiaSeleccionada.ciclos.map((ciclo, index) => (
            <div key={index} className="familias-fp__ciclo">
              <div className="familias-fp__ciclo-header">
                <strong>{ciclo.nombre}</strong>
                <span
                  className="familias-fp__nivel"
                  style={{ backgroundColor: familiaSeleccionada.color }}
                >
                  {ciclo.nivel}
                </span>
              </div>
              <p>{ciclo.descripcion}</p>
            </div>
          ))}
        </div>

        <h3>Salidas profesionales</h3>
        <ul className="familias-fp__salidas">
          {familiaSeleccionada.salidas.map((salida, index) => (
            <li key={index} style={{ borderLeftColor: familiaSeleccionada.color }}>
              {salida}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
};

export default FamiliasFP;
