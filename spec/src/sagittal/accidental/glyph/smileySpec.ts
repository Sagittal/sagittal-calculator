import {Accidental, Compatible, Flavor, Smiley} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeAccidentalSmiley, computeSagittalSmiley} from "../../../../../src/sagittal/accidental/glyph"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("computeSagittalSmiley", (): void => {
    it("converts a sagittal to smiley code", (): void => {
        const sagittal = computeAccidental({armId: ArmId.WING_AND_TICK, headId: HeadId.RIGHT_ARC})        // `'|)


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB})                 // )//|

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const sagittal = computeAccidental({headId: HeadId.DOUBLE_RIGHT_BARB})                            // |\\


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const sagittal = computeAccidental({armId: ArmId.BIRD, headId: HeadId.RIGHT_ARC})                 // ``|)

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const sagittal = computeAccidental({armId: ArmId.BIRD, anti: true, headId: HeadId.RIGHT_ARC})  // ,,|)

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a sagittal with four shafts", (): void => {
        const sagittal = computeAccidental({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX})             // )X(

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal = undefined

        const actual = computeSagittalSmiley(sagittal)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeAccidentalSmiley", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental = computeAccidental({
            headId: HeadId.LEFT_SCROLL_AND_BARB,
            down: true,
            compatible: Compatible.DOUBLE_SHARP,
        })

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":)\\!::x:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":x:" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for empty accidentals", (): void => {
        const accidental = {} as Accidental

        const actual = computeAccidentalSmiley(accidental)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for empty accidentals", (): void => {
        const accidental = undefined

        const actual = computeAccidentalSmiley(accidental)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})

