import React from "react";

const Buscador = ({ data, dataFilter }) => {
  const inputHandler = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarPalabra) ||
        colaborador.correo.toLowerCase().includes(buscarPalabra) ||
        colaborador.edad.toString().includes(buscarPalabra) ||
        colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
        colaborador.telefono.toLowerCase().includes(buscarPalabra)
    );

    dataFilter(resultado);
  };

  return (
    <>
      <div className="col-12 col-md-6">
        <input
          type="text"
          name="buscador"
          id="buscador"
          placeholder="Buscar Colaborador"
          className="form-control mb-3"
          onChange={inputHandler}
        />
      </div>
    </>
  );
};

export default Buscador;
