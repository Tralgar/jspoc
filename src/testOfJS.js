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

cloningTest();
referenceTest({ id: 1, title: 'my title', stats: { hp: 100, mana: 100 }});
reference2Test();
immutableTest();
immutableStrictTest();
new ScopeTest().test();
closureTest();
