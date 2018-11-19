console.log("JavaScripts")
confirm ("Hello")

let object = {
    name : "Licen",
    university : "UIB",
    year : 2018,
    friends : ["Charlie", "Gilang", "Farhan"]
};
console.log(object);
console.log(object.university);

moment.locale('id');
console.log(moment().format('LLLL'));
let tgl = moment();
console.log(tgl.format('dddd, YYYY DD MMMM'))
let tgl2 = tgl.format('dddd, YYYY DD MMMM');
let pesan = `hari ini adalah ${tgl2}`;
console.log(pesan);
console.log(`hari ini adalah ${tgl2}`);

// let grade = window.prompt("my grade is ")
// let result = '';
// if (grade>= 90){
//     result = "A";
// } else if (grade >= 80){
//     result = "B";
// } else if (grade >= 70){
//     result = "C"
// } else if (grade >= 60){
//     result = "D"
// } else {
//     result = "you failed"
// }
// window.alert (`your score is ${result}`)

const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";

console.log(sentenceA);
console.log(sentenceB);

const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(sentenceA.toUpperCase());
console.log(sentenceB.toUpperCase());

let cars = ["BMW", "Volvo", "Saab", " Ford"];
console.log(cars);

let names = [
    "Mr. Fahri", 
    "Mr. Abdul", 
    "Mrs. Josephine", 
    "Mr. Joseph", 
    "Mr. Paul", 
    "Mrs. Paula",
    "Mr. Hakim"];
console.log(names);


let filteredList = names.filter(name =>{return name[2]=== "."});
console.log(filteredList);
