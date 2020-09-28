import { computeNumFromMonzo, computeRationalMonzoFromRatio, Id } from "../../../../../../src/general"
import { Avg, computeRoughRationalMonzo, computeSopfr, FIVE_ROUGHNESS, Sopfr } from "../../../../../../src/general/math"
import { avg } from "../../../../../../src/general/math/typedOperations"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../../../../src/sagittal"

const AVERAGE_2_3_FREE_SOPFR: Avg<Sopfr<{ rough: 5 }>> = 22.785235 as Avg<Sopfr<{ rough: 5 }>>

describe("average 2,3-free SoPFR", (): void => {
    it("is about 23", (): void => {
        const two3FreeSopfrs: Array<Sopfr<{ rough: 5 }>> =
            JI_NOTATION.map((symbolClassId: Id<SymbolClass>): Sopfr<{ rough: 5 }> => {
                // TODO: this work should probably also be handled in Num territory
                const primaryComma = getPrimaryComma(symbolClassId)
                const primaryCommaMonzo = computeRationalMonzoFromRatio(primaryComma)
                const two3FreeNumberMonzo = computeRoughRationalMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

                return computeSopfr(computeNumFromMonzo(two3FreeNumberMonzo))
            })

        expect(avg(...two3FreeSopfrs)).toBeCloseToTyped(AVERAGE_2_3_FREE_SOPFR)
    })
})
