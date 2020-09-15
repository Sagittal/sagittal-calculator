import { Id, Zone } from "../../../../../src/general"
import { JiNotationSymbolClass, SagittalComma, SymbolClass } from "../../../../../src/sagittal"
import { JiNotationLevel, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji/secondaryCommaZone"
import { SymbolSubset } from "../../../../../src/sagittal/notations/types"

describe("secondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI Notation symbol class, i.e. its capture zone at its introducing JI notation level", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 82 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.HIGH,
            smallestSymbolSubset: SymbolSubset.PROMETHEAN,
            mina: 78 as Mina,
            primaryCommaId: 82 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(jiNotationSymbolClass)

        const expected = [
            37.309479,
            38.061940,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Extreme JI notation level", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 83 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.EXTREME,
            smallestSymbolSubset: SymbolSubset.OLYMPIAN,
            mina: 78.39014554523920 as Mina,
            primaryCommaId: 83 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(jiNotationSymbolClass)

        const expected = [
            38.061940,
            38.293157,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Medium JI notation level", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 85 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.MEDIUM,
            smallestSymbolSubset: SymbolSubset.ATHENIAN,
            mina: 80 as Mina,
            primaryCommaId: 85 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(jiNotationSymbolClass)

        const expected = [
            35.118091,
            40.260512,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("works for the initial symbol", (): void => {
        const jiNotationSymbolClass: JiNotationSymbolClass = {
            id: 0 as Id<SymbolClass>,
            introducingJiNotationLevel: JiNotationLevel.MEDIUM,
            mina: 0 as Mina,
            smallestSymbolSubset: SymbolSubset.SPARTAN,
            primaryCommaId: 0 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(jiNotationSymbolClass)

        const expected = [
            0.000000,
            2.740244,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })
})
