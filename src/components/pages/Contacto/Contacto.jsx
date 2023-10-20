import { useState } from "react";
import "./Contacto.css";
import Modal from "../../Modal/Modal";
/* eslint-disable react/no-unknown-property */
const Contacto = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || description === "") {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
    } else {
      setError(false);
      setMensaje("Gracias por contactarnos en breve respondemos a tu correo");
      setDescription("");
      setEmail("");
    }
  };
  return (
    <div className="container" id="contacto">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button id="enviar" type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
      <div className="p-3">
        {error && mensaje ? (
          <Modal tipo={"alert alert-danger alert-dismissible fade show"} texto={mensaje} />
        ) : !error && mensaje ? (
          <Modal tipo={"alert alert-success alert-dismissible fade show"} texto={mensaje} />
        ) : null}
      </div>
    </div>
  );
};

export default Contacto;
