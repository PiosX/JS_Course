// && - i
// || - lub
// ! - zaprzeczenie

/*
    && - wszystkie warunki musza byc prawdziwe
    || - zwraca false gdy wszystkie warunki sa falszywe
*/

if(!(5>0 && 5<4)) {
    console.log('good');
} else {
    console.log('bad');
}