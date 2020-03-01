function matematicas(con1,con2) {
    let union = new Set([...con1, ...con2]);
    let inter= new Set([...con1].filter(x => con2.has(x)));
    let dif = new Set([...con1].filter(x => !con2.has(x)));
    console.log("Union:");
    console.log(union);
    console.log("Interseccion:");
    console.log(inter);
    console.log("Diferencia:");
    console.log(dif);
}
console.log("resultado es:")
let con1 = new Set([1,2,3,4,5]);
let con2 = new Set([2,6,4,7]);
matematicas(con1,con2);