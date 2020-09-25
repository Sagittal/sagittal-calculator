import { Cents, computeCentsFromPitch, Id } from "../../../../../src/general"
import { SymbolClass } from "../../../../../src/sagittal"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji"

describe("secondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI Notation symbol class, i.e. its capture zone at its introducing JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 81 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(37.309479 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(38.061940 as Cents)
    })

    it("another example, at the Extreme JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 82 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(38.061940 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(38.293157 as Cents)
    })

    it("another example, at the Medium JI notation level", (): void => {
        const symbolClassId: Id<SymbolClass> = 84 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(35.118091 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(40.260512 as Cents)
    })

    it("works for the initial symbol", (): void => {
        const symbolClassId: Id<SymbolClass> = 0 as Id<SymbolClass>

        const actual = computeSecondaryCommaZone(symbolClassId)

        expect(computeCentsFromPitch(actual[ 0 ])).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(actual[ 1 ])).toBeCloseToTyped(2.740244 as Cents)
    })
})
