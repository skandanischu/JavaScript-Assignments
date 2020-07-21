//map

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((eL) => {
    console.log(eL ** 3)
})

let cube = arr.map((el) => el ** 3)
console.log(cube);



//FILTER

let odd = arr.filter(el => el % 3 == 0);

let cubesquares = arr.filter(el => el % 3 == 0).map(el => el ** 3);
console.log(odd)
console.log(cubesquares)