import React from 'react'
import { Contacto } from './Contacto'

export default function ComponenteB({contacto}) {
  return (
    <div>
      <Contacto
        nombre='juan'
        apellido='taype'
        email='taype@gmail.com'
        conectado={contacto ? true : false}
      />
    </div>
  )
}
