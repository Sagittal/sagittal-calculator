import {allElementsEqual} from "../../../../src/general/code"

describe("all elements equal", (): void => {
    it("should return whether or not every element in the array is the same", (): void => {
        expect(allElementsEqual([4, 4, 4]))
            .toBe(true)

        expect(allElementsEqual([{a: 3}, {a: 3}, {a: 3}, {a: 3}]))
            .toBe(true)

        expect(allElementsEqual(["bean", "bean"]))
            .toBe(true)

        expect(allElementsEqual([1, 1, 1, 2, 1, 1]))
            .toBe(false)
    })
})
