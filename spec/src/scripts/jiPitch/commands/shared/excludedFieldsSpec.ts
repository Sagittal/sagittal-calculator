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
        const excludedFieldIo = "twoThreeFreeClass,twoThreeFreePrimeLimit" as Io

        expect((): void => {
            parseExcludedFields(excludedFieldIo)
        }).toThrowError("Tried to exclude field twoThreeFreeClass but it is not a member of the list of possible fields to exclude: ratio,monzo,cents,apotomeSlope,aas,ate,symbolClass,name,twoThreeFreePrimeLimit,twoThreeFreeClassName,twoThreeFreeCopfr,twoThreeFreeSopfr,n2d3p9")
    })
})
