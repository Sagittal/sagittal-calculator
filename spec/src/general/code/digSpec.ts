import { dig } from "../../../../src/general/code"

describe("dig", (): void => {
    it("returns the value within the object following the path", (): void => {
        const path = ["a", "b"]
        const object = { a: { b: 3 } }

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("also works for nested arrays", (): void => {
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

    it("works when the path is a single number (not in an array)", (): void => {
        const path = 1
        const object = ["a", "b", "c"]

        const actual = dig(object, path)

        const expected = "b"
        expect(actual).toBe(expected)
    })

    it("works when the path is a single string (not in an array)", (): void => {
        const path = "b"
        const object = { a: 0, b: 1, c: 2 }

        const actual = dig(object, path)

        const expected = 1
        expect(actual).toBe(expected)
    })
})
