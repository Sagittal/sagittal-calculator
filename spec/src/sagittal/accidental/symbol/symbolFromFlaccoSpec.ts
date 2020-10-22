import {Id} from "../../../../../src/general"
import {Aim, computeSymbolFromFlacco, Flacco, Symbol} from "../../../../../src/sagittal/accidental"
import {FlagComboName, FLAG_COMBOS} from "../../../../../src/sagittal/accidental/flacco"
import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSymbolFromFlacco", (): void => {
    it("takes a combo of flags and arm and returns the full Sagittal symbol", (): void => {
        const flacco = {
            id: 75 as Id<Flacco>,
            arm: ARMS[ArmName.WING_AGAINST],
            core: FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // ,~|)
            arm: ARMS[ArmName.WING_AGAINST],
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC]
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco = {
            id: 74 as Id<Flacco>,
            arm: ARMS[ArmName.TICK_WITH],
            core: FLAG_COMBOS[FlagComboName.LEFT_ARC],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // '(|
            arm: ARMS[ArmName.TICK_WITH],
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...FLAG_COMBOS[FlagComboName.LEFT_ARC]
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco = {
            id: 128 as Id<Flacco>,
            core: FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // |\)
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC]
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco = {
            id: 99 as Id<Flacco>,
            core: FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                        // )//|
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB]
            },
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

    it("works for a symbol with only arm", (): void => {
        const flacco = {
            id: 1 as Id<Flacco>,
            arm: ARMS[ArmName.WING_WITH],
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected: Symbol = {                                                                       // `|
            arm: ARMS[ArmName.WING_WITH],
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE
            },
        }
        expect(actual).toEqual(expected)
    })
})
