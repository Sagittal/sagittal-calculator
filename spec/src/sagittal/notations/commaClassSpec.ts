import { Id } from "../../../../src/general"
import { Ascii } from "../../../../src/sagittal/io"
import { CommaClass, getCommaClass, PrimaryComma } from "../../../../src/sagittal/notations"

describe("getCommaClass", (): void => {
    it("given a comma class ID, returns the full comma class", (): void => {
        const jiNotationCommaClassId = 55 as Id<CommaClass>

        const actual: CommaClass = getCommaClass(jiNotationCommaClassId)

        const expected: CommaClass = {
            id: 55 as Id<CommaClass>,
            primaryCommaId: 55 as Id<PrimaryComma>,
        }
        expect(actual).toEqual(expected)
    })
})
