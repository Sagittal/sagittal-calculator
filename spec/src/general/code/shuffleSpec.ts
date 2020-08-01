import { computeDeepClone } from "../../../../src/general"
import { shuffle } from "../../../../src/general/code"

describe("shuffle", () => {
    it("randomly changes the order of the elemnets in the array", () => {
        const array = [...Array(50).keys()]
        const originalArray = computeDeepClone(array)

        shuffle(array)

        expect(array).not.toEqual(originalArray)
        expect(array.length).toBe(originalArray.length)
        originalArray.forEach((originalElement: number) => {
            expect(array).toContain(originalElement)
        })
    })
})
