import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"
import {flipSymbol} from "../../../../../src/sagittal/accidental/symbol"

describe("flipSymbol", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change accents since their orientation is decribed relative to the core)", (): void => {
        const symbol: Symbol = {                                    // `./|||\\
            accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_TRIPLE_UP],
        }

        const actual = flipSymbol(symbol)

        const expected = {                                          // ,'\\!!!/
            accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_TRIPLE_DOWN],
        }
        expect(actual).toEqual(expected)
    })
})
