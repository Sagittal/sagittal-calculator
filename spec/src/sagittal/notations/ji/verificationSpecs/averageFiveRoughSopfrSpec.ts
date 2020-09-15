import { computeRoughMonzo, computeSopfr, FIVE_ROUGHNESS, Sopfr } from "../../../../../../src/general/math"
import { avg } from "../../../../../../src/general/math/typedOperations"
import { Avg } from "../../../../../../src/general/math/types"
import { getSagittalComma, JiNotationSymbolClass, JI_NOTATION_SYMBOL_CLASSES } from "../../../../../../src/sagittal"

const AVERAGE_TWO_THREE_FREE_SOPFR: Avg<Sopfr<{ rough: 5 }>> = 22.785235 as Avg<Sopfr<{ rough: 5 }>>

describe("average 2,3-free sopfr", (): void => {
    it("is about 23", (): void => {
        const twoThreeFreeSopfrs: Array<Sopfr<{ rough: 5 }>> =
            JI_NOTATION_SYMBOL_CLASSES.map((jiNotationSymbolClass: JiNotationSymbolClass): Sopfr<{ rough: 5 }> => {
                const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)
                const twoThreeFreeNumberMonzo = computeRoughMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

                return computeSopfr(twoThreeFreeNumberMonzo)
            })

        expect(avg(...twoThreeFreeSopfrs)).toBeCloseToTyped(AVERAGE_TWO_THREE_FREE_SOPFR)
    })
})
