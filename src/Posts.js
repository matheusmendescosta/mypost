import React from "react";

// import { Container } from './styles';

function posts(props) {
  return (
    <>
      <strong>{props.autor}</strong>
      <p>{props.conteudo}</p>
    </>
  );
}

export default posts;
