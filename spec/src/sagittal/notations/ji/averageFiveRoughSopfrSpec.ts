import { ACCURACY_THRESHOLD } from "../../../../../src/general/code"
import { computeRoughNumberMonzo, computeSopfr, FIVE_ROUGHNESS, Monzo, Sopfr } from "../../../../../src/general/math"
import { Average } from "../../../../../src/general/math/types"
import { getSagittalComma } from "../../../../../src/sagittal"
import { JI_SYMBOLS } from "../../../../../src/sagittal/notations/ji"

const AVERAGE_FIVE_ROUGH_SOPFR: Average<Sopfr<5>> = 22.78523489932886 as Average<Sopfr<5>>

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

        expect(total / JI_SYMBOLS.length).toBeCloseToTyped(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
