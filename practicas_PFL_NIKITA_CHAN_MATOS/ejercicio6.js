var str = () => 'donna';
 
var myArr = [ 10, 100, 200, 'donna', NaN, Infinity ];
 
console.info( myArr.includes( NaN ) ); // true
console.info( myArr.includes( 'niki' ) ); // true
console.info( myArr.includes( str() ) ); // true
console.info( myArr.includes( 'don' ) ); // false