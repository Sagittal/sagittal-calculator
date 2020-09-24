import { computeDecimalFromNum, Decimal, Monzo, Ratio } from "../../../../src/general/math"

describe("computeDecimalFromNum", (): void => {
    it("when the num has a monzo, returns its decimal representation", (): void => {
        const num = { monzo: [-2, 0, 1] as Monzo }

        const actual = computeDecimalFromNum(num)

        const expected = 1.25 as Decimal
        expect(actual).toBe(expected)
    })

    it("when the num has a ratio, returns its decimal representation", (): void => {
        const num = { ratio: [6, 5] as Ratio }

        const actual = computeDecimalFromNum(num)

        const expected = 1.2 as Decimal
        expect(actual).toBe(expected)
    })

    it("when the num has a decimal, returns it", (): void => {
        const num = { decimal: 1.3 as Decimal }

        const actual = computeDecimalFromNum(num)

        expect(actual).toBe(num.decimal)
    })
})
