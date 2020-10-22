import {CoreName, CORES, Symbol} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"
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

        const expected = { core: CORES[CoreName.BOATHOOK_AND_BARB_UP]}                          // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the accents, so that they will cancel each other out", (): void => {
        const symbol: Symbol = {                                                                // ,'|(
            accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
            core: CORES[CoreName.RIGHT_SCROLL_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // `./||)
            accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
            core: CORES[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("can reorient accents the other way", (): void => {
        const symbol: Symbol = {                                                                // `./||)
            accents: [Accent.WING_WITH, Accent.TICK_AGAINST],
            core: CORES[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,'|(
            accents: [Accent.WING_AGAINST, Accent.TICK_WITH],
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

    it("maps a bare shaft with accents to the apotome with flipped accents", (): void => {
        const symbol: Symbol = {                                                                // `'|
            accents: [Accent.WING_WITH, Accent.TICK_WITH],
            core: CORES[CoreName.BARE_SHAFT_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,./||\\
            accents: [Accent.WING_AGAINST, Accent.TICK_AGAINST],
            core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })
})
