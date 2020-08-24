import { sort } from "../../../../src/general/code"

describe("sort", () => {
    it("takes an array and sorts it numerically, in place", () => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array)

        expect(array).toEqual([1, 2, 3, 4, 5, 7])
    })

    it("returns the sorted array", () => {
        const array = [5, 1, 7, 2, 4, 3]

        const result = sort(array)

        expect(result).toEqual(array)
    })

    it("when provided a key to sort by, assumes the array is of objects with that key", () => {
        const array = [{ a: 5, b: 9 }, { a: 1, b: 8 }, { a: 7, b: 7 }, { a: 2, b: 6 }, { a: 4, b: 5 }, { a: 3, b: 4 }]

        sort(array, { by: "a"})

        expect(array).toEqual([
            { a: 1, b: 8 },
            { a: 2, b: 6 },
            { a: 3, b: 4 },
            { a: 4, b: 5 },
            { a: 5, b: 9 },
            { a: 7, b: 7 },
        ])
    })

    it("can sort descending", () => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array, { descending: true })

        expect(array).toEqual([7, 5, 4, 3, 2, 1])
    })

    it("can use a nested path as a sort key", () => {
        const array = [
            [{}, {a: 5}],
            [{}, {a: 1}],
            [{}, {a: 7}],
            [{}, {a: 2}],
            [{}, {a: 4}],
            [{}, {a: 3}],
        ]

        sort(array, { by: [1, "a"] })

        expect(array).toEqual([
            [{}, {a: 1}],
            [{}, {a: 2}],
            [{}, {a: 3}],
            [{}, {a: 4}],
            [{}, {a: 5}],
            [{}, {a: 7}],
        ])
    })

    it("works for arrays of strings", () => {
        const array = [ "cherimoya", "apple", "banana", ]

        sort(array)

        expect(array).toEqual([ "apple", "banana", "cherimoya" ])
    })
})
