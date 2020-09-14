import { Id, Zone } from "../../../../../src/general"
import { SagittalComma, SymbolLongAscii } from "../../../../../src/sagittal"
import { SymbolUnicode } from "../../../../../src/sagittal/io"
import { JiSymbol, Level, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeSecondaryCommaZone } from "../../../../../src/sagittal/notations/ji/secondaryCommaZone"
import { SymbolSubset } from "../../../../../src/sagittal/notations/types"

describe("secondaryCommaZone", (): void => {
    it("returns the min and max cents of where secondary commas are represented by the given JI symbol, i.e. its capture zone at its introducing level", (): void => {
        const symbol: JiSymbol = {
            id: 82 as Id<JiSymbol>,
            ascii: "/|~" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            smallestJiSymbolSubset: SymbolSubset.PROMETHEAN,
            mina: 78 as Mina,
            primaryCommaId: 82 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            37.309479,
            38.061940,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Extreme level", (): void => {
        const symbol: JiSymbol = {
            id: 83 as Id<JiSymbol>,
            ascii: ",,(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            smallestJiSymbolSubset: SymbolSubset.OLYMPIAN,
            mina: 78.39014554523920 as Mina,
            primaryCommaId: 83 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            38.061940,
            38.293157,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("another example, at the Medium level", (): void => {
        const symbol: JiSymbol = {
            id: 85 as Id<JiSymbol>,
            ascii: "(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            smallestJiSymbolSubset: SymbolSubset.ATHENIAN,
            mina: 80 as Mina,
            primaryCommaId: 85 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            35.118091,
            40.260512,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })

    it("works for the initial symbol", (): void => {
        const symbol: JiSymbol = {
            id: 0 as Id<JiSymbol>,
            ascii: "|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            mina: 0 as Mina,
            smallestJiSymbolSubset: SymbolSubset.SPARTAN,
            primaryCommaId: 0 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            0.000000,
            2.740244,
        ] as Zone<SagittalComma>
        expect(actual).toBeCloseToArray(expected)
    })
})
