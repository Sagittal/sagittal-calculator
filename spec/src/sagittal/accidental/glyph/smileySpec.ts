import {Accidental, Aim, Compatible, Flavor, Smiley} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {computeAccidentalSmiley, computeSagittalSmiley} from "../../../../../src/sagittal/accidental/glyph"
import {getCore, NullSagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("computeSagittalSmiley", (): void => {
    it("converts a sagittal to smiley code", (): void => {
        const sagittal = getSagittal({armId: ArmId.WING_AND_TICK, headId: HeadId.RIGHT_ARC})        // `'|)


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const sagittal = getSagittal({headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB})                 // )//|

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const sagittal = getSagittal({headId: HeadId.DOUBLE_RIGHT_BARB})                            // |\\


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const sagittal = getSagittal({armId: ArmId.BIRD, headId: HeadId.RIGHT_ARC})                 // ``|)

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const sagittal = getSagittal({armId: ArmId.BIRD, against: true, headId: HeadId.RIGHT_ARC})  // ,,|)

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a sagittal with four shafts", (): void => {
        const sagittal = getSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX})             // )X(

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: NullSagittal = {}

        const actual = computeSagittalSmiley(sagittal)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeAccidentalSmiley", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {                                                    // )\!x
            ...getSagittal({ headId: HeadId.LEFT_SCROLL_AND_BARB, aim: Aim.DOWN }),
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

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
})

