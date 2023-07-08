const car = {
    model: "Ford",
    color: "Red",
    weight: 500,
}

for(let x in car) {
    console.log(x + ":" + car[x])
}
// console.log(car.model);

const arr = ["Apple", "Mango", "Orange"];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
} // for loop

for(let x in arr){
    console.log(arr[x]);
} // for in loop

// console.log(arr[2]);

// console.log(arr.length);
// arr.push("Banana");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.reverse());

// const str = "hello";
// const str2 = "everyone";

// console.log(str.concat(" " + str2))
// console.log(str.length);
// console.log(str.toUpperCase());
// // similarly to lowercase!

// const replace = str.replace(
//     "Bye!"
// )

// console.log(replace);

// const stri = "       hello     ";
// console.log(str.trim)

var grade = 'F'
switch(grade) {
    case 'A' : console.log("Excellent");
    break;
    case 'B': console.log("Good");
    break;
    case 'C': console.log("Passed");
    break;
    default: console.log("Condition not met")
}