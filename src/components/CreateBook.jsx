import React, { useState } from "react";
import axios from "axios";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [amountPage, setAmountPage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    console.log("Nombre:", title);
    console.log("Email:", author);
    console.log("Contraseña:", amountPage);

    const datosFormulario = {
      title,
      author,
      amountPage,
      price,
      stock,
    };
    axios
      .post("http://localhost:3001/books", datosFormulario)
      .then((response) => {
        // La solicitud fue exitosa
        console.log("Registro exitoso");
        // Aquí puedes realizar cualquier acción adicional, como redireccionar a otra página
      })
      .catch((error) => {
        // La solicitud falló
        console.error("Error en el registro:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="container">
        <div class="form-group">
          <label htmlFor="nombre">Titulo:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="amountPage">Numer de paginas:</label>
          <input
            type="text"
            id="amountPage"
            value={amountPage}
            onChange={(e) => setAmountPage(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </div>
    </form>
  );
}

export default CreateBook;
