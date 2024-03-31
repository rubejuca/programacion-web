// eslint-disable-next-line no-unused-vars
import React from "react";
import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
export const List_Contact = ({ list_contact }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Imagen</th>
        </tr>
      </thead>

      <tbody>
        {list_contact.map((element, index) => {
          return (
            <tr key={index}>
              <td>{element.identify}</td>
              <td>{element.names}</td>
              <td>{element.telephone}</td>
              <td>
                <img src={element.image} alt={element.image} width="50" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
