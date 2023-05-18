import React, { useState, useEffect } from "react";
import axios from "axios";

function Inicio() {
  const [categorias, setCategorias] = useState([]);
  const URL = "http://localhost:3001/books";

  const getCategorias = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCategorias(data);
  };
  const bookDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      // Actualiza el estado de los datos en tu componente
      // o realiza una nueva solicitud GET para obtener los datos actualizados
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categorias);
  useEffect(() => {
    getCategorias();
    bookDelete();
  }, []);

  return (
    <div className="container">
      <a href="{{ url('cargos/create') }}" class="btn btn-success">
        {" "}
        Nuevo Libro{" "}
      </a>

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso">
            <th>Titulos</th>
            <th>Autor</th>
            <th>cantidad de Paginas</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.title}</td>
              <td>{categoria.author}</td>
              <td>{categoria.amountPage}</td>
              <td>{categoria.price}</td>
              <td>{categoria.stock}</td>
              <td>
                {" "}
                <div class="d-flex flex-row bd-highlight mb-6">
                  <a
                    href="{{ url('/cargos/' . $cargo->id . '/edit') }}"
                    class="btn btn-info"
                  >
                    Editar{" "}
                  </a>
                  |
                  <button
                    class="btn btn-danger"
                    onClick={() => bookDelete(categoria.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inicio;
