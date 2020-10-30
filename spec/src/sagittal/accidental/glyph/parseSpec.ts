import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/glyph"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeSagittal} from "../../../../helpers/src/sagittal/accidental/sagittal"

describe("parseAscii", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeSagittal({armId: ArmId.WING_AGAINST_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = undefined
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeSagittal({headId: HeadId.LEFT_BOATHOOK, shafts: Shafts.TRIPLE, down: true})
        expect(actual).toEqual(expected)
    })
})
