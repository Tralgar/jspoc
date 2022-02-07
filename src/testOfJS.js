// Somes test done to understand JS :D

const cloningTest = () => {
  var Food = {
    cuisine: 'abc'
  };
  var food1 = Object.create(Food);
  delete food1.cuisine;

  console.log(food1.cuisine);
};

// Primitive types are passed by value, while the rest of the objects (Function, Array, Object) are passed by reference.
function referenceTest(myObject) {
  let newObject = {
    id: myObject.id,
    title: myObject.title,
    stats: myObject.stats,
  };

  newObject.title = 'new title';
  newObject.stats.hp = 1000;

  console.log(newObject);
  console.log(myObject);
}

const reference2Test = () => {
  let person = { name: "Lydia" };
  const members = [person];
  person = null;

  console.log(members);
};

const immutableTest = () => {
  let name = "leo";
  name[2] = "a";

  console.log(name);
};

const immutableStrictTest = () => {
  "use strict";
  let name = "leo";
  name[2] = "a";

  console.log(name);
};

class ScopeTest {
  test() {
    console.log('test', this);
    function test1() {
      console.log('test1', this);
    }
    const test2 = function() {
      console.log('test2', this);
    };
    const test3 = () => console.log('test3', this);
    test1();
    test2();
    test3();
  }
}

// A closure is a function that remembers the parent scope where it was defined, even if that parent scope has already ran
function closureTest() {
  const increase = () => {
    let count = 0;

    const increment = function() {
      count++;
      console.log(count)
    };

    return increment;
  };

  const inc = increase();
  inc();
  inc();
}

// Hoisting in Lexical Environment (identifier-variable mapping) during "creation phase"
/* All declarations (function, var, let, const and class) are hoisted in JavaScript,
while the var declarations are initialized with undefined, but let and const declarations remain uninitialized. */
function varOrConst() {
  console.log(varone);
  console.log(vartwo);

  var varone = 1;
  const vartwo = 2;
}

cloningTest();
referenceTest({ id: 1, title: 'my title', stats: { hp: 100, mana: 100 }});
reference2Test();
immutableTest();
immutableStrictTest();
new ScopeTest().test();
closureTest();


// How to get console.log(obj.a, obj.a, obj.a); => 1 2 3

const obj = {
  value: 0,
  get a() {
    this.value++;
    return this.value;
  },
};

console.log(obj.a, obj.a, obj.a);


// javascript execution queues
const race1 = () => {
  setTimeout(() => console.log("Horse A"), 0);
  // wait60Seconds();
  console.log("Horse B")
}

race1();
// Horse B
// Horse A
//  Synchronous operations always take precedence in JavaScript. The event loop will never dequeue an asynchronous
//  operation while there are any sort of synchronous functions being pushed on the stack, no matter how long it takes.

const race2 = () => {
  setTimeout(() => console.log("Horse A"), 0);
  const promise = Promise.resolve();
  promise.then(() => console.log("Horse B"));
  console.log("Horse C")
}

race2();
// Horse C
// Horse B
// Horse A
// coz microtask queue (originally called PromiseJobs ) that specifically manages Promises.


// Ledger Test : 
// const fromPairs = (elements) => {
  
//   const object = {};
  
//   elements.forEach(element => {
    
//     object[element[0]] = element[1];
//   });
             
//   return object;
// }

// const res = fromPairs([
//   ["a", 1],
//   ["b", 2],
// ]);
// // => { 'a': 1, 'b': 2 }

// console.log(res)

// const flattenDepth = (array, depth) => {
//   let flattened = [];
//   array.forEach(value => {
//     if (Array.isArray(value) && depth >= 1)
//       flattened = flattened.concat(flattenDepth(value, depth - 1));
//     else
//       flattened.push(value);
//   });
  
//   return flattened;
// }

// const array = [1, [2, [3, [4]]], 5]

// const res = flattenDepth(array, 1);
// console.log(res);
// // => [1, 2, [3, [4]], 5]

// const res2 = flattenDepth(array, 2);
// // => [1, 2, 3, [4], 5]
// console.log(res2);

// function add(a, b) {
//   return a + b;
// }

// function square(n) {
//   return n * n;
// }

// const flow = (callbacks) => (...params) => {
//   return callbacks.reduce((acc, callback) => {
//     return [callback(...acc)];
//   }, params)[0];
// }

// const addSquare = flow([add, square]);
// const res = addSquare(1, 2);
// console.log(res)
// // => 9

// pic1: https://user-images.githubusercontent.com/211411/89523634-7a711200-d7e3-11ea-9e43-6d8ecd0250f2.png
// pic2: https://user-images.githubusercontent.com/211411/89523628-77762180-d7e3-11ea-9e84-86e3e7a85e2e.png

