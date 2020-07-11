import { computeSecondaryCommaZone } from "../../../../src/notations/ji/secondaryCommaZone"
import {
    Level,
    Mina,
    SagittalSymbol,
    SymbolId,
    SymbolLongAscii,
    SymbolUnicode,
} from "../../../../src/notations/ji/types"
import { Monzo } from "../../../../src/utilities/comma/types"
import { Cents } from "../../../../src/utilities/types"

describe("secondaryCommaZone", () => {
    it("returns the lower and upper bound of where secondary commas are represented by the given symbol, i.e. its capture zone at its introducing level", () => {
        const symbol: SagittalSymbol = {
            id: 82 as SymbolId,
            ascii: "/|~" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            mina: 78 as Mina,
            primaryComma: {
                monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1] as Monzo,
                position: 38.0506316728057 as Cents,
            },
            elements: [],
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            37.30947973834720,
            38.06194034977850,
        ] as [Cents, Cents])
    })

    it("another example, at the Extreme level", () => {
        const symbol: SagittalSymbol = {
            id: 83 as SymbolId,
            ascii: ",,(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            mina: 78.39014554523920 as Mina,
            primaryComma: {
                monzo: [-7, 5, 0, 1, 0, -1] as Monzo,
                position: 38.0732490267513 as Cents,
            },
            elements: [],
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            38.06194034977850,
            38.29315717024330,
        ] as [Cents, Cents])
    })

    it("another example, at the Medium level", () => {
        const symbol: SagittalSymbol = {
            id: 85 as SymbolId,
            ascii: "(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            mina: 80 as Mina,
            primaryComma: {
                monzo: [-2, 2, 1, 0, -1] as Monzo,
                position: 38.9057732308529 as Cents,
            },
            elements: [],
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            35.11809146436650,
            40.26051203403560,
        ] as [Cents, Cents])
    })

    it("works for the initial symbol", () => {
        const symbol: SagittalSymbol = {
            id: 0 as SymbolId,
            ascii: "|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            mina: 0 as Mina,
            primaryComma: {
                monzo: [] as Monzo,
                position: 0.0000000000000 as Cents,
            },
            elements: [],
        }

        const result = computeSecondaryCommaZone(symbol)

        expect(result).toEqual([
            0,
            2.74024427456787,
        ] as [Cents, Cents])
    })
})
