import { Io } from "../../../../../../src/general/io"
import { parseExcludedFields } from "../../../../../../src/scripts/jiPitch/commands/shared/excludedFields"
import { JiPitchField, NotatingCommasField } from "../../../../../../src/scripts/jiPitch/types"

describe("excludedFields", (): void => {
    it("splits the fields by comma", (): void => {
        const excludedFieldIo = "monzo,name" as Io

        const actual = parseExcludedFields(excludedFieldIo)

        const expected = [JiPitchField.MONZO, NotatingCommasField.NAME]
        expect(actual).toEqual(expected)
    })

    it("throws an error if a field does not exist", (): void => {
        const excludedFieldIo = "two3FreeClass,two3FreePrimeLimit" as Io

        expect((): void => {
            parseExcludedFields(excludedFieldIo)
        }).toThrowError("Tried to exclude field two3FreeClass but it is not a member of the list of possible fields to exclude: quotient,monzo,cents,apotomeSlope,aas,ate,commaClass,name,two3FreePrimeLimit,two3FreeClassName,two3FreeCopfr,two3FreeSopfr,n2d3p9")
    })
})
