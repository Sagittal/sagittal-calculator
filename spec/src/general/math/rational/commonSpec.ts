import { Integer } from "../../../../../src/general/math"
import { computeGreatestCommonDivisor, computeLeastCommonMultiple } from "../../../../../src/general/math/rational/common"
import { Divisor } from "../../../../../src/general/types"

describe("common", (): void => {
    describe("greatest divisor", (): void => {
        it("works", (): void => {
            expect(computeGreatestCommonDivisor(16 as Integer, 24 as Integer))
                .toBe(8 as Divisor<Integer>)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeGreatestCommonDivisor(5 as Integer, 8 as Integer))
                .toBe(1 as Divisor<Integer>)
        })

        it("works when one number is itself the GCD", (): void => {
            expect(computeGreatestCommonDivisor(3 as Integer, 6 as Integer))
                .toBe(3 as Divisor<Integer>)
        })

        it("works for more than two numbers", (): void => {
            expect(computeGreatestCommonDivisor(12 as Integer, 16 as Integer, 20 as Integer))
                .toBe(4 as Divisor<Integer>)
        })

        it("works for one number", (): void => {
            expect(computeGreatestCommonDivisor(7 as Integer))
                .toBe(7 as Divisor<Integer>)
        })

        it("works for zero numbers", (): void => {
            expect(computeGreatestCommonDivisor())
                .toBe(1 as Divisor<Integer>)
        })
    })

    describe("least multiple", (): void => {
        it("works", (): void => {
            expect(computeLeastCommonMultiple(16 as Integer, 24 as Integer))
                .toBe(48 as Integer)
        })

        it("works for co-prime numbers", (): void => {
            expect(computeLeastCommonMultiple(5 as Integer, 8 as Integer))
                .toBe(40 as Integer)

        })

        it("works when one number is itself the LCM", (): void => {
            expect(computeLeastCommonMultiple(3 as Integer, 6 as Integer))
                .toBe(6 as Integer)
        })

        it("works for more than two numbers", (): void => {
            expect(computeLeastCommonMultiple(12 as Integer, 16 as Integer, 20 as Integer))
                .toBe(240 as Integer)
        })

        it("works for one number", (): void => {
            expect(computeLeastCommonMultiple(7 as Integer))
                .toBe(7 as Integer)
        })

        it("works for zero numbers", (): void => {
            expect(computeLeastCommonMultiple())
                .toBe(1 as Integer)
        })

        it("works for very large numbers", (): void => {
            expect(
                computeLeastCommonMultiple(
                    43999999560 as Integer,
                    43999999560 as Integer,
                    43999999560 as Integer,
                    43999999560 as Integer,
                    43999999560 as Integer,
                    43999999560 as Integer),
            )
                .toBe(43999999560 as Integer)
        })
    })
})
