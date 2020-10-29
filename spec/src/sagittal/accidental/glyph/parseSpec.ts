import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/glyph"
import {Sagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("parseAscii", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = getSagittal({armId: ArmId.WING_AGAINST_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {} as Sagittal
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = getSagittal({headId: HeadId.LEFT_BOATHOOK, shafts: Shafts.TRIPLE, down: true})
        expect(actual).toEqual(expected)
    })
})
