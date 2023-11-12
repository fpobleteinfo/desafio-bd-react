import React from "react";
import { useState } from "react";


const Formulario = ({data, SetData, dataFilter, SetDataFilter, SetError, SetExito}) => {
 

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
 
    if (nombre === "" || email === "" || edad === "" || cargo === "" || telefono === "") {
      SetError({
        error: true,
        msg: "Completa todos los campos necesarios",
        color: "warning",
      })
      SetExito({ exito: false, msg: "", color: "" });
      return;
    } 

    SetExito({ exito: true, msg: "Datos agregados exitosamente", color: "success"  });

    SetData([ 
        ...data,
        { id: String(data.length + 1), nombre: nombre, correo: email,edad: edad,cargo: cargo,telefono: telefono },
      ]);

    //ACA ESTA MI DUDA: YA QUE ME FUNCIONA COMO AMBOS METODOS, usando ...dataFilter y ...data o es lo mismo?
      SetDataFilter([ 
        ...dataFilter,
        { id: String(data.length + 1), nombre: nombre, correo: email,edad: edad,cargo: cargo,telefono: telefono },
      ]);      

    // IGUAL FUNCIONA?
    // SetDataFilter([
    //     ...data,
    //     { id: String(data.length + 1), nombre, correo: email, edad, cargo, telefono },
    //   ]);    

    // SetExito(false);
    SetError(false);
    setNombre("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");

  };

  return (
    <>
      <div className="col-xs-6 col-md-4">
      <h4>Ingreso Colaborador</h4>
        <form onSubmit={validarDatos}>
          {/* {error ? <p>Todos los campos son obligatorios</p> : null}
          {exito ? <p>Ok</p> : null} */}
          <div className="mb-3">
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="edad"
              placeholder="Edad"
              className="form-control"
              onChange={(e) => setEdad(e.target.value)}
              value={edad}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="cargo"
              placeholder="Cargo"
              className="form-control"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="telefono"
              placeholder="Telefono"
              className="form-control"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-dark mb-3" type="submit">
              Agregar Colaborador
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
