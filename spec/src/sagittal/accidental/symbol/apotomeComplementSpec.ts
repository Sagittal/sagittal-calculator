import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental"
import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {computeApotomeComplement} from "../../../../../src/sagittal/accidental/symbol"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.LEFT_BARB_UP]}                             //  /|

        const actual = computeApotomeComplement(symbol)

        const expected = {core: CORES[CoreName.RIGHT_BARB_DOUBLE_UP]}                           // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]}       // )~||

        const actual = computeApotomeComplement(symbol)

        const expected = {core: CORES[CoreName.BOATHOOK_AND_BARB_UP]}                          // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const symbol: Symbol = {                                                                // ,'|(
            arm: ARMS[ArmName.WING_AGAINST_TICK_WITH],
            core: CORES[CoreName.RIGHT_SCROLL_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // `./||)
            arm: ARMS[ArmName.WING_WITH_TICK_AGAINST],
            core: CORES[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const symbol: Symbol = {                                                                // `./||)
            arm: ARMS[ArmName.WING_WITH_TICK_AGAINST],
            core: CORES[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,'|(
            arm: ARMS[ArmName.WING_AGAINST_TICK_WITH],
            core: CORES[CoreName.RIGHT_SCROLL_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural), mapping it to the apotome", (): void => {
        const symbol: Symbol = {}

        const actual = computeApotomeComplement(symbol)

        const expected = {
            core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        const symbol: Symbol = {                                                                // `'|
            arm: ARMS[ArmName.WING_AND_TICK_WITH],
            core: CORES[CoreName.BARE_SHAFT_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,./||\\
            arm: ARMS[ArmName.WING_AND_TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }

        expect(actual).toEqual(expected)
    })
})
