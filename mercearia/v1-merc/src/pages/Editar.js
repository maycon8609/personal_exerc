import React from 'react'
import './Editar.css'

export default function Editar() {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>Editar Funcionario</p>
        </div>

        <form>
          <div className="row">
            <div className="col-25">
              <label>Editar Funcionario</label>
            </div>
            <div className="col-75">
              <input type="text" name="edit" placeholder="Digite o COD Para Editar" />
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Buscar" />
          </div>
        </form>
      </div>
    </>
  )
}