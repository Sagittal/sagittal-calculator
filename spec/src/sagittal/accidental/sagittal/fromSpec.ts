import {computeSagittalFromFlacco, Flacco, FlaccoId, getFlacco} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("computeSagittalFromFlacco", (): void => {
    it("takes a combo of flags and arm and returns the full Sagittal symbol", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.WING_AGAINST_BOATHOOK_AND_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = getSagittal({armId: ArmId.WING, against: true, headId: HeadId.BOATHOOK_AND_ARC}) // ,~|)
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.TICK_AND_LEFT_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = getSagittal({armId: ArmId.TICK, headId: HeadId.LEFT_ARC})                        // '(|
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.RIGHT_BARB_AND_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = getSagittal({headId: HeadId.RIGHT_BARB_AND_ARC})                                 // |\)
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = getSagittal({headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB})                       // )//|
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const flacco: Flacco = {}

        const actual = computeSagittalFromFlacco(flacco)

        expect(actual).toEqual(undefined)                                                             // (|//|)
    })

    it("works for a symbol with only arm", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.WING)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = getSagittal({armId: ArmId.WING})                                                 // `|
        expect(actual).toEqual(expected)
    })
})
