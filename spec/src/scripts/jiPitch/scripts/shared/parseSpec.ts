import {Exclusive, Io} from "../../../../../../src/general"
import {parseExclusive, parseFields} from "../../../../../../src/scripts/jiPitch/scripts/shared/parse"
import {JiPitchField, NotatingCommasField} from "../../../../../../src/scripts/jiPitch/types"

describe("parseFields", (): void => {
    it("splits the fields by comma", (): void => {
        const fieldsIo = "monzo,name" as Io

        const actual = parseFields(fieldsIo)

        const expected = [JiPitchField.MONZO, NotatingCommasField.NAME]
        expect(actual).toEqual(expected)
    })

    it("throws an error if a field does not exist", (): void => {
        const fieldsIo = "two3FreeClass,two3FreePrimeLimit" as Io

        expect((): void => {
            parseFields(fieldsIo)
        }).toThrowError("Tried to parse field two3FreeClass but it is not a member of the list of possible fields: quotient,monzo,cents,apotomeSlope,aas,ate,commaClass,name,sizeCategory,two3FreePrimeLimit,two3FreeClassName,two3FreeCopfr,two3FreeSopfr,n2d3p9")
    })
})

describe("parseExclusive", (): void => {
    it("works when given as a single boolean", (): void => {
        const exclusiveIo = true

        const actual = parseExclusive(exclusiveIo)

        const expected = true
        expect(actual).toBe(expected)
    })

    it("works when given as a comma separated string representation of a tuple", (): void => {
        const exclusiveIo = "true,false" as Io

        const actual = parseExclusive(exclusiveIo)

        const expected = [true, false] as Exclusive
        expect(actual).toEqual(expected)
    })
})
