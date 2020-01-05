import React from 'react'
import './New.css'

export default function New() {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>Cadastar Funcionario</p>
        </div>
        <form className="form">
          <div className="row">
            <div className="col-25">
              <label>Nome</label>
            </div>
            <div className="col-75">
              <input type="text" name="nome" placeholder=" Nome " />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Id</label>
            </div>
            <div className="col-75">
              <input type="text" name="id" placeholder=" Id Funcionario " />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Fixo</label>
            </div>
            <div className="col-75">
              <input type="number" name="fixo" placeholder=" Salario Fixo " />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Horas</label>
            </div>
            <div className="col-75">
              <input type="number" name="horas" placeholder=" Horas Mensais " />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Valor</label>
            </div>
            <div className="col-75">
              <input type="number" name="valor" placeholder=" Valor Hora " />
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  )
}