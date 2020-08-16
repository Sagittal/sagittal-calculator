import { Cents, Id, Name, Position, Prime, Ratio, Sopfr } from "../../../../src/general"
import { ApotomeSlope, Monzo } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/general/music/types"
import { SymbolLongAscii } from "../../../../src/notations"
import { JiSymbol, Level, Mina } from "../../../../src/notations/ji"
import { computeIsWithinLevel, computeLevelSymbols } from "../../../../src/notations/ji/levelsSymbols"
import { SymbolUnicode } from "../../../../src/notations/types"

describe("computeLevelSymbols", () => {
    it("returns the symbols for the levels up to and including the target level", () => {
        expect(computeLevelSymbols(Level.MEDIUM).length).toBe(13)
        expect(computeLevelSymbols(Level.HIGH).length).toBe(32)
        expect(computeLevelSymbols(Level.ULTRA).length).toBe(55)
        expect(computeLevelSymbols(Level.EXTREME).length).toBe(149)
    })

    it("returns only the symbol data (not the bound data)", () => {
        const levelCommas = computeLevelSymbols(Level.MEDIUM)

        expect(levelCommas[ 0 ]).toEqual({
            id: 0 as Id<JiSymbol>,
            introducingLevel: Level.MEDIUM,
            ascii: "|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            mina: 0 as Mina,
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
            elements: [] as SymbolLongAscii[],
        })
    })
})

describe("computeIsWithinLevel", () => {
    it("returns true if the level is below or at to the target level, and false otherwise", () => {
        expect(computeIsWithinLevel(Level.MEDIUM, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.INSANE, Level.INSANE)).toBe(true)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.INSANE, Level.EXTREME)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.ULTRA)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.ULTRA)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.HIGH)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.HIGH)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.HIGH)).toBe(false)
        expect(computeIsWithinLevel(Level.EXTREME, Level.HIGH)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.HIGH)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.MEDIUM)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.ULTRA, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.EXTREME, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.MEDIUM)).toBe(false)
    })
})
