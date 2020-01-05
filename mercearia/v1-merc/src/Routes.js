import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import New from './pages/New'
import Editar from './pages/Editar'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={New} />
        <Route path="/Editar" component={Editar} />
      </Switch>
    </BrowserRouter>
  )
}