import { Cents, Id } from "../../../../../src/general"
import { SymbolClass } from "../../../../../src/sagittal"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"

describe("computeCaptureZone", (): void => {
    it("given a JI Notation symbol class and a JI notation level, returns the capture zone for the JI Notation symbol class at that JI notation level (works for a JI Notation symbol class introduced before Extreme, but Extreme is requested)", (): void => {
        const symbolClass: Id<SymbolClass> = 16 as Id<SymbolClass>

        const actual = computeCaptureZone(symbolClass, JiNotationLevel.EXTREME)

        expect(actual![ 0 ].cents).toBeCloseToTyped(7.518106 as Cents)
        expect(actual![ 1 ].cents).toBeCloseToTyped(8.080207 as Cents)
    })

    it("works for a JI Notation symbol class where a lower JI notation level than Extreme is requested", (): void => {
        const symbolClass: Id<SymbolClass> = 20 as Id<SymbolClass>

        const actual = computeCaptureZone(symbolClass, JiNotationLevel.HIGH)

        expect(actual![ 0 ].cents).toBeCloseToTyped(9.063885 as Cents)
        expect(actual![ 1 ].cents).toBeCloseToTyped(11.031239 as Cents)
    })

    it(
        "throws an error if a JI notation level is requested for a JI Notation symbol class which does not exist at that JI notation level",
        (): void => {
            const symbolClass: Id<SymbolClass> = 21 as Id<SymbolClass>

            expect((): void => {
                computeCaptureZone(symbolClass, JiNotationLevel.ULTRA)
            }).toThrowError("JI Notation symbol class `)|( is not present at the Ultra JI notation level; it is not introduced until the Extreme JI notation level.")
        },
    )
})
