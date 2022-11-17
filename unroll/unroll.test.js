const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it('should return an array', function(){
    expect(unroll([1,2],[3,4])).toBeInstanceOf(Array);
  })

  it('takes square array and converts them to a single array', function() {
    const squareArray = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
    const squareArray2 = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
      ['i', 'j', 'k', 'l'],
      ['m', 'n', 'o', 'p']
    ]

    expect(unroll(squareArray)).toEqual([1,4,7,2,5,8,3,6,9]);
    expect(unroll(squareArray2)).toEqual(['a','e','i','m','b','f','j','n','c','g','k','o','d','h','l','p']);
    expect(unroll([[1],[2],[3]])).toEqual([1,2,3]);
    expect(unroll([[1,2],[3,4]])).toEqual([1,3,2,4]);
    expect(unroll([])).toEqual([]);
  })

});
