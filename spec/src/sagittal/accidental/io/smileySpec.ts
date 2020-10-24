import {Accidental, Aim, Compatible, Flavor, Smiley, Sagittal} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmName, HeadName, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {computeAccidentalSmiley, computeSagittalSmiley} from "../../../../../src/sagittal/accidental/io"
import {getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeSagittalSmiley", (): void => {
    it("converts a sagittal to smiley code", (): void => {
        const sagittal: Sagittal = {                                                                            // `'|)
            arm: getArm(ArmName.WING_AND_TICK),
            core: getCore(HeadName.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB)}                  // )//|

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadName.DOUBLE_RIGHT_BARB)}                             // |\\


        const actual = computeSagittalSmiley(sagittal)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const sagittal: Sagittal = {                                                                            // ``|)
            arm: getArm(ArmName.BIRD),
            core: getCore(HeadName.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const sagittal: Sagittal = {                                                                            // ,,|)
            arm: getArm(ArmName.BIRD, Orientation.AGAINST),
            core: getCore(HeadName.RIGHT_ARC),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a sagittal with four shafts", (): void => {
        const sagittal: Sagittal = {                                                                            // )X(
            core: getCore(HeadName.DOUBLE_SCROLL, Shafts.EX),
        }

        const actual = computeSagittalSmiley(sagittal)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: Sagittal = {}

        const actual = computeSagittalSmiley(sagittal)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeAccidentalSmiley", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {                                                    // )\!x
            core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.SINGLE, Aim.DOWN),
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

