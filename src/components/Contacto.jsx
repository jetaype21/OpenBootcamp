import React from 'react'

export const Contacto = (props) => {
  return (
    <div>
      <p>NOMBRE: {props.nombre}</p>
      <p>APELLIDO: {props.apellido}</p>
      <p>EMAIL: {props.email}</p>
      <p>CONECTADO {props.conectado ? 'Contacto en linea' : 'Contacto no disponible'}</p>
    </div>
  )
}