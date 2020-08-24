import { arraysHaveSameContents } from "../../../../src/general/code/arraysHaveSameContents"

describe("arraysHaveSameContents", () => {
    it("returns true if the arrays have the same contents in the same order", () => {
        const arrayOne = [{ a: 1 }, { b: 2 }]
        const arrayTwo = [{ a: 1 }, { b: 2 }]

        const actual = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(actual).toBeTruthy()
    })

    it("returns true if the arrays have the same contents in a different order", () => {
        const arrayOne = [{ a: 1 }, { b: 2 }]
        const arrayTwo = [{ b: 2 }, { a: 1 }]

        const actual = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the arrays have different contents", () => {
        const arrayOne: unknown[] = [{ a: 1 }, { b: 2 }]
        const arrayTwo: unknown[] = [{ a: 1 }, { c: 2 }]

        const actual = arraysHaveSameContents(arrayOne, arrayTwo)

        expect(actual).toBeFalsy()
    })
})
