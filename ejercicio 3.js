const series = [
    {nombre:"game of thrones", ano:2013},
    {nombre:"better call saul", ano:2015},
    {nombre:"smile friends", ano:2020},
]

function ordenarSeries(series, asc){
    let orden = [{}];
    if(asc){
        orden = [...series].sort((a,b) => {
            return a.ano - b.ano;
        })
    }else{
        orden = [...series].sort((a,b) => {
            return b.ano - a.ano;
        })
    }
    return orden;
}

function quitarSerie(series, titulo){
    let nuevo = [{}];
    nuevo = series.filter(ser => ser.nombre != titulo)
    return nuevo;
}

function titulosCompletos(series){
    const comp = series.map((serie)=> {
        return {nombre:serie.nombre+'('+serie.ano+')'};
    })
}
