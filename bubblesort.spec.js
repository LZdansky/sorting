/* eslint-disable no-undef */
describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(swapObj, "swap").and.callThrough();
  });
  it("the swap method of swapObj is used X number of times", function() {
    bubbleSort([6, 2, 4, 1]);
    expect(swapObj.swap.calls.count()).toEqual(5);
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts an array in ascending order", function() {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
  it("can sort in ascending order even if there are multiples of the same number", function() {
    expect(bubbleSort([3, 1, 2, 3])).toEqual([1, 2, 3, 3]);
  });
  it("returns the original array if it only has one element", function() {
    expect(bubbleSort([5])).toEqual([5]);
  });
  it("sorts a longer array", function() {
    expect(bubbleSort([5, 6, 1, 9, 11, 56, 121, 72, 3, 0, 23])).toEqual([
      0,
      1,
      3,
      5,
      6,
      9,
      11,
      23,
      56,
      72,
      121
    ]);
  });
});
