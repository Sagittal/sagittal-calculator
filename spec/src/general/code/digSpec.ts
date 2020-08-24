import { dig } from "../../../../src/general/code"

describe("dig", () => {
    it("returns the value within the object following the path", () => {
        const path = ["a", "b"]
        const object = { a: { b: 3 }}

        const result = dig(object, path)

        expect(result).toBe(3)
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

        const result = dig(object, path)

        expect(result).toBe(3)
    })

    it("works when the path is a single number (not in an array)", () => {
        const path = 1
        const object = [ "a", "b", "c"]

        const result = dig(object, path)

        expect(result).toBe("b")
    })

    it("works when the path is a single string (not in an array)", () => {
        const path = "b"
        const object = { a: 0, b: 1, c: 2 }

        const result = dig(object, path)

        expect(result).toBe(1)
    })
})
