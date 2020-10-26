import {Accidental, Aim, Compatible, Flavor, Sagittal, Smiley} from "../../../../../src/sagittal/accidental"
import {ArmId, getArm, HeadId, Orientation} from "../../../../../src/sagittal/accidental/flacco"
import {computeAccidentalSmiley, computeSagittalSmiley} from "../../../../../src/sagittal/accidental/io"
import {getCore, NullSagittal, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSagittalSmiley", (): void => {
    it("converts a sagittal to smiley code", (): void => {
        const sagittal: Sagittal = {                                                                            // `'|)
            arm: getArm(ArmId.WING_AND_TICK),
            ...getCore(HeadId.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const sagittal: Sagittal = {...getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB)}                  // )//|

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const sagittal: Sagittal = {...getCore(HeadId.DOUBLE_RIGHT_BARB)}                             // |\\


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const sagittal: Sagittal = {                                                                            // ``|)
            arm: getArm(ArmId.BIRD),
            ...getCore(HeadId.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const sagittal: Sagittal = {                                                                            // ,,|)
            arm: getArm(ArmId.BIRD, Orientation.AGAINST),
            ...getCore(HeadId.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a sagittal with four shafts", (): void => {
        const sagittal: Sagittal = {                                                                            // )X(
            ...getCore(HeadId.DOUBLE_SCROLL, Shafts.EX),
        }

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
            ...getCore(HeadId.LEFT_SCROLL_AND_BARB, Shafts.SINGLE, Aim.DOWN),
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

