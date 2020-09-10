import { Id, Zone } from "../../../../../src/general"
import { SagittalComma } from "../../../../../src/sagittal"
import { SymbolLongAscii, SymbolUnicode } from "../../../../../src/sagittal/io"
import { JiSymbol, Level, Mina } from "../../../../../src/sagittal/notations/ji"
import { computeCaptureZone } from "../../../../../src/sagittal/notations/ji/captureZone"
import { SymbolSubset } from "../../../../../src/sagittal/notations/types"

describe("computeCaptureZone", () => {
    it("given a JI symbol and a level, returns the capture zone for the symbol at that level (works for a symbol introduced before extreme, but extreme is requested)", () => {
        const symbol = {
            id: 16 as Id<JiSymbol>,
            ascii: "'|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.ULTRA,
            smallestJiSymbolSubset: SymbolSubset.HERCULEAN,
            mina: 16 as Mina,
            primaryCommaId: 16 as Id<SagittalComma>,
            elements: ["'|", "|("] as SymbolLongAscii[],
        }

        const actual = computeCaptureZone(symbol, Level.EXTREME)

        const expected = [
            7.51810608663491,
            8.08020747628986,
        ] as Zone<SagittalComma>
        expect(actual).toEqual(expected)
    })

    it("works for a symbol where a lower level than extreme is requested", () => {
        const symbol = {
            id: 20 as Id<JiSymbol>,
            ascii: ")|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            smallestJiSymbolSubset: SymbolSubset.ATHENIAN,
            mina: 20 as Mina,
            primaryCommaId: 20 as Id<SagittalComma>,
            elements: [")|", "|("] as SymbolLongAscii[],
        }

        const actual = computeCaptureZone(symbol, Level.HIGH)

        const expected = [
            9.063884908186020,
            11.031239771978300,
        ] as Zone<SagittalComma>
        expect(actual).toEqual(expected)
    })

    it("throws an error if a level is requested for a symbol which does not exist at that level", () => {
        const symbol = {
            id: 21 as Id<JiSymbol>,
            ascii: "`)|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            smallestJiSymbolSubset: SymbolSubset.OLYMPIAN,
            mina: 21 as Mina,
            primaryCommaId: 21 as Id<SagittalComma>,
            elements: ["`|", ")|", "|("] as SymbolLongAscii[],
        }

        expect(() => computeCaptureZone(symbol, Level.ULTRA)).toThrowError("Symbol `)|( is not present at the Ultra level; it is not introduced until the Extreme level.")
    })
})
