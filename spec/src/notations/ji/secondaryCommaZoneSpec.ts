import { Cents, Id, Name, Position, Prime, Ratio, Sopfr } from "../../../../src/general"
import { ApotomeSlope, Monzo, N2D3P9 } from "../../../../src/general/music"
import { SymbolLongAscii } from "../../../../src/notations"
import { JiSymbol, Level, Mina } from "../../../../src/notations/ji"
import { computeSecondaryCommaZone } from "../../../../src/notations/ji/secondaryCommaZone"
import { SymbolSet } from "../../../../src/notations/ji/types"
import { SymbolUnicode } from "../../../../src/notations/types"

// TODO: perhaps secondary comma zone should be built-in to the JiSymbol model,
//  and this test would be just to check that they all check out with themselves?
//  sure, but first you'd want to include its capture zones per level at all.
//  then work up to its secondary comma zone
describe("secondaryCommaZone", () => {
    it("returns the lower and upper bound of where secondary commas are represented by the given symbol, i.e. its capture zone at its introducing level", () => {
        const symbol: JiSymbol = {
            id: 82 as Id<JiSymbol>,
            ascii: "/|~" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            lowestSymbolSet: SymbolSet.PROMETHEAN,
            mina: 78 as Mina,
            primaryComma: {
                apotomeSlope: -4.343 as ApotomeSlope,
                fiveRoughSopfr: 28 as Sopfr<5>,
                limit: 23 as Prime,
                ratio: [46, 45] as Ratio,
                monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo,
                cents: 38.0506316728057 as Cents,
                name: "23/5S" as Name<Position>,
                n2d3p9: 48.98148148148149 as N2D3P9,
            },
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            37.30947973834720,
            38.06194034977850,
        ] as [Cents, Cents]
        expect(actual).toEqual(expected)
    })

    it("another example, at the Extreme level", () => {
        const symbol: JiSymbol = {
            id: 83 as Id<JiSymbol>,
            ascii: ",,(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            lowestSymbolSet: SymbolSet.OLYMPIAN,
            mina: 78.39014554523920 as Mina,
            primaryComma: {
                apotomeSlope: 2.656 as ApotomeSlope,
                fiveRoughSopfr: 20 as Sopfr<5>,
                limit: 13 as Prime,
                ratio: [1701, 1664] as Ratio,
                monzo: [-7, 5, 0, 1, 0, -1] as Monzo,
                cents: 38.0732490267513 as Cents,
                name: "7/13S" as Name<Position>,
                n2d3p9: 21.907407407407405 as N2D3P9,
            },
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            38.06194034977850,
            38.29315717024330,
        ] as [Cents, Cents]
        expect(actual).toEqual(expected)
    })

    it("another example, at the Medium level", () => {
        const symbol: JiSymbol = {
            id: 85 as Id<JiSymbol>,
            ascii: "(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            lowestSymbolSet: SymbolSet.ATHENIAN,
            mina: 80 as Mina,
            primaryComma: {
                apotomeSlope: -0.396 as ApotomeSlope,
                fiveRoughSopfr: 16 as Sopfr<5>,
                limit: 11 as Prime,
                ratio: [45, 44] as Ratio,
                monzo: [-2, 2, 1, 0, -1] as Monzo,
                cents: 38.9057732308529 as Cents,
                name: "5/11S" as Name<Position>,
                n2d3p9: 11.203703703703702 as N2D3P9,
            },
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            35.11809146436650,
            40.26051203403560,
        ] as [Cents, Cents]
        expect(actual).toEqual(expected)
    })

    it("works for the initial symbol", () => {
        const symbol: JiSymbol = {
            id: 0 as Id<JiSymbol>,
            ascii: "|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            mina: 0 as Mina,
            lowestSymbolSet: SymbolSet.SPARTAN,
            primaryComma: {
                apotomeSlope: 0.000 as ApotomeSlope,
                fiveRoughSopfr: 0 as Sopfr<5>,
                limit: 2 as Prime,
                ratio: [1, 1] as Ratio,
                monzo: [] as unknown as Monzo,
                cents: 0 as Cents,
                name: "1u" as Name<Position>,
                n2d3p9: 0.1111111111111111 as N2D3P9,
            },
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            0,
            2.74024427456787,
        ] as [Cents, Cents]
        expect(actual).toEqual(expected)
    })
})
