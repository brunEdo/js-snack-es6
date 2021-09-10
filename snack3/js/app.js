// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const mySlice = (array, min, max = array.length - 1) => {
    return array.filter((element, i) => {
        return i >= min && i <= max;
    });
}
// const mySlice = (array, min, max = array.length - 1) => array.filter((el, i) => i >= min && i <= max);

const arrayTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("arrayTest", arrayTest);

console.log("mySlice(arrayTest, 3)", mySlice(arrayTest, 3));
console.log("mySlice(arrayTest, 3, 8)", mySlice(arrayTest, 3, 8));
console.log("mySlice(arrayTest, 0, 6)", mySlice(arrayTest, 0, 6));