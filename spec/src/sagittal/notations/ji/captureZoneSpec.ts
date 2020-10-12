import { Cents, computeCentsFromPitch, Id } from "../../../../../src/general"
import { CommaClass } from "../../../../../src/sagittal"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"

describe("computeCaptureZone", (): void => {
    it("given a JI Notation comma class and a JI notation level, returns the capture zone for the JI Notation comma class at that JI notation level (works for a JI Notation comma class introduced before Extreme, but Extreme is requested)", (): void => {
        const commaClass: Id<CommaClass> = 16 as Id<CommaClass>

        const actual = computeCaptureZone(commaClass, JiNotationLevel.EXTREME)

        expect(computeCentsFromPitch(actual![ 0 ])).toBeCloseToTyped(7.518106 as Cents)
        expect(computeCentsFromPitch(actual![ 1 ])).toBeCloseToTyped(8.080207 as Cents)
    })

    it("works for a JI Notation comma class where a lower JI notation level than Extreme is requested", (): void => {
        const commaClass: Id<CommaClass> = 20 as Id<CommaClass>

        const actual = computeCaptureZone(commaClass, JiNotationLevel.HIGH)

        expect(computeCentsFromPitch(actual![ 0 ])).toBeCloseToTyped(9.063885 as Cents)
        expect(computeCentsFromPitch(actual![ 1 ])).toBeCloseToTyped(11.031239 as Cents)
    })

    it("throws an error if a JI notation level is requested for a JI Notation comma class which does not exist at that JI notation level", (): void => {
        const commaClass: Id<CommaClass> = 21 as Id<CommaClass>

        expect((): void => {
            computeCaptureZone(commaClass, JiNotationLevel.ULTRA)
        }).toThrowError("JI Notation comma class `)|( is not present at the Ultra JI notation level; it is not introduced until the Extreme JI notation level.")
    })
})
