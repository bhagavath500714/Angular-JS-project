import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-map-filter-reduce',
  templateUrl: './map-filter-reduce.component.html',
  styleUrls: ['./map-filter-reduce.component.scss']
})

// js

// const arr = [5, 1, 3, 2, 6];

// const users = [
//   { firstName: "akashay", lastname: "saini", age: 26 },
//   { firstName: "donald", lastname: "trump", age: 75 },
//   { firstName: "elon", lastname: "musk", age: 50 },
//   { firstName: "deepika", lastname: "padukone", age: 26 },
// ];

// function double(x) {
//   return x * 2;
// }
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(double);
// const output = arr.map(binary);

// -- arrow func --

// const output = arr.map((x) => {
//   return x.toString(2);
//  });

// console.log(output);

// -------- Filter ----
// function isOdd(x) {
//   return x%2;
// }

// const fOutput = arr.filter(isOdd);

// ------ Reduce function we go with normal function --

// sum or max

// function findSum (arr) {
//   let sum = 0;
//   for(let i=0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum
// }
// console.log(findSum(arr));

// == finf max value in array

// function findMax (arr) {
//   let max = 0;
// if array value graeter that current value we override with max avalue
//   if(arr[i] > max) {
//       max = arr[i]
//     }
//   return max
// }
// console.log(findMax(arr));


// // -- now we write reduce function 
// arr[i] = acc -> accumulator
// sum = curr -> current

// reduce take 2 perameter one as function other as intial __values

// const routput = arr.reduce(function (acc, curr){
//   acc = acc + curr;
//   return acc;
// }, 0);

// 0 is intial value 

// console.log(routput);

// using reducer
// const moutput = arr.reduce(function (max, curr){
//   if(curr > max){
//         max = curr;
//       }
//   return max;
// }, 0);
// console.log(moutput);

// ----- New example with user for map list of full names ------

// const loutput = users.map((x) => x.firstName + x.lastName);
// console.log(loutput);

// --- find same age  o/p -> {26:2, 75:1, 50:1}
// const aoutput = users.reduce(function (acc, curr) {
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(aoutput);

// =========== filter Find the users first name whoes age is less than 30

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output);

export class MapFilterReduceComponent implements OnInit {
  arr: number[] = [5, 1, 3, 2, 6];
  output: any[] = [];
  output1: any[] = [];
  binaryOut: any[] = [];
  fOutput: any[] = [];
  feOutput: any[] = [];
  rOutput?: number;
  maxOutput?: number;
  rflnameOutput: string[] = [];
  ageOutput: any;
  filterNameOutput: string[] = [];
  reduceFirstName: any;

  users = [
    { firstName: "akashay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
  ];


  constructor() { }

  ngOnInit(): void {
    this.checkMap()
    this.checkFilter()
    this.checkReduce()

    this.realMap()
    this.realReduceAge()
    this.realFilerName()
    this.realReduceFirstNames()
  }

  // transfermation logic
  double(x: number): number {
    return x * 2;
  }

  trible(x: number): number {
    return x * 3;
  }

  // binary(x:number): string {
  //   return x.toString(2);
  // }


  checkMap() {
    this.output = this.arr.map((x) => this.double(x));
    this.output1 = this.arr.map((x) => this.trible(x));

    // arrow function
    // this.binaryOut = this.arr.map((x) => {
    //   return x.toString(2);
    // });

    // arrow function with onle which return something we can remove return {}
    this.binaryOut = this.arr.map((x) => x.toString(2));

    console.log(this.output);
    console.log(this.output1);
    console.log(this.binaryOut);
  }

  checkFilter() {
    this.fOutput = this.arr.filter((x) => x % 2);
    this.feOutput = this.arr.filter((x) => x % 2 === 0);
    // get filter all value greater than 4
    // this.aOutput = this.arr.filter((x) => x > 4);
    console.log(this.fOutput);
    console.log(this.feOutput);
  }

  checkReduce () {
    this.rOutput = this.arr.reduce((acc, curr) => acc + curr, 0);
    console.log(this.rOutput);

    this.maxOutput = this.arr.reduce((max, curr) => (curr > max ? curr: max), 0);
  }

  realMap() {
    this.rflnameOutput = this.users.map((x) => x.firstName + " " + x.lastName);
  }

realReduceAge() {
  this.ageOutput = this.users.reduce((acc:any, curr) => {
    if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  console.log(this.ageOutput);
}

realFilerName() {
  this.filterNameOutput = this.users.filter((x) => x.age < 30).map((x) => x.firstName);
  console.log(this.filterNameOutput);
  
}

realReduceFirstNames() {
  this.reduceFirstName = this.users.reduce(function(acc:any,curr){
    if(curr.age<30){
            acc.push(curr.firstName);
    }
    return acc
  },[]);
  console.log(this.reduceFirstName);
  
}
}
