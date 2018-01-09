fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(input, action) {
      if (input.constructor === Array) {
	       for (i = 0; i < input.length; i++) {
           action(input[i]);
         }
      } else {
	       for (var key in input) {
		        action(input[key]);
          }
        }
    },

    map: function(input, func) {
      const final = [];
      if (input.constructor === Array) {
	       for (i = 0; i < input.length; i++) {
           final.push(func(input[i]));
         }
      } else {
	       for (var key in input) {
		        final.push(func(input[key]));
          }
        }
        return final;
    },

    // const reduceHelper = function(acc, arr){
    //   for (let i = 0; i < arr.length, i++) {
    //     acc += arr[i];
    //   }
    //   return acc
    // },

    reduce: function(input, func, acc) {
      if (input.constructor === Array) {
        return func(acc, input)
      } else {
        val_array = Object.values(input)
        return func(acc, val_array)
      }
    },

    find: function(input, matcher) {
      for (let i = 0; i < input.length; i++) {
        if (matcher(input[i])){
          return input[i];
        };
      }
    },

    filter: function (input, matcher) {
      const final = [];
      for (let i = 0; i < input.length; i++) {
        if (matcher(input[i])){
          final.push(input[i]);
        };
      }
      return final;
    },

    size: function (input) {
      let final = 0;

      if (input.constructor === Array) {
        for (let i = 0; i < input.length; i++) {
            final ++;
          };
      } else {
        for (key in input) {
          if (input.hasOwnProperty(key)) final ++;
        }
      }

      return final;
    },


    first: function (arr, n=1) {
        return arr.slice(0,n)
    },

    last: function (arr, n=1) {
        return arr.slice(-1*n)
    },


    compact: function (input) {
      const final = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i]){
          final.push(input[i]);
        };
      }
      return final;
    },

    sortBy: function (arr, func) {
      let final = [...arr];

      return final.sort(func);
    },

    uniq: function (arr) {
      let final = [arr[0]];

      for (let i = 0; i < arr.length; i++) {

        if (!final.includes(arr[i])) {
          final.push(arr[i]);
        }
      }
      return final;
    },

    keys: function (obj) {
      let final = [];
       for (key in obj) {
         final.push(key);
       }

      return final;

    },

    values: function (obj) {
      let final = [];
       for (key in obj) {
         final.push(obj[key]);
       }
      return final;
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
