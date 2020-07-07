const {deepEquals} = require("../../../src/utilities/deepEquals")

describe("deepEquals", () => {
    it("returns true if two arrays are equal", () => {
        expect(deepEquals([3,4,5], [3,4,5])).toBeTruthy()
    })

    it("returns true if two objects are equal", () => {
        expect(deepEquals({a: 3, b: 7}, {a: 3, b: 7})).toBeTruthy()
    })
})
