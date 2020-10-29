import {
    Accidental,
    Compatible,
    computeAccidentalUnicode,
    computeSagittalUnicode,
    Flavor,
    Unicode,
} from "../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {NullSagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("computeSagittalUnicode", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const sagittal = getSagittal({armId: ArmId.BIRD, headId: HeadId.LEFT_SCROLL})          // ``)|

        const actual = computeSagittalUnicode(sagittal)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: NullSagittal = {}

        const actual = computeSagittalUnicode(sagittal)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalUnicode", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            ...getSagittal({headId: HeadId.RIGHT_ARC, down: true}),
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})
