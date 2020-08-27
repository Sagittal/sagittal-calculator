import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { computeRoughNumberMonzo, computeSopfr, FIVE_ROUGHNESS, Monzo } from "../../../../src/general/math"
import { getSagittalComma } from "../../../../src/notations"
import { JI_SYMBOLS } from "../../../../src/notations/ji"

const AVERAGE_FIVE_ROUGH_SOPFR = 22.78523489932886

describe("averageFiveRoughSopfr", () => {
    it("is about 23", () => {
        const total: number = JI_SYMBOLS.reduce(
            (totalFiveRoughSopfr, symbol) => {
                const primaryComma = getSagittalComma(symbol.primaryCommaId)
                const fiveRoughNumberMonzo: Monzo = computeRoughNumberMonzo(primaryComma.monzo, FIVE_ROUGHNESS)
                const fiveRoughSopfr = computeSopfr(fiveRoughNumberMonzo)

                return totalFiveRoughSopfr + fiveRoughSopfr
            },
            0,
        )

        expect(total / JI_SYMBOLS.length).toBeCloseTo(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
