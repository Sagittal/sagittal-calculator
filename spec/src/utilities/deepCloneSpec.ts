import { computeDeepClone } from "../../../src/utilities/deepClone"

describe("computeDeepClone", () => {
    it("returns a clone of the object which when changed will not change the source object", () => {
        const object = [
            { a: 1 },
        ]

        const result = computeDeepClone(object)
        result[ 0 ].a = 2

        expect(object[ 0 ].a).toBe(1)
    })
})
