import {Scamon} from "../../../../../src/general"
import {computeJiPitchFromAccidental} from "../../../../../src/sagittal"
import {Compatible} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("computeJiPitchFromAccidental", (): void => {
    it("computes a JI pitch from an accidental", (): void => {
        const accidental = computeAccidental({
            armId: ArmId.BIRD,
            headId: HeadId.LEFT_SCROLL,
            compatible: Compatible.SHARP,
        })

        const actual = computeJiPitchFromAccidental(accidental)

        // ``)|# =
        // ``)|  [  -7  -1   1   1   1 ⟩    +
        //     # [ -11   7             ⟩
        const expected = {monzo: [-18, 6, 1, 1, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("gets this one correctly", (): void => {
        const accidental = computeAccidental({
            armId: ArmId.ANTIWING_AND_TICK,
            headId: HeadId.RIGHT_SCROLL,
        })

        const actual = computeJiPitchFromAccidental(accidental)

        const expected = {monzo: [-4, 9, -2, -2]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
