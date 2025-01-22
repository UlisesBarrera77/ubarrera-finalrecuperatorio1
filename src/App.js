import React from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import PaguinaInicio from './paguina/PaguinaInicio';
import PaguinaAutos from './paguina/PaguinaAutos';
import PaguinaRegistro from './paguina/PaguinaRegistro';
import PaginaLogin from './paguina/PaginaLogin';
import DetalleAutos from './componentes/DetalleAutos';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<PaguinaInicio />} />
        <Route path="/autos" element={<PaguinaAutos />} />
        <Route path="/registro" element={<PaguinaRegistro />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/auto/:id" element={<DetalleAutos />} />
        <Route path="*" element={() => <h2>404 No encontrado</h2>} />
      </Routes>
    </Router>
  )
}
export default App;