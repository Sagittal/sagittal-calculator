import {Cents, computeCentsFromPitch} from "../../../../../src/general"
import {CommaClassId, computeSecondaryCommaZone} from "../../../../../src/sagittal"

describe("computeSecondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI Notation comma class, i.e. its capture zone at its introducing JI notation level", (): void => {
        const actual = computeSecondaryCommaZone(CommaClassId._23_V_5_S)

        expect(computeCentsFromPitch(actual.extrema[0]!)).toBeCloseToTyped(37.309479 as Cents)
        expect(computeCentsFromPitch(actual.extrema[1]!)).toBeCloseToTyped(38.061940 as Cents)
    })

    it("another example, at the Extreme JI notation level", (): void => {
        const actual = computeSecondaryCommaZone(CommaClassId._7_V_13_S)

        expect(computeCentsFromPitch(actual.extrema[0]!)).toBeCloseToTyped(38.061940 as Cents)
        expect(computeCentsFromPitch(actual.extrema[1]!)).toBeCloseToTyped(38.293157 as Cents)
    })

    it("another example, at the Medium JI notation level", (): void => {
        const actual = computeSecondaryCommaZone(CommaClassId._5_V_11_S)

        expect(computeCentsFromPitch(actual.extrema[0]!)).toBeCloseToTyped(35.118091 as Cents)
        expect(computeCentsFromPitch(actual.extrema[1]!)).toBeCloseToTyped(40.260512 as Cents)
    })

    it("works for the initial comma class", (): void => {
        const actual = computeSecondaryCommaZone(CommaClassId._1_u)

        expect(computeCentsFromPitch(actual.extrema[0]!)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(actual.extrema[1]!)).toBeCloseToTyped(2.740244 as Cents)
    })
})
