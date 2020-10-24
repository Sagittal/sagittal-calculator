import {Id} from "../../../../../src/general"
import {Aim, computeSagittalFromFlacco, Flacco, Sagittal} from "../../../../../src/sagittal/accidental"
import {getHead, HeadName, Orientation} from "../../../../../src/sagittal/accidental/flacco"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSagittalFromFlacco", (): void => {
    it("takes a combo of flags and arm and returns the full Sagittal symbol", (): void => {
        const flacco = {
            id: 75 as Id<Flacco>,
            arm: getArm(ArmName.WING, Orientation.AGAINST),
            core: getHead(HeadName.BOATHOOK_AND_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // ,~|)
            arm: getArm(ArmName.WING, Orientation.AGAINST),
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...getHead(HeadName.BOATHOOK_AND_ARC),
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco = {
            id: 74 as Id<Flacco>,
            arm: getArm(ArmName.TICK),
            core: getHead(HeadName.LEFT_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // '(|
            arm: getArm(ArmName.TICK),
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...getHead(HeadName.LEFT_ARC),
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco = {
            id: 128 as Id<Flacco>,
            core: getHead(HeadName.RIGHT_BARB_AND_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // |\)
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...getHead(HeadName.RIGHT_BARB_AND_ARC),
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco = {
            id: 99 as Id<Flacco>,
            core: getHead(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                        // )//|
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
                ...getHead(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB),
            },
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const flacco = {
            id: 0 as Id<Flacco>,
        }

        const actual = computeSagittalFromFlacco(flacco)

        expect(actual).toEqual({})                                                               // (|//|)
    })

    it("works for a symbol with only arm", (): void => {
        const flacco = {
            id: 1 as Id<Flacco>,
            arm: getArm(ArmName.WING),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // `|
            arm: getArm(ArmName.WING),
            core: {
                aim: Aim.UP,
                shafts: Shafts.SINGLE,
            },
        }
        expect(actual).toEqual(expected)
    })
})