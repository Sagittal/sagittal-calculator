import { sort } from "../../../../src/general/code"

describe("sort", () => {
    it("takes an array and sorts it numerically, in place", () => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array)

        const expected = [1, 2, 3, 4, 5, 7]
        expect(array).toEqual(expected)
    })

    it("returns the sorted array", () => {
        const array = [5, 1, 7, 2, 4, 3]

        const actual = sort(array)

        expect(actual).toEqual(array)
    })

    it("it isn't dumb and can actually sort things numerically", () => {
        const array = [ 2000, 300, 5, 10000, 40]

        const actual = sort(array)

        const expected = [5, 40, 300, 2000, 10000]
        expect(actual).toEqual(expected)
    })

    // TODO: weird okay i had to do [0] instead of 0 for somer eason, cover that iwth a test and fix it in "sort" module
    // }), { by: [0] }).forEach(result => {

    it("when provided a key to sort by, assumes the array is of objects with that key", () => {
        const array = [{ a: 5, b: 9 }, { a: 1, b: 8 }, { a: 7, b: 7 }, { a: 2, b: 6 }, { a: 4, b: 5 }, { a: 3, b: 4 }]

        sort(array, { by: "a" })

        const expected = [
            { a: 1, b: 8 },
            { a: 2, b: 6 },
            { a: 3, b: 4 },
            { a: 4, b: 5 },
            { a: 5, b: 9 },
            { a: 7, b: 7 },
        ]
        expect(array).toEqual(expected)
    })

    it("can sort descending", () => {
        const array = [5, 1, 7, 2, 4, 3]

        sort(array, { descending: true })

        const expected = [7, 5, 4, 3, 2, 1]
        expect(array).toEqual(expected)
    })

    it("can use a nested path as a sort key", () => {
        const array = [
            [{}, { a: 5 }],
            [{}, { a: 1 }],
            [{}, { a: 7 }],
            [{}, { a: 2 }],
            [{}, { a: 4 }],
            [{}, { a: 3 }],
        ]

        sort(array, { by: [1, "a"] })

        const expected = [
            [{}, { a: 1 }],
            [{}, { a: 2 }],
            [{}, { a: 3 }],
            [{}, { a: 4 }],
            [{}, { a: 5 }],
            [{}, { a: 7 }],
        ]
        expect(array).toEqual(expected)
    })

    it("works for arrays of strings", () => {
        const array = ["cherimoya", "apple", "banana"]

        sort(array)

        expect(array).toEqual(["apple", "banana", "cherimoya"])
    })
})
