import {Io} from "../../../../../../src/general"
import {parseFields} from "../../../../../../src/scripts/jiPitch/scripts/shared/fields"
import {JiPitchField, NotatingCommasField} from "../../../../../../src/scripts/jiPitch/types"

describe("parseFields", (): void => {
    it("splits the fields by comma", (): void => {
        const excludedFieldIo = "monzo,name" as Io

        const actual = parseFields(excludedFieldIo)

        const expected = [JiPitchField.MONZO, NotatingCommasField.NAME]
        expect(actual).toEqual(expected)
    })

    it("throws an error if a field does not exist", (): void => {
        const excludedFieldIo = "two3FreeClass,two3FreePrimeLimit" as Io

        expect((): void => {
            parseFields(excludedFieldIo)
        }).toThrowError("Tried to parse field two3FreeClass but it is not a member of the list of possible fields: quotient,monzo,cents,apotomeSlope,aas,ate,commaClass,name,sizeCategory,two3FreePrimeLimit,two3FreeClassName,two3FreeCopfr,two3FreeSopfr,n2d3p9")
    })
})
