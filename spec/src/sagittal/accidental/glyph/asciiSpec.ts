import {
    Accidental,
    Ascii,
    Compatible,
    computeAccidentalAscii,
    computeSagittalAscii,
    Flavor,
} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {NullSagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("computeSagittalAscii", (): void => {
    it("given a sagittal, returns its ASCII representation", (): void => {
        const sagittal = getSagittal({armId: ArmId.BIRD, headId: HeadId.LEFT_SCROLL})

        const actual = computeSagittalAscii(sagittal)

        const expected = "``)|" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts up into an ex up", (): void => {
        const sagittal = getSagittal({headId: HeadId.LEFT_SCROLL_AND_BARB, shafts: Shafts.EX})

        const actual = computeSagittalAscii(sagittal)

        const expected = ")/X" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts down into an ex down", (): void => {
        const sagittal = getSagittal({headId: HeadId.ARC_AND_BOATHOOK, shafts: Shafts.EX, down: true})

        const actual = computeSagittalAscii(sagittal)

        const expected = "(Y~" as Ascii
        expect(actual).toBe(expected)
    })


    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: NullSagittal = {}

        const actual = computeSagittalAscii(sagittal)

        const expected = "(|//|)" as Ascii
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalAscii", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            ...getSagittal({headId: HeadId.LEFT_BARB}),
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "/|#" as Ascii
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "b" as Ascii
        expect(actual).toBe(expected)
    })
})
