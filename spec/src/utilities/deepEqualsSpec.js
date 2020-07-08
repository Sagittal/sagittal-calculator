const {deepEquals} = require("../../../src/utilities/deepEquals")

describe("deepEquals", () => {
    it("returns true if two arrays are equal", () => {
        expect(deepEquals([3, 4, 5], [3, 4, 5])).toBeTruthy()
    })

    it("returns false if two array are not equal", () => {
        expect(deepEquals([3, 5, 4], [3, 4, 5])).toBeFalsy()
    })

    it("returns true if two objects are equal", () => {
        expect(deepEquals({a: 3, b: 7}, {a: 3, b: 7})).toBeTruthy()
    })

    it("returns false if two objects are not equal", () => {
        expect(deepEquals({a: 3, b: 6}, {a: 3, b: 7})).toBeFalsy()
    })

    it("returns true if two objects are equal, irrespective of their keys' order", () => {
        expect(deepEquals({b: 7, a: 3}, {a: 3, b: 7})).toBeTruthy()
    })

    it("returns true if two objects are equal, irrespective of their keys' order, even if they are deep", () => {
        expect(deepEquals([{b: 7, a: 3}], [{a: 3, b: 7}])).toBeTruthy()
    })

    it("returns false in this situation which for whatever reason it returned true in until I fixed it", () => {
        expect(deepEquals([{}], [{a: "b"}])).toBeFalsy()
    })

    it("returns false in this other situation which for whatever reason it returned true in until I fixed it -- probably I should check my test coverage on the project I yanked this implementation of deep equals from!", () => {
        expect(deepEquals([1], [1, 2])).toBeFalsy()
    })
})
