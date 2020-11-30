import {Decimal, Io, parseDecimal} from "../../../../../src/general"

describe("parseDecimal", (): void => {
    it("works when the decimal being parsed has been aligned", (): void => {
        const decimalIo = "  4.555" as Io

        const actual = parseDecimal(decimalIo)

        const expected = 4.555 as Decimal
        expect(actual).toBe(expected)
    })
})
