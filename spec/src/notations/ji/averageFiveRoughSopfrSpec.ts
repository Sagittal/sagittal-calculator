import { ACCURACY_THRESHOLD } from "../../../../src/general/code/constants"
import { computeSopfr, Monzo } from "../../../../src/general/music"
import { computeRoughNumberMonzo } from "../../../../src/general/music/rough"
import { SYMBOLS } from "../../../../src/notations/ji"

const AVERAGE_FIVE_ROUGH_SOPFR = 22.78523489932886

describe("averageFiveRoughSopfr", () => {
    it("is about 23", () => {
        const total: number = SYMBOLS.reduce(
            (totalFiveRoughSopfr, symbol) => {
                const monzo = symbol.primaryComma.monzo
                const fiveRoughNumberMonzo: Monzo = computeRoughNumberMonzo(monzo, 5)
                const fiveRoughSopfr = computeSopfr(fiveRoughNumberMonzo)

                return totalFiveRoughSopfr + fiveRoughSopfr
            },
            0,
        )

        expect(total / SYMBOLS.length).toBeCloseTo(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
