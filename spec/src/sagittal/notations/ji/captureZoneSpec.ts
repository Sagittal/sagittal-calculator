import { Id, Zone } from "../../../../../src/general"
import { SagittalComma, SymbolClass } from "../../../../../src/sagittal"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"

describe("computeCaptureZone", (): void => {
    it("given a JI Notation symbol class and a JI notation level, returns the capture zone for the JI Notation symbol class at that JI notation level (works for a JI Notation symbol class introduced before Extreme, but Extreme is requested)", (): void => {
        const symbolClass: Id<SymbolClass> = 16 as Id<SymbolClass>

        const actual = computeCaptureZone(symbolClass, JiNotationLevel.EXTREME)

        const expected = [
            7.518106,
            8.080207,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("works for a JI Notation symbol class where a lower JI notation level than Extreme is requested", (): void => {
        const symbolClass: Id<SymbolClass> = 20 as Id<SymbolClass>

        const actual = computeCaptureZone(symbolClass, JiNotationLevel.HIGH)

        const expected = [
            9.063885,
            11.031239,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
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
