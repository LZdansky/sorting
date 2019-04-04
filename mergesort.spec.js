/* eslint-disable no-undef */
describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it("is able to deal with an array of odd length", function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted single-element arrays into one combined array", function() {
    expect(merge([1], [2])).toEqual([1, 2]);
  });
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge([1], [2, 3])).toEqual([1, 2, 3]);
  });
  it("is able to merge arrays with multiple elements", function() {
    expect(merge([1, 6], [3, 9])).toEqual([1, 3, 6, 9]);
  });
});

describe("mergeSort function", function() {
  it("can sort an array of numbers", function() {
    expect(mergeSort([8, 1, 4, 5, 2, 9])).toEqual([1, 2, 4, 5, 8, 9]);
  });
});
