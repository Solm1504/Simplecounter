import React, { useState } from 'react';

function Contador() {
  const [segundos, setSegundos] = useState(0);
  const [tiempoAgotado, setTiempoAgotado] = useState(false);

  const incrementarSegundos = () => {
    setSegundos(segundos + 1);
  };

  setInterval(incrementarSegundos, 1000);

  const alertarTiempoAgotado = () => {
    setTiempoAgotado(true);
  };

  setTimeout(alertarTiempoAgotado, 4000);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/fotos-premium/muchos-relojes-diferentes_127657-3712.jpg')`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div className="bg-light border rounded p-3">
        <div className="row">
          <div className="col align-self-start text-primary h3">
            Don't waste your time! 
          </div>
          <div className="col align-self-center text-center">
            <p className="display-1"> {segundos}</p>
          </div>
          <div className="col align-self-end">
            {tiempoAgotado && (
              <p className="text-danger h4">Make it count!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
