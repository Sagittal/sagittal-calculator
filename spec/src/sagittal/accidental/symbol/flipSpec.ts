import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental"
import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {flipSymbol} from "../../../../../src/sagittal/accidental/symbol"

describe("flipSymbol", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is decribed relative to the core)", (): void => {
        const symbol: Symbol = {                                    // `./|||\\
            arm: ARMS[ArmName.WING_WITH_TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_TRIPLE_UP],
        }

        const actual = flipSymbol(symbol)

        const expected = {                                          // ,'\\!!!/
            arm: ARMS[ArmName.WING_WITH_TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_TRIPLE_DOWN],
        }
        expect(actual).toEqual(expected)
    })
})
