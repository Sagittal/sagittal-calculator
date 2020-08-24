import { dig } from "../../../../src/general/code"

describe("dig", () => {
    it("returns the value within the object following the path", () => {
        const path = ["a", "b"]
        const object = { a: { b: 3 } }

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("also works for nested arrays", () => {
        const path = [2, 1]
        const object = [
            [],
            [],
            [
                0,
                3,
            ],
        ]

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("works when the path is a single number (not in an array)", () => {
        const path = 1
        const object = ["a", "b", "c"]

        const actual = dig(object, path)

        const expected = "b"
        expect(actual).toBe(expected)
    })

    it("works when the path is a single string (not in an array)", () => {
        const path = "b"
        const object = { a: 0, b: 1, c: 2 }

        const actual = dig(object, path)

        const expected = 1
        expect(actual).toBe(expected)
    })
})
