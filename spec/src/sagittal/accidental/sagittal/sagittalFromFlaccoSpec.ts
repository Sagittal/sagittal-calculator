import {Aim, computeSagittalFromFlacco, Flacco, Sagittal} from "../../../../../src/sagittal/accidental"
import {ArmId, getArm, getHead, HeadId, Orientation} from "../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"

describe("computeSagittalFromFlacco", (): void => {
    it("takes a combo of flags and arm and returns the full Sagittal symbol", (): void => {
        const flacco: Flacco = {
            arm: getArm(ArmId.WING, Orientation.AGAINST),
            ...getHead(HeadId.BOATHOOK_AND_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // ,~|)
            arm: getArm(ArmId.WING, Orientation.AGAINST),
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
            ...getHead(HeadId.BOATHOOK_AND_ARC),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco: Flacco = {
            arm: getArm(ArmId.TICK),
            ...getHead(HeadId.LEFT_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // '(|
            arm: getArm(ArmId.TICK),
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
            ...getHead(HeadId.LEFT_ARC),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco: Flacco = {
            ...getHead(HeadId.RIGHT_BARB_AND_ARC),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // |\)
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
            ...getHead(HeadId.RIGHT_BARB_AND_ARC),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco: Flacco = {
            ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                        // )//|
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
            ...getHead(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const flacco: Flacco = {}

        const actual = computeSagittalFromFlacco(flacco)

        expect(actual).toEqual({})                                                               // (|//|)
    })

    it("works for a symbol with only arm", (): void => {
        const flacco: Flacco = {
            arm: getArm(ArmId.WING),
        }

        const actual = computeSagittalFromFlacco(flacco)

        const expected: Sagittal = {                                                                       // `|
            arm: getArm(ArmId.WING),
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
        }
        expect(actual).toEqual(expected)
    })
})
