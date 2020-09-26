import { Io } from "../../../../../src/general/io"
import { parseDecimal } from "../../../../../src/general/io/parse"
import { Decimal } from "../../../../../src/general/math"

describe("parseDecimal", (): void => {
    it("works when the decimal being parsed has been aligned", (): void => {
        const decimalIo = "  4.555" as Io

        const actual = parseDecimal(decimalIo)

        const expected = 4.555 as Decimal
        expect(actual).toBe(expected)
    })
})
