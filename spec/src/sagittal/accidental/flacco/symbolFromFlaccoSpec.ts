import {Id} from "../../../../../src/general"
import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Flacco, Symbol} from "../../../../../src/sagittal/accidental"
import {Accent, computeSymbolFromFlacco, Flag} from "../../../../../src/sagittal/accidental/flacco"
import {ACCENT_COMBOS} from "../../../../../src/sagittal/accidental/flacco/accents"
import {FLAG_COMBOS} from "../../../../../src/sagittal/accidental/flacco/flags"
import {AccentCombo, FlagCombo} from "../../../../../src/sagittal/accidental/flacco/types"
import {ABSENCE_OF_A_SYMBOL} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSymbolFromFlacco", (): void => {
    it("takes a combo of flags and accents and returns the full Sagittal symbol", (): void => {
        const flacco = {
            id: 75 as Id<Flacco>,
            combo: [...ACCENT_COMBOS[AccentCombo.WING_AGAINST], ...FLAG_COMBOS[FlagCombo.LEFT_BOATHOOK_RIGHT_ARC]],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                      // ,~|)
            accents: [ACCENT_GLYPHS[AccentName.WING_DOWN]],
            core: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco = {
            id: 74 as Id<Flacco>,
            combo: [...ACCENT_COMBOS[AccentCombo.TICK_WITH], ...FLAG_COMBOS[FlagCombo.LEFT_ARC]],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                      // '(|
            accents: [ACCENT_GLYPHS[AccentName.TICK_UP]],
            core: CORE_GLYPHS[CoreName.LEFT_ARC_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco = {
            id: 128 as Id<Flacco>,
            combo: [...FLAG_COMBOS[FlagCombo.RIGHT_BARB_AND_ARC]],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                      // |\\)
            core: CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco = {
            id: 99 as Id<Flacco>,
            combo: [...FLAG_COMBOS[FlagCombo.LEFT_SCROLL_AND_DOUBLE_LEFT_BARB]],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                      // )//|
            core: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the non-symbol, or absence of a symbol", (): void => {
        const flacco = {
            id: 0 as Id<Flacco>,
            combo: [],
        }

        const actual = computeSymbolFromFlacco(flacco)

        expect(actual).toEqual(ABSENCE_OF_A_SYMBOL)                     // (|//|)
    })

    it("works for a symbol with only accents", (): void => {
        const flacco = {
            id: 1 as Id<Flacco>,
            combo: [...ACCENT_COMBOS[AccentCombo.WING_WITH]],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                      // `|
            accents: [ACCENT_GLYPHS[AccentName.WING_UP]],
            core: CORE_GLYPHS[CoreName.BARE_SHAFT_UP],
        }
        expect(actual).toEqual(expected)
    })
})
