import {Io} from "../../../../../src/general/io"
import {parseAccidental} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("parseAccidental", (): void => {
    it("works for ASCII format", (): void => {
        const accidentalIo = ",'/|)" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for smiley format", (): void => {
        const accidentalIo = ":,::'::/ /|||:" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({
            armId: ArmId.ANTIWING_AND_TICK,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.TRIPLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for Unicode format", (): void => {
        const accidentalIo = "" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({
            armId: ArmId.WING,
            headId: HeadId.RIGHT_BARB,
            compatible: Compatible.SHARP,
        })
        expect(actual).toEqual(expected)
    })
})
