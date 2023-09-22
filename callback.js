"use strict";
// // Call Back
// function carMaintenance(cb:(text:string)=>void){
//   console.log("leave car at mechanic")
//   setTimeout(()=>{
//     console.log("your car is ready")
//     cb("pick your car")
//   },9000)
// }
// function pickDress(cb:(text:string)=>void){
//   setTimeout(()=>{
//     console.log("your dress is ready")
//     cb("pick your dress")
//   },100)
// }
// function attendEvent(cb:(text:string)=>void){
//   console.log("attend event")
//   cb("now you can go home")
// }
// function backToHome(){
//   console.log("return home")
// }
// carMaintenance(function carMaint(text:string){
//   console.log("car maint call back", text);
//   pickDress(function dressReady(text:string){
//     console.log("pick your dress ready 1",text)
//   })
//   attendEvent(function eventclose(text:string){
//     console.log("attend event 1", text)
//   })
//   backToHome()
// }
//               )
//   promise// // Promise Chaining
function carMaintenance1() {
    console.log("I leave my car at 9 in workshop");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    });
}
function pickDress1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("pick your dress");
        }, 100);
    });
}
function attendEvent1() {
    return new Promise((resolve, reject) => {
        console.log("Now you can attend the event");
        resolve("Now you can go home");
    });
}
function BacktoHome1() {
    console.log("reached home");
}
carMaintenance1()
    .then(pickDress1)
    .then(attendEvent1)
    .then(BacktoHome1);
