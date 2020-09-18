import { dig, KeyPath } from "../../../../src/general/code"
import { Obj } from "../../../../src/general/code/types"

describe("dig", (): void => {
    it("returns the value within the object following the path", (): void => {
        const path = ["a", "b"] as KeyPath
        const object = { a: { b: 3 } } as Obj

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("also works for nested arrays", (): void => {
        const path = [2, 1] as KeyPath
        const object = [
            [],
            [],
            [
                0,
                3,
            ],
        ] as Obj

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("works when the path is a single number (not in an array)", (): void => {
        const path = 1 as KeyPath
        const object = ["a", "b", "c"] as Obj

        const actual = dig(object, path)

        const expected = "b"
        expect(actual).toBe(expected)
    })

    it("works when the path is a single string (not in an array)", (): void => {
        const path = "b" as KeyPath
        const object = { a: 0, b: 1, c: 2 } as Obj

        const actual = dig(object, path)

        const expected = 1
        expect(actual).toBe(expected)
    })

    it("works with the parents option which allows it to make parent objects as it goes if undefined", (): void => {
        const path = ["a", 2, "c"] as KeyPath
        const object = {} as Obj

        const actual = dig(object, path, { parents: true })

        const expected = (object as Record<"a", Record<2, Record<"c", unknown>>>)[ "a" ][ 2 ][ "c" ]
        expect(actual).toBe(expected)
    })
})
