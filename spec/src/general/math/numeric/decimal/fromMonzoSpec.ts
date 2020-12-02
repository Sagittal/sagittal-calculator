import {computeDecimalFromMonzo, Decimal, MAX_JS_PRECISION, Monzo} from "../../../../../../src/general"

describe("computeDecimalFromMonzo", (): void => {
    it("returns the decimal representation of the monzo", (): void => {
        const monzo = [-1, -1, 0, 1] as Monzo   // 7/6

        const actual = computeDecimalFromMonzo(monzo)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for a huge monzo", (): void => {
        const monzo = [-50508, 31867] as Monzo

        const actual = computeDecimalFromMonzo(monzo)

        const expected = 1.0000072649602405 as Decimal
        expect(actual).toBeCloseToTyped(expected, MAX_JS_PRECISION)
    })

    it("works for a huge monzo which has no recourse to stay balanced", (): void => {
        const monzo = [0, 31867] as Monzo

        const actual = computeDecimalFromMonzo(monzo)

        const expected = Infinity as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
