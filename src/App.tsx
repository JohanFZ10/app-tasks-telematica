import React from "react";
import { MyBoton } from "./components/MyBoton/MyBoton";
import { MyInput } from "./components/MyInput/MyInput";

const App = () => {
  return (
    <div>
      <MyInput fondo = 'red' name="Ingrese su Usuario" type='text'/>
      <MyInput fondo = 'black' name="Ingrese su Constraseña" type='password'/>
      <MyBoton text = "Este es mi texto"/>
      <MyBoton text = "Este es su texto"/>
    </div>
  );
};

export default App;
