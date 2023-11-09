import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const Listado = ({ baseColaboradores }) => {
  const [listaColaboradores, setListaColaboradores] =
    useState(baseColaboradores);

  return (
    <>
      <h2>Listado de Colaboradores</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {listaColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;