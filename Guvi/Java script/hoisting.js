// console.log("Hoisting")

// const arr =[1,2,3,4,5,6,7];
// console.log(arr)

// // arr methods

// console.log("----array methods----------");
// console.log("----before 'pushing' a value last------ ")

// arr.push(10,17,20);
// console.log("--------after pushing ---------");

// console.log(arr);
// console.log("-----------------pop method-------")

// arr.pop();
// arr.pop();
// console.log(arr);

// console.log("------unshift method-------");

// arr.unshift(17,18,19);
// console.log(arr);

// console.log("------shift-------");

// arr.shift();
// arr.shift();
// console.log(arr);

// console.log("------completed array methods------");

// // function recap

// function myname () {
//     console.log("my name is sathiya");
//     return "sathiya";
// }
// console.log("normal function")
// let name = myname();
// console.log(name);

// // arrow function

// let arrowmyname = ()=>{
//     return " sathiya kumar murali from arrow function";
// }

// let arrowname = arrowmyname();
// console.log(arrowmyname());
// console.log(arrowname);

// // slice method "this only gives you the index from which you need to end is exclusive and start is inclusive"

// console.log("------------slice method--------")
// console.log("before slice", arr);
// let sliced = arr.slice(0,5);
// console.log("after slice", sliced);


// // splpice can (start, end, value1 to add, value 2 to add, value 3 to add,.......can add howmany ever values...)
// console.log("--------splice method--------");
// console.log("before splice", arr);
// arr.splice(2,5,65,9887,87);
// console.log("after splice", arr);



console.log("------------MRF ------");
console.log("--------MAP-------------")

let mrfarr =[1,2,3,4,5,6,7,8,9,10];

mrfarr.map((value, index, accArr) => {
console.log('value:${value}, index:${index}, ActualArr : ${accArr}');
});
// let arrowname = mynamefn();
// console.log(mynamefn);
// console.log(arrowname);

// let studentsdata = [
//     { name : "student1", Batch : "fsd-we-11", marks : 90},
//     { name : "student2", Batch : "fsd-we-12", marks : 24},
//     { name : "student3", Batch : "fsd-we-13", marks : 50},
//     { name : "student4", Batch : "fsd-we-14", marks : 74},
// ];

// console.log('>>>>>>>>>>>>>map--------');

// const result = studentsdata.map((students)=>{
//     return students.marks+10;
// })
// .filter ((marks)=> {
//     return marks >= 40;
// })
// .reduce ((acc, value, index)=>{
//     acc += value;
//     return acc / (index + 1);
// },0);

// console.log(result.toFixed(1));


