import { computeDecimalFromReal, RealDecimal } from "../../../../../../src/general/math/real/decimal"
import { Monzo } from "../../../../../../src/general/math/real/monzo"
import { Quotient } from "../../../../../../src/general/math/real/quotient"

describe("computeDecimalFromReal", (): void => {
    it("when the real has a monzo, returns its decimal representation", (): void => {
        const real = { monzo: [-2, 0, 1] as Monzo }

        const actual = computeDecimalFromReal(real)

        const expected = 1.25 as RealDecimal
        expect(actual).toBe(expected)
    })

    it("when the real has a quotient, returns its decimal representation", (): void => {
        const real = { quotient: [6, 5] as Quotient }

        const actual = computeDecimalFromReal(real)

        const expected = 1.2 as RealDecimal
        expect(actual).toBe(expected)
    })

    it("when the real has a decimal, returns it", (): void => {
        const real = { decimal: 1.3 as RealDecimal }

        const actual = computeDecimalFromReal(real)

        expect(actual).toBe(real.decimal)
    })

    it("when the real is a direct decimal, returns it", (): void => {
        const decimal = 1.3 as RealDecimal

        const actual = computeDecimalFromReal(decimal)

        expect(actual).toBe(decimal)
    })
})
