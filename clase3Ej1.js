const integrantes = [{nombre: "Adam"},{nombre: "Usain"},{nombre: "Roger"}]

async function competir(integrantes) {
    console.log("Empieza la carrera..");
    let podioPromises = integrantes.map((integ) => {
      //console.log(integ.nombre);
        return correr(integ.nombre);
    });
    
    const llegada = await Promise.all([...podioPromises]);
    const podio = [...llegada].sort((a,b) => {
            return a.t - b.t;
        }).map(w => w.data);
    
    console.log(...podio);
  }
  
  async function correr(nombre) {
    const duracion = (Math.floor(Math.random() * (10 - 3 + 1)) + 3 );
    let mensaje = `${nombre} - Tiempo (${duracion}s)`;
    //console.log(mensaje);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data:mensaje, t:duracion});
            //console.log(mensaje);
          }, (1000 * duracion));
      });
  }
  
  competir(integrantes);


  const segundaCarrera = [{nombre: "Adam1"},{nombre: "Usain1"},{nombre: "Roger1"},{nombre: "Geronimo1"},{nombre: "Mariano1"},
  {nombre: "Adam2"},{nombre: "Usain2"},{nombre: "Roger2"},{nombre: "Geronimo2"},{nombre: "Mariano2"},
  {nombre: "Adam3"},{nombre: "Usain3"},{nombre: "Roger3"},{nombre: "Geronimo3"},{nombre: "Mariano3"},
  {nombre: "Adam4"},{nombre: "Usain4"},{nombre: "Roger4"},{nombre: "Geronimo4"},{nombre: "Mariano4"}]

  competir(segundaCarrera);