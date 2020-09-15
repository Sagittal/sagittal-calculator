import { Id, Zone } from "../../../../../src/general"
import { JiNotationSymbolClass, SagittalComma, SymbolClass } from "../../../../../src/sagittal"
import { SymbolLongAscii } from "../../../../../src/sagittal/io"
import { JiNotationLevel, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"
import { SymbolSubset } from "../../../../../src/sagittal/notations/types"

describe("computeCaptureZone", (): void => {
    it("given a JI Notation symbol class and a JI notation level, returns the capture zone for the JI Notation symbol class at that JI notation level (works for a JI Notation symbol class introduced before Extreme, but Extreme is requested)", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 16 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.ULTRA,
            smallestSymbolSubset: SymbolSubset.HERCULEAN,
            mina: 16 as Mina,
            primaryCommaId: 16 as Id<SagittalComma>,
            elements: ["'|", "|("] as SymbolLongAscii[],
        }

        const actual = computeCaptureZone(jiNotationSymbolClass, JiNotationLevel.EXTREME)

        const expected = [
            7.518106,
            8.080207,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("works for a JI Notation symbol class where a lower JI notation level than Extreme is requested", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 20 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.MEDIUM,
            smallestSymbolSubset: SymbolSubset.ATHENIAN,
            mina: 20 as Mina,
            primaryCommaId: 20 as Id<SagittalComma>,
            elements: [")|", "|("] as SymbolLongAscii[],
        }

        const actual = computeCaptureZone(jiNotationSymbolClass, JiNotationLevel.HIGH)

        const expected = [
            9.063885,
            11.031239,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it(
        "throws an error if a JI notation level is requested for a JI Notation symbol class which does not exist at that JI notation level",
        (): void => {
            const jiNotationSymbolClass: JiNotationSymbolClass = {
                id: 21 as Id<SymbolClass>,
                introducingJiNotationLevel: JiNotationLevel.EXTREME,
                smallestSymbolSubset: SymbolSubset.OLYMPIAN,
                mina: 21 as Mina,
                primaryCommaId: 21 as Id<SagittalComma>,
                elements: ["`|", ")|", "|("] as SymbolLongAscii[],
            }

            expect((): void => {
                computeCaptureZone(jiNotationSymbolClass, JiNotationLevel.ULTRA)
            }).toThrowError("JI Notation symbol class `)|( is not present at the Ultra JI notation level; it is not introduced until the Extreme JI notation level.")
        },
    )
})
