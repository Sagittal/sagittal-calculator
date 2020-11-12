import {formatVal} from "../../../../../src/general/io/format"
import {Val} from "../../../../../src/general/math/numeric/monzo"

describe("formatVal", (): void => {
    it("formats it correctly, with enough space that 2-digit negative exponents will line up", (): void => {
        const val = [12, 19, 28] as Val

        const actual = formatVal(val)

        const expected = `⟨  12  19  28 ]`
        expect(actual).toBe(expected)
    })
})
