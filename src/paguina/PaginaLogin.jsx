import React from 'react';
import BarraNavegacion from '../componentes/BarraNavegacion';

function PaginaLogin() {
  return (
    <div>
      <BarraNavegacion />
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default PaginaLogin;