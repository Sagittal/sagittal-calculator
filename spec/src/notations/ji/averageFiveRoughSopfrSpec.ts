import {SYMBOLS} from "../../../../src/notations/ji/symbols"
import {computeSopfr} from "../../../../src/utilities/comma/sopfr"
import {computeRoughNumberMonzo} from "../../../../src/utilities/comma/rough"
import {ACCURACY_THRESHOLD} from "../../../../src/utilities/constants"

const AVERAGE_FIVE_ROUGH_SOPFR = 22.78523489932886

describe("averageFiveRoughSopfr", () => {
    it("is about 23", () => {
        const total = SYMBOLS.reduce(
            (totalFiveRoughSopfr, symbol) => {
                const monzo = symbol.primaryComma.monzo
                const fiveRoughNumberMonzo = computeRoughNumberMonzo(monzo, 5)
                const fiveRoughSopfr = computeSopfr(fiveRoughNumberMonzo)

                return totalFiveRoughSopfr + fiveRoughSopfr
            },
            0,
        )

        expect(total / SYMBOLS.length).toBeCloseTo(AVERAGE_FIVE_ROUGH_SOPFR, ACCURACY_THRESHOLD)
    })
})
