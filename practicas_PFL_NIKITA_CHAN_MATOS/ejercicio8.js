function comparacion (array1,array2){
    var band=true;
    for(let i=0; i<array1.length;i++){
        if(array1[i]!=array2[i]){
            band=false;
        }
    }
    return band? true: false;
}

let array1 =[1,2,3,4,5]; 
let array2 =[1,2,3,4,5]; 
console.log(comparacion(array1,array2));