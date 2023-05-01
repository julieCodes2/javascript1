// //8 bbasic data types in JS
// let str = "Hello"; //string
// let nameFieldChecked = true; //boolean has only two values; true or false
// let age = null; //null; age is unkown;
// let age; //undefined; value is not assigned
// //objects and symbols
// //the typeof operator
// let age = 3; //number
// //bigInt

function getDepth() {
    return parseFloat(prompt("please enter the house depth"));
}
function getWidth(){
    return parseFloat(prompt("please enter the house width"));
}
function getHeight(){
    return parseFloat(prompt("please enter the house height"));
}
function getSweep (){
    return parseFloat(prompt("please enter the house sweep"));
}
function houseVolume(width, depth, height, sweep){
    return livingVolume(width, depth, height)+roofVolume(width, depth, sweep);
}
function livingVolume (width, depth, height){
    return width * depth * height;
}
function triangleArea (a,b,c) {
    let p = (a+b+c)/2;
    return Math.sqrt (p*(p-a) * (p-b) * (p-c));
}
function roofVolume(width, depth, sweep) {
    let triangle = triangleArea (width, depth, sweep);
        return triangle * depth;
}
let houseWidth = getWidth();
let houseDepth = getDepth(); 
let houseHeight = getHeight();
let houseSweep = getSweep ();
alert("The volume of the house is:" + houseVolume(houseWidth, houseDepth, houseHeight, houseSweep));
