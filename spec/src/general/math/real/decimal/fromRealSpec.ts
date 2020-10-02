import { computeRealDecimalFromReal, RealDecimal } from "../../../../../../src/general/math/real/decimal"
import { RealMonzo } from "../../../../../../src/general/math/real/monzo"
import { RealQuotient } from "../../../../../../src/general/math/real/quotient"

describe("computeRealDecimalFromReal", (): void => {
    it("when the real has a monzo, returns its decimal representation", (): void => {
        const real = { monzo: [-2, 0, 1] as RealMonzo }

        const actual = computeRealDecimalFromReal(real)

        const expected = 1.25 as RealDecimal
        expect(actual).toBe(expected)
    })

    it("when the real has a quotient, returns its decimal representation", (): void => {
        const real = { quotient: [6, 5] as RealQuotient }

        const actual = computeRealDecimalFromReal(real)

        const expected = 1.2 as RealDecimal
        expect(actual).toBe(expected)
    })

    it("when the real has a decimal, returns it", (): void => {
        const real = { decimal: 1.3 as RealDecimal }

        const actual = computeRealDecimalFromReal(real)

        expect(actual).toBe(real.decimal)
    })

    it("when the real is a direct decimal, returns it", (): void => {
        const realDecimal = 1.3 as RealDecimal

        const actual = computeRealDecimalFromReal(realDecimal)

        expect(actual).toBe(realDecimal)
    })
})
