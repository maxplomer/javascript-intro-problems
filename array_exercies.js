//////////Array exercises/////////////

// output elements works!
Array.prototype.sayElements = function (){
  for (i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};

// uniq

Array.prototype.myUniq = function (){
  var uniq_array = [];

  for (i = 0; i < this.length; i++) {
    if (uniq_array.indexOf(this[i]) === -1) {
      uniq_array.push(this[i]);
    }
  }

  return uniq_array;
};


// twoSum

Array.prototype.twoSum = function () {
  var results = [];

  for (i = 0; i < (this.length - 1); i++) {
    for (j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        results.push([i, j]);
      }
    }
  }

  return results;
};

// transpose

Array.prototype.myTranspose = function () {
  var len = this.length;
  var result = new Array(len)
  for (i = 0; i < len; i++) {
    result[i] = new Array(len);
  }

  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      result[i][j] = this[j][i];
    }
  }

  return result;
};

//////////Enumerable exercises/////////////

// doubleArray
var doubleArray = function(arr) {
  result = []

  for (i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }

  return result;
};

// myEach
var sayHello = function (x) {
  console.log(x)
}

Array.prototype.myEach = function (proc) {
  for (i = 0; i < this.length; i++) {
    proc(this[i]);
  }
};

// myMap
var timesTwo = function (x) {
  return x * 2;
};

Array.prototype.myMap1 = function (proc) {
  result = []
  for (i = 0; i < this.length; i++) {
    result[i] = proc(this[i]);
  }
};

Array.prototype.myMap2 = function (proc) {
  var result = []
  result = this.myEach(proc);
  return result;
};

//final version
Array.prototype.myMap3 = function (proc) {
  var result = []
  this.myEach( function (x) {
    result.push(proc(x));
  })
  return result;
};


// myInject
// take a function
// start the accumulator variable with the first value.
// Iterate through the rest.
// use your myEach function


var arrSum = function (val, el) {
  return val + el;
};


Array.prototype.myInject = function (proc) {
  var val = this[0];

  this.slice(1, this.length).myEach( function (x) {
    val = proc(val, x);
  })

  return val;
};


//Iteration exercises

// bubbleSort

var bubbleSort = function (arr) {
  sorted = false;
  var temp = 0;

  while (!sorted) {
    sorted = true
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
};

// substrings

var substrings = function (word) {
  var result = [];
  var substr = "";

  for (i = 0; i < word.length; i++) {
    for (j = i; j < word.length; j++) {

      substr = word.substring(i, j + 1);
      if (result.indexOf(substr) === -1){
        result.push(substr)
      }

    }
  }

  return result;
};

////////////Recursion exercises////////////

// Warmup - recursion

var range = function (start, end) {
  if (end < start) {
    return []
  }

  var result = [start].concat(range(start + 1, end));

  return result;
}

// sum - recursion
var recurSum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + recurSum(arr);
}

var iterSum = function (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Exponentiation

var recurExp1 = function (base1, exp1) {
  if (exp1 === 0) {
    return 1;
  } else {
    return base1 * (recurExp1(base1, exp1 - 1));
  }
};

var recurExp2 = function (base2, exp2) {
  if (exp2 === 0) {
    return 1;
  } else if (exp2 === 1) {
    return base2;
  } else if (exp2 % 2 === 0) {
    recurExp2(base2, exp2 / 2) * recurExp2(base2, exp2 / 2)
  } else {
    return base2 * recurExp2(base2, (exp2 - 1) / 2) * recurExp2(base2, (exp2 - 1) / 2)
  }
};


// Fibonacci

var fib = function (n) {
  if (n === 0) { return []; }
  if (n === 1) { return [0]; }
  if (n === 2) { return [0, 1]; }

  var x = fib(n-1);

  var lastval = x[x.length - 1] + x[x.length - 2];

  return x.concat([lastval]);
}

// Binary Search

// improper use of switch statement
// target is a number, target < array[imid] is a boolean
var bisearch = function(array, target) {
  if (array.length === 0) {
    return null;
  }
  var imid = Math.floor(array.length / 2)
  var left = array.slice(0, imid)
  var right = array.slice(imid, array.length)

  switch (target) {
  case (target < array[imid]):
    return bisearch(left, target);
  case (target === array[imid]):
    return imid;
  case (target > array[imid]):
    var subAnswer = bisearch(right, target);
    if (subAnswer === null) {
      return null;
    } else {
      return imid + subAnswer;
    }
  }

};


// working solution
var bisearch = function(array, target) {
  if (array.length === 0) {
    return null;
  }
  var imid = Math.floor(array.length / 2)
  var left = array.slice(0, imid)
  var right = array.slice(imid, array.length)


  if (target < array[imid]) {
    return bisearch(left, target);}
  if (target === array[imid]) {
    return imid;}
  if (target > array[imid]) {
    var subAnswer = bisearch(right, target);
    if (subAnswer === null) {
      return null;
    } else {
      return imid + subAnswer;
    }
  }

};


// Make Change

//makeChange(14, [10,7,1])


var iterSum = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var makeChange = function (n, coins) {
  makeChangeWork([], n, coins);
};

var makeChangeWork = function (change, n, coins) {
  if (iterSum(change) > n) { return; }
  if (iterSum(change) === n) {
    console.log("you found a solution!", change);
    return;
  }
  for (var i = 0; i < coins.length; i++) {
    makeChangeWork( change.concat([coins[i]]), n, coins);
  }
};

// var makeChangeAA = function(target, coins) {
//   if (target == 0) {
//     return [];
//   }
//   if (/* all coins bigger than target */) {
//     return null;
//   }
//
//   // sort coins in descending order
//
//   var bestChange = null;
//
//   for (i = 0; i < coins.length; i++) {
//     if (coins[i] > target) {
//       continue;
//     }
//     var remainder = target - coins[i];
//
//     bestRemainder = makeChangeAA(remainder, coins.slice(1, coins.length))
//
//     if (bestRemainder === null) {
//       continue;
//     }
//
//     my_change = [coins[i]] + bestRemainder;
//   }
//
// }

// merge_sort

//[6, 5, 3, 1, 8, 7, 2, 4]
var mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr
  }

  console.log(arr)

  var mid = Math.floor(arr.length / 2);

  var leftArr = arr.slice(0, mid);
  var rightArr = arr.slice(mid, arr.length);
  var sortedLeft = mergeSort(leftArr);
  var sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight)

};

var merge = function (left, right) {
  var merged = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
};