// prettier-ignore
const accounts = [{"usdBalance":8.94,"balance":2547.2,"operations":[{"date":1596182061000,"value":1},{"date":1596182012000,"value":1},{"date":1593596465000,"value":500},{"date":1593596465000,"value":-500.226},{"date":1593421197000,"value":449},{"date":1593421197000,"value":-449.226},{"date":1593169928000,"value":2000},{"date":1593169928000,"value":-2000.226},{"date":1593168747000,"value":-1000.226},{"date":1593074058000,"value":-1.226},{"date":1593073216000,"value":-42.226},{"date":1593073152000,"value":-1.426},{"date":1591120198000,"value":-10.00000226},{"date":1590954610000,"value":-20.00000226},{"date":1590757275000,"value":-1.00000226},{"date":1589966865000,"value":-20.226},{"date":1589627057000,"value":-5.0000022600000005},{"date":1589618876000,"value":-1.00000374},{"date":1581418956000,"value":1},{"date":1581418956000,"value":-1.226},{"date":1581081895000,"value":3648.46340367},{"date":1581081895000,"value":-3649.09940367}],"currencyId":"dogecoin"},{"usdBalance":1.62,"balance":0.0044098,"operations":[{"date":1582640230000,"value":-0.000059072000000000006},{"date":1582640123000,"value":-0.000059072000000000006}],"currencyId":"ethereum"},{"usdBalance":0.16,"balance":44.32,"operations":[{"date":1596182061000,"value":-1.2},{"date":1596182012000,"value":-1.226},{"date":1594384212000,"value":20},{"date":1594384212000,"value":-20.226},{"date":1593168397000,"value":0.2},{"date":1593168397000,"value":-0.426},{"date":1593074058000,"value":1},{"date":1593073216000,"value":42},{"date":1593073184000,"value":2},{"date":1593073151000,"value":1.2},{"date":1555169370000,"value":1}],"currencyId":"dogecoin"},{"usdBalance":0,"balance":0.1,"operations":[{"date":1582640230000,"value":0.0001},{"date":1582640230000,"value":-0.0001},{"date":1582640123000,"value":0.0001},{"date":1582640123000,"value":-0.0001},{"date":1582640123000,"value":0.0001},{"date":1582640123000,"value":-0.0001},{"date":1582639559000,"value":0.0001},{"date":1582639559000,"value":-0.0001},{"date":1582639559000,"value":0.001},{"date":1582639559000,"value":-0.001},{"date":1582638742000,"value":0.001},{"date":1582638742000,"value":-0.001},{"date":1582638376000,"value":0.0001},{"date":1582638376000,"value":-0.0001},{"date":1582638229000,"value":0.0001},{"date":1582638229000,"value":-0.0001},{"date":1582638043000,"value":0.001},{"date":1582638043000,"value":-0.001},{"date":1582637710000,"value":0.00001},{"date":1582637710000,"value":-0.00001},{"date":1582637680000,"value":0.00001},{"date":1582637680000,"value":-0.00001},{"date":1582637486000,"value":0.001},{"date":1582637486000,"value":-0.001},{"date":1582636016000,"value":0.001},{"date":1582636016000,"value":-0.001},{"date":1565618009000,"value":0.1}],"currencyId":"amberToken"},{"usdBalance":0,"balance":0.1,"operations":[{"date":1555327189000,"value":0.1}],"currencyId":"dogecoin"},{"usdBalance":0,"balance":0.09,"operations":[{"date":1582639559000,"value":0.001},{"date":1582639559000,"value":-0.001},{"date":1582628047000,"value":-0.01},{"date":1561151893000,"value":0.1}],"currencyId":"daiToken"}]

// type Account = {
//   usdBalance: number,
//   balance: number,
//   operations: Operation[], // sorted by date, recent operations first
//   currencyId: string
// }

// type Operation = {
//   date: number, // timestamp
//   value: number
// }

const assetsAllocation = (accounts) => {
  const res = accounts.reduce((acc, account) => {
    const { currencyId, usdBalance, balance } = account;
    if (acc[currencyId]) {
      return { ...acc, [currencyId]: { currencyId, usdAmount: acc[currencyId].usdAmount + usdBalance, amount:     acc[currencyId].amount + balance }}  ;
    }
    else {
      return {...acc, [currencyId]: { currencyId, usdAmount: usdBalance, amount: balance } };
    }
  }, [])
  
  return Object.values(res);
}

console.log("assetsAllocation", assetsAllocation(accounts));

// [
//   { currencyId: "dogecoin", amount: 2591.62, usdAmount: 9.1 },
//   { currencyId: "ethereum", amount: 0.0044098, usdAmount: 1.62 },
//   { currencyId: "amberToken", amount: 0.1, usdAmount: 0 },
//   { currencyId: "daiToken", amount: 0.09, usdAmount: 0 },
// ];
