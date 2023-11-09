import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || edad === "" || email === "") {
      setError(true);
      //alert("Todos los campos son obligatorios");
      return;
    }
    setExito(true);

    setError(false);
    setNombre("");
    setApellido("");
    setEdad("");
    setEmail("");
  };

  return (
    <>
      <div className="col-xs-6 col-md-4">
        <form onSubmit={validarDatos}>
          {error ? <p>Todos los campos son obligatorios</p> : null}
          {exito ? <p>Ok</p> : null}
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              className="form-control"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
          </div>
          <div className="form-group">
            <label>Edad</label>
            <input
              type="text"
              name="edad"
              className="form-control"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div class="d-grid">
            <button className="btn btn-dark mt-3" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
