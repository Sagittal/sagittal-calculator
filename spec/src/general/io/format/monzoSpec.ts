import { RealMonzo } from "../../../../../src/general"
import { formatMonzo } from "../../../../../src/general/io"

describe("formatMonzo", (): void => {
    it("formats it correctly, with enough space that 2-digit negative exponents will line up", (): void => {
        const monzo = [-8, -6, 3, 5, -1] as RealMonzo

        const actual = formatMonzo(monzo)

        const expected = `[  -8  -6   3   5  -1 ⟩`
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", (): void => {
        const monzo = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as RealMonzo

        const actual = formatMonzo(monzo, { punctuated: true })

        const expected = `[  -8  -6,   3   5  -1,   0   0   0,   5   4   2,   3 ⟩`
        expect(actual).toBe(expected)
    })
})
