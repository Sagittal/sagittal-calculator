import {Id} from "../../../../../src/general"
import {Aim, Flacco, Symbol} from "../../../../../src/sagittal/accidental"
import {Accent, computeSymbolFromFlacco, Flag} from "../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSymbolFromFlacco", (): void => {
    it("takes a combo of flags and accents and returns the full Sagittal symbol", (): void => {
        const flacco = {
            id: 75 as Id<Flacco>,
            accents: [Accent.WING_AGAINST],
            core: {left: [Flag.BOATHOOK], right: [Flag.ARC]},
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // ,~|)
            accents: [Accent.WING_AGAINST],
            core: {aim: Aim.UP, shafts: Shafts.SINGLE, left: [Flag.BOATHOOK], right: [Flag.ARC]},
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco = {
            id: 74 as Id<Flacco>,
            accents: [Accent.TICK_WITH],
            core: {left: [Flag.ARC]},
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // '(|
            accents: [Accent.TICK_WITH],
            core: {aim: Aim.UP, shafts: Shafts.SINGLE, left: [Flag.ARC]},
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco = {
            id: 128 as Id<Flacco>,
            core: {right: [Flag.BARB, Flag.ARC]},
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // |\)
            core: {aim: Aim.UP, shafts: Shafts.SINGLE, right: [Flag.BARB, Flag.ARC]},
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco = {
            id: 99 as Id<Flacco>,
            core: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // )//|
            core: {aim: Aim.UP, shafts: Shafts.SINGLE, left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},
        }
        expect(actual).toEqual(expected)
    })

    it("works for the non-symbol, or absence of a symbol", (): void => {
        const flacco = {
            id: 0 as Id<Flacco>,
        }

        const actual = computeSymbolFromFlacco(flacco)

        expect(actual).toEqual({})                                                               // (|//|)
    })

    it("works for a symbol with only accents", (): void => {
        const flacco = {
            id: 1 as Id<Flacco>,
            accents: [Accent.WING_WITH],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // `|
            accents: [Accent.WING_WITH],
            core: {aim: Aim.UP, shafts: Shafts.SINGLE },
        }
        expect(actual).toEqual(expected)
    })
})
