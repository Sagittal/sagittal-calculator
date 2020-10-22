import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental"
import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {apotomeShift} from "../../../../../src/sagittal/accidental/symbol"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const symbol: Symbol = {                                                        // ,')|(
            arm: ARMS[ArmName.WING_AGAINST_TICK_WITH],
            core: CORES[CoreName.DOUBLE_SCROLL_UP],
        }

        const actual = apotomeShift(symbol)

        const expected: Symbol = {                                                      // ,')|||(
            arm: ARMS[ArmName.WING_AGAINST_TICK_WITH],
            core: CORES[CoreName.DOUBLE_SCROLL_TRIPLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.DOUBLE_SCROLL_DOUBLE_UP]}          // )||(

        const actual = apotomeShift(symbol)

        const expected = {core: CORES[CoreName.DOUBLE_SCROLL_EX_UP]}                    // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const symbol: Symbol = {                                                        // `|
            arm: ARMS[ArmName.WING_WITH],
            core: CORES[CoreName.BARE_SHAFT_UP],
        }

        const actual = apotomeShift(symbol)

        const expected = {                                                              // `/||\
            arm: ARMS[ArmName.WING_WITH],
            core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = apotomeShift(symbol)

        const expected = {                                                              // /||\
            core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })
})
