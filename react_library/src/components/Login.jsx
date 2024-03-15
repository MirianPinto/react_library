import Modal from "./Modal";
import "../components/login.css";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();

  const funcion = () => {
    history("/Home");
  };
  return (
    <>
      <header id="header">
        <h1 style={{ color: "white", padding: "10px", paddingLeft: "50px" }}>
          LOG IN
        </h1>
      </header>

      <section id="backgroundLogin">
        <div className="formularioLogin">
          <Modal Boton={<Boton nombre={"sumit"} funcion={funcion} Titutlo1={"Email"} placeholder1 ={"Enter Email"} Titulo2={"Password"} placeholder2 ={"Enter Password"}/>} />
        </div>
      </section>

      <footer id="Footer"></footer>
    </>
  );
};

export default Login;
