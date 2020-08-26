import { computeExtensionBase, ExtensionBaseType } from "../../../../src/general/code"

describe("computeExtensionBase", () => {
    it("returns an empty array when array is asked for", () => {
        const extensionBaseType = ExtensionBaseType.ARRAY

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown[] = []
        expect(actual).toEqual(expected)
    })

    it("returns an empty object when object is asked for", () => {
        const extensionBaseType = ExtensionBaseType.OBJECT

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown = {}
        expect(actual).toEqual(expected)
    })

    it("does not return the same array each time", () => {
        const extensionBaseType = ExtensionBaseType.ARRAY

        const previousActual = computeExtensionBase(extensionBaseType)
        previousActual.push(3)

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown[] = []
        expect(actual).toEqual(expected)
    })

    it("returns an empty object when object is asked for", () => {
        const extensionBaseType = ExtensionBaseType.OBJECT

        const previousActual = computeExtensionBase(extensionBaseType)
        previousActual.key = 3

        const actual = computeExtensionBase(extensionBaseType)

        const expected: unknown = {}
        expect(actual).toEqual(expected)
    })
})
