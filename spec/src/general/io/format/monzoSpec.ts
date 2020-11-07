import {Monzo} from "../../../../../src/general"
import {formatMonzo} from "../../../../../src/general/io"

describe("formatMonzo", (): void => {
    it("formats it correctly, with enough space that 2-digit negative exponents will line up", (): void => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const actual = formatMonzo(monzo)

        const expected = `[  -8  -6   3   5  -1 ⟩`
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", (): void => {
        const monzo = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Monzo

        const actual = formatMonzo(monzo, {punctuated: true})

        const expected = `[  -8  -6,   3   5  -1,   0   0   0,   5   4   2,   3 ⟩`
        expect(actual).toBe(expected)
    })

    // TODO: MISC. ABBREVIATED PUNCTUATED MONZO FORMAT
    //  Ability to drop 0's, see: http://forum.sagittal.org/viewtopic.php?p=1611#p1611
    //  Do you know about those leading commas in the monzos, like [,5 7⟩?
    //  That tells you that the exponents for primes 2 and 3 have been omitted
    //  It also allows things like writing single-prime-factor-above-3 commas
    //  (like in the Sagittal Prime Factor notation) as: [2 3,,,,37⟩
    //  Do this for both parsing and formatting
})
