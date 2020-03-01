function orden() {
    var ordenado=true;
    for (let i = 0; i < arguments.length; i++) {    
        if (i + 1 < arguments.length) {
            if (arguments[ i ] > arguments[i + 1]) {
                ordenado = false;
                break;
            }
        }      
    }
    return (ordenado)?true:false;
   // return (ordenado)?console.log("La lista ordenada"):console.log("La lista desordenada");
}
console.log(orden(1,2,3,75,6,7));