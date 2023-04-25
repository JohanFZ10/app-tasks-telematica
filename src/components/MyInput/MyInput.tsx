import React from "react";
import { styles } from "./styles";

interface Props {
  name: string,
  type: string,
  fondo: string,
}

export const MyInput = ({ name, type, fondo }: Props) => {

  return (
    <input style={styles.inputs} type={type} placeholder={name} />
  );
};

