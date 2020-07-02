const {computePrimeContentUnpopularity} = require("../../../../src/scripts/notationalCommaPopularityMetric/primeContentUnpopularity")
const {computeLog} = require("../../../../src/utilities/log")

describe("computePrimeContentUnpopularity", () => {
    let adjustments
    let submetricType

    const fiveRoughMonzo = [
        0,                  // prime 2;  prime index 1 (from the prime count function)
        0,                  // prime 3;  prime index 2 (from the prime count function)
        0,                  // prime 5;  prime index 3 (from the prime count function)
        0,                  // prime 7;  prime index 4 (from the prime count function)
        1,                  // prime 11; prime index 5 (from the prime count function)
        -1,                 // prime 13; prime index 6 (from the prime count function)
        2                   // prime 17; prime index 7 (from the prime count function)
    ]

    beforeEach(() => {
        adjustments = {}
        submetricType = {}
    })

    describe("default case: submetric type sums primes, not using prime index, using repetition (adjustments tested here)", () => {
        it("sums the absolute values of the prime factors in the 5-rough monzo", () => {
            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 * 11 +
                1 * 13 +
                2 * 17
            )
        })

        it("raises the prime to a power when a is provided", () => {
            const a = 0.56
            adjustments.a = a

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 * 11 ** a +
                1 * 13 ** a +
                2 * 17 ** a
            )
        })

        it("works when a is used as a base, not a power", () => {
            const a = 0.56
            adjustments.a = a
            adjustments.aIsBaseNotPower = 1

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 * computeLog(11, a) +
                1 * computeLog(13, a) +
                2 * computeLog(17, a)
            )
        })

        it("adds a constant to each prime after applying the power or base, when w is provided", () => {
            const a = 0.56
            const w = 0.34
            adjustments.a = a
            adjustments.w = w

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 * (11 ** a + w) +
                1 * (13 ** a + w) +
                2 * (17 ** a + w)
            )
        })

        it("adds a constant to each prime before applying the power or base, when x is provided", () => {
            const a = 0.56
            const x = 0.34
            adjustments.a = a
            adjustments.x = x

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 * (11 + x) ** a +
                1 * (13 + x) ** a +
                2 * (17 + x) ** a
            )
        })

        it("raises the term to a power when y is provided", () => {
            const y = 0.81
            adjustments.y = y

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                1 ** y * 11 +
                1 ** y * 13 +
                2 ** y * 17
            )
        })

        it("adds a constant to each *non-zero* term after applying the power, when v is provided", () => {
            const y = 0.81
            const v = 0.34
            adjustments.y = y
            adjustments.v = v

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                (1 ** y + v) * 11 +
                (1 ** y + v) * 13 +
                (2 ** y + v) * 17
            )
        })

        it("adds a constant to each *non-zero* term before applying the power, when t is provided", () => {
            const y = 0.81
            const t = 0.34
            adjustments.y = y
            adjustments.t = t

            const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

            expect(result).toBe(
                (1 + t) ** y * 11 +
                (1 + t) ** y * 13 +
                (2 + t) ** y * 17
            )
        })
    })

    describe("when the submetric type sums primes (not counts primes)", () => {
        beforeEach(() => {
            submetricType.operation = "SUM"
        })

        describe("when the submetric type does not use prime index", () => {
            beforeEach(() => {
                submetricType.usePrimeIndex = false
            })

            describe("when the submetric type uses repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = true
                })

                // this is the default case, tested in more detail above, because that's where the adjustments are tested
                // but basically it sums the absolute values of the unique prime factors in the 5-rough monzo
            })

            describe("when the submetric type does not use repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = false
                })

                it("sums the absolute values of the unique prime factors in the 5-rough monzo", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 11 +
                        1 * 13 +
                        1 * 17
                    )
                })
            })
        })

        describe("when the submetric type does use prime index", () => {
            beforeEach(() => {
                submetricType.usePrimeIndex = true
            })

            describe("when the submetric type uses repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = true
                })

                it("sums the absolute values of the prime factors in the 5-rough monzo, mapped to the prime count function", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 5 +
                        1 * 6 +
                        2 * 7
                    )
                })
            })

            describe("when the submetric type does not use repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = false
                })

                it("sums the absolute values of the unique prime factors in the 5-rough monzo, mapped to the prime count function", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 5 +
                        1 * 6 +
                        1 * 7
                    )
                })
            })
        })
    })

    describe("when the submetric type counts primes (not sums primes)", () => {
        beforeEach(() => {
            submetricType.operation = "COUNT"
        })

        describe("when the submetric type does not use prime index (note: this is irrelevant when counting primes, as opposed to summing)", () => {
            beforeEach(() => {
                submetricType.usePrimeIndex = false
            })

            describe("when the submetric type uses repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = true
                })

                it("counts the prime factors in the 5-rough monzo", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 1 +
                        1 * 1 +
                        2 * 1
                    )
                })
            })

            describe("when the submetric type does not use repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = false
                })

                it("counts the unique prime factors in the 5-rough monzo", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 1 +
                        1 * 1 +
                        1 * 1
                    )
                })
            })
        })

        describe("when the submetric type does use prime index (note: this is irrelevant when counting primes, as opposed to summing)", () => {
            beforeEach(() => {
                submetricType.usePrimeIndex = true
            })

            describe("when the submetric type uses repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = true
                })

                it("counts the prime factors in the 5-rough monzo", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 1 +
                        1 * 1 +
                        2 * 1
                    )
                })
            })

            describe("when the submetric type does not use repetition", () => {
                beforeEach(() => {
                    submetricType.withRepetition = false
                })

                it("counts the unique prime factors in the 5-rough monzo", () => {
                    const result = computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)

                    expect(result).toBe(
                        1 * 1 +
                        1 * 1 +
                        1 * 1
                    )
                })
            })
        })
    })

    it("works for an empty monzo", () => {
        const result = computePrimeContentUnpopularity([], adjustments, submetricType)

        expect(result).toBe(0)
    })
})
