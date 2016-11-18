/**
 *  Short Programming questions functions
 *
 */

function compact(arr) {
  var size = arr.length;
  var err = [];

  if (size > 0) {
    err.push(arr[0]);
    // compactedArray[0] = arr[0]; //Store the first entry to ease iteration process
    for (var i = 1; i < size; i++) {

      if (arr[i - 1] != arr[i]) {
        //compactedArray[i] = arr[i];
        err.push(arr[i]);
      }
    }
    //return compactedArray;
  } else {
    console.log("Insufficient data. Data set must be greater than 0");

  }
  console.log(err);
}
function rotate(nums, k) { // k = 2
  k %= nums.length;
  // {0,1,2,3,4}

  reverse(nums, 0, nums.length - 1); // Reverse the whole Array
  // {4,3,2,1,0}

  reverse(nums, 0, k - 1); // Reverse first part (4,3 -> 3,4)
  // {3,4,2,1,0}

  reverse(nums, k, nums.length - 1); //Reverse second part (2,1,0 -> 0,1,2)
  // {3,4,0,1,2}
  console.log(nums);

}
function reverse(nums, start, end) {
  while (start < end) {
    var temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
function find_chars_NN(string1, string2) {
  var result = "";

  var s1 = string1.split('').join(',');
  var s2 = string2.split('').join(',');

  for (var c in s1) {
    for (var d in s2) {
      if (s1[c] == s2[d]) {
        result += s1[c];
        break;
      }
    }
  }

  result=result.replace(/,/g, '');
  console.log(result);
}
function find_chars_N(string1,string2) {
  var result = "";

  var str1 = string1.split('').join(',');

  for (var c in str1) {

    if (string2.indexOf(str1[c]) > -1) {
      result += str1[c];
    }
  }
  console.log(result);
}
function lcm(a, n) {

        var res = 1, i;
        for (i = 0; i < n; i++) {
            res = res*a[i]/gcd(res, a[i]);
        }
        console.log(res);
    }

    /**
     * Supporting function for Question 5
     *
     *
     * The GCD function serves as a utility function for the LCM.
     * It computes the Greatest Common Divisor of two numbers.
     * These numbers are supplied in succession by the LCM function from the input array
     * @param a first parameter
     * @param b second paramter
     * @return integer
     */
function gcd(a, b) {
        if (b == 0) return a;
        return gcd(b, a%b);
}

/**
 *  Short Programming questions run base
 *
 */
 //Characters in Strings using the NN approach
 console.log("Characters in Strings using the N approach");
 find_chars_N("Josephine","Jonathan");

 //Characters in Strings using the NN approach
 console.log("Characters in Strings using the NN approach");
 find_chars_NN("Josephine","Jonathan");


//Array compactions
console.log("Array compaction. Test data is [1,3,7,7,8,9,9,10]");
compact([1,3,7,7,8,9,9,10]);

//Array rotation
console.log("Array rotation. Test data is [1,2,3,4,5,6] and index is 2");
rotate([1,2,3,4,5,6],2);

//Least Common Multiple
console.log("Least Common Multiple");
var arr=[1,2,3,4,5,6,7,8,9,10]
lcm(arr,arr.length);
