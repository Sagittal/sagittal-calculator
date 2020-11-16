import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {Unicode} from "../../../../../src/sagittal/accidental/glyph"
import {parseUnicode} from "../../../../../src/sagittal/accidental/parse/unicode"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("parseUnicode", (): void => {
    it("works for Unicode format", (): void => {
        const unicode = "" as Unicode

        const actual = parseUnicode(unicode)

        const expected = computeAccidental({
            armId: ArmId.WING,
            headId: HeadId.RIGHT_BARB,
            compatible: Compatible.SHARP,
        })
        expect(actual).toEqual(expected)
    })

    it("I think we need another Unicode format example", (): void => {
        const unicode = "" as Unicode

        const actual = parseUnicode(unicode)

        const expected = computeAccidental({
            armId: ArmId.WING,
            headId: HeadId.RIGHT_BARB,
            down: true,
            anti: true,
            compatible: Compatible.SHARP,
        })
        expect(actual).toEqual(expected)
    })
})
