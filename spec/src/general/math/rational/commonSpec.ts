import { IntegerDecimal } from "../../../../../src/general/math"
import { computeGreatestCommonDivisor } from "../../../../../src/general/math/rational"
import { computeLeastCommonMultiple } from "../../../../../src/general/math/rational/common"
import { Divisor } from "../../../../../src/general/types"

describe("common", (): void => {
    describe("greatest divisor", (): void => {
        it("works", (): void => {
            expect(computeGreatestCommonDivisor(16 as IntegerDecimal, 24 as IntegerDecimal))
                .toBe(8 as Divisor<IntegerDecimal>)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeGreatestCommonDivisor(5 as IntegerDecimal, 8 as IntegerDecimal))
                .toBe(1 as Divisor<IntegerDecimal>)
        })

        it("works when one number is itself the GCD", (): void => {
            expect(computeGreatestCommonDivisor(3 as IntegerDecimal, 6 as IntegerDecimal))
                .toBe(3 as Divisor<IntegerDecimal>)
        })

        it("works for more than two numbers", (): void => {
            expect(computeGreatestCommonDivisor(12 as IntegerDecimal, 16 as IntegerDecimal, 20 as IntegerDecimal))
                .toBe(4 as Divisor<IntegerDecimal>)
        })

        it("works for one number", (): void => {
            expect(computeGreatestCommonDivisor(7 as IntegerDecimal))
                .toBe(7 as Divisor<IntegerDecimal>)
        })

        it("works for zero numbers", (): void => {
            expect(computeGreatestCommonDivisor())
                .toBe(1 as Divisor<IntegerDecimal>)
        })
    })

    describe("least multiple", (): void => {
        it("works", (): void => {
            expect(computeLeastCommonMultiple(16 as IntegerDecimal, 24 as IntegerDecimal))
                .toBe(48 as IntegerDecimal)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeLeastCommonMultiple(5 as IntegerDecimal, 8 as IntegerDecimal))
                .toBe(40 as IntegerDecimal)

        })

        it("works when one number is itself the LCM", (): void => {
            expect(computeLeastCommonMultiple(3 as IntegerDecimal, 6 as IntegerDecimal))
                .toBe(6 as IntegerDecimal)
        })

        it("works for more than two numbers", (): void => {
            expect(computeLeastCommonMultiple(12 as IntegerDecimal, 16 as IntegerDecimal, 20 as IntegerDecimal))
                .toBe(240 as IntegerDecimal)
        })

        it("works for one number", (): void => {
            expect(computeLeastCommonMultiple(7 as IntegerDecimal))
                .toBe(7 as IntegerDecimal)
        })

        it("works for zero numbers", (): void => {
            expect(computeLeastCommonMultiple())
                .toBe(1 as IntegerDecimal)
        })

        it("works for very large numbers", (): void => {
            expect(
                computeLeastCommonMultiple(
                    43999999560 as IntegerDecimal,
                    43999999560 as IntegerDecimal,
                    43999999560 as IntegerDecimal,
                    43999999560 as IntegerDecimal,
                    43999999560 as IntegerDecimal,
                    43999999560 as IntegerDecimal),
            )
                .toBe(43999999560 as IntegerDecimal)
        })
    })
})
