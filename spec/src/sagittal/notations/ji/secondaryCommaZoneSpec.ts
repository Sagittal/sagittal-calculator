import { Id, Zone } from "../../../../../src/general"
import { SagittalComma, SymbolClass } from "../../../../../src/sagittal"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji"

describe("secondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI Notation symbol class, i.e. its capture zone at its introducing JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 81 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        const expected = [
            37.309479,
            38.061940,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Extreme JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 82 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        const expected = [
            38.061940,
            38.293157,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Medium JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 84 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        const expected = [
            35.118091,
            40.260512,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("works for the initial symbol", (): void => {
        const symbolClassId: Id<SymbolClass> = 0 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        const expected = [
            0.000000,
            2.740244,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })
})
