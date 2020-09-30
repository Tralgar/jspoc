String.prototype.toTitleCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

console.log('my text in title case'.toTitleCase());

Array.prototype.myMap = function (callback) {
  const values = [];
  for (let i = 0; i < this.length; i++) {
    values.push(callback(this[i]));
  }

  return values;
};

console.log([1, 2, 3].myMap((elem) => elem * 2));
