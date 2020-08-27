import { Monzo } from "../../../../src/general"
import { formatMonzo } from "../../../../src/general/io"

describe("formatMonzo", () => {
    it("formats it correctly", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const actual = formatMonzo(monzo)

        const expected = `[ -8 -6 3 5 -1 ⟩`
        expect(actual).toBe(expected)
    })

    it("can format it using George Secor's punctuated format", () => {
        const monzo = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3] as Monzo

        const actual = formatMonzo(monzo, { punctuated: true })

        const expected = `[ -8 -6, 3 5 -1, 0 0 0, 5 4 2, 3 ⟩`
        expect(actual).toBe(expected)
    })
})
