var seg=9690;
var h= Math.floor(seg/3600);
var min= Math.floor((seg % 3600) / 60);
var segu=seg % 60;

console.log("Los " + seg + " segundos " + " en horas son: " + h + " horas.");
console.log("Los " + seg + " segundos " + " en minutos son: " + min + " minutos.");
console.log("Los " + seg + " segundos " + " en segundos son: " + segu + " segundos.");