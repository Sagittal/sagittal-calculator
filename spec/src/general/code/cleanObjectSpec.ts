import { cleanObject } from "../../../../src/general/code/cleanObject"

describe("cleanObject", () => {
    it("removes all properties from an object", () => {
        const object: Record<string, unknown> = {
            a: 2,
            b: 7,
        }

        cleanObject(object)

        expect(object).toEqual({} as Record<string, unknown>)
    })
})
