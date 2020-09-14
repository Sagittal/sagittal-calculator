import { computeRoughMonzo, computeSopfr, FIVE_ROUGHNESS, Sopfr } from "../../../../../../src/general/math"
import { avg } from "../../../../../../src/general/math/typedOperations"
import { Avg } from "../../../../../../src/general/math/types"
import { getSagittalComma, JiSymbol } from "../../../../../../src/sagittal"
import { JI_SYMBOLS } from "../../../../../../src/sagittal/notations/ji"

const AVERAGE_TWO_THREE_FREE_SOPFR: Avg<Sopfr<{ rough: 5 }>> = 22.785235 as Avg<Sopfr<{ rough: 5 }>>

describe("average 2,3-free sopfr", (): void => {
    it("is about 23", (): void => {
        const twoThreeFreeSopfrs: Array<Sopfr<{ rough: 5 }>> =
            JI_SYMBOLS.map((symbol: JiSymbol): Sopfr<{ rough: 5 }> => {
                const primaryComma = getSagittalComma(symbol.primaryCommaId)
                const twoThreeFreeNumberMonzo = computeRoughMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

                return computeSopfr(twoThreeFreeNumberMonzo)
            })

        expect(avg(...twoThreeFreeSopfrs)).toBeCloseToTyped(AVERAGE_TWO_THREE_FREE_SOPFR)
    })
})
