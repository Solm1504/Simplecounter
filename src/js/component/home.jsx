import React, { useState, useEffect } from 'react';

function Contador() {
  const [centenas, setCentenas] = useState(0);
  const [decenas, setDecenas] = useState(0);
  const [unidades, setUnidades] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setUnidades(unidades => {
        if (unidades === 9) {
          setDecenas(decenas => {
            if (decenas === 9) {
              setCentenas(centenas => centenas + 1);
              return 0;
            }
            return decenas + 1;
          });
          return 0;
        }
        return unidades + 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

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
            <p className="display-1">{centenas}{decenas}{unidades}</p>
          </div>
          <div className="col align-self-end">
            {(centenas > 0 || decenas > 0 || unidades > 9) && (
              <p className="text-danger h4">Make it count!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
