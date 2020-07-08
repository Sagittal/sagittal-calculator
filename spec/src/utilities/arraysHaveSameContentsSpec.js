const {arraysHaveSameContents} = require("../../../src/utilities/arraysHaveSameContents")

describe("arraysHaveSameContents", () => {
    it("returns true if the arrays have the same contents in the same order", () => {
        const arrayOne = [{a: 1}, {b: 2}]
        const arrayTwo = [{a: 1}, {b: 2}]

        const result = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(result).toBeTruthy()
    })

    it("returns true if the arrays have the same contents in a different order", () => {
        const arrayOne = [{a: 1}, {b: 2}]
        const arrayTwo = [{b: 2}, {a: 1}]

        const result = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(result).toBeTruthy()
    })

    it("returns false if the arrays have different contents", () => {
        const arrayOne = [{a: 1}, {b: 2}]
        const arrayTwo = [{a: 1}, {c: 2}]

        const result = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(result).toBeFalsy()
    })
})
