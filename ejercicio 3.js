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
