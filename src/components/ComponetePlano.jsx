import React from "react";
export default function ComponentePlano(props) {
  return (
    <>
      <h1 style={{ color: "black" }}>{props.titulo}</h1>

      {props.children}
    </>
  );
}
