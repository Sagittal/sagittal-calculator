import { Cents, Id, Proportion } from "../../../../src/general"
import {
    Bound,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    JiSymbol,
    Level,
} from "../../../../src/notations/ji"
import { computeLevelBoundedJiSymbolIdWithDistances } from "../../../../src/notations/ji/levelBoundedJiSymbols"

describe("computeLevelBoundedJiSymbolIdWithDistances", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of symbols it bounds at that level, as well as their distances and ina-distances from the bound", () => {
        const bound: Bound = {
            cents: 24.66219847111080 as Cents,
            levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
            id: 54 as Id<Bound>,
        }

        const actual = computeLevelBoundedJiSymbolIdWithDistances(bound)

        const expected: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel = {
            id: 54 as Id<Bound>,
            [ Level.MEDIUM ]: [
                {
                    id: 44 as Id<JiSymbol>,
                    distance: 3.1559088743959975 as Cents,
                    inaDistance: 0.5829624209957123 as Proportion,
                },
                {
                    id: 58 as Id<JiSymbol>,
                    distance: 2.601893328989302 as Cents,
                    inaDistance: 0.48062415443807605 as Proportion,
                },
            ],
            [ Level.EXTREME ]: [
                {
                    id: 51 as Id<JiSymbol>,
                    distance: 0.38371604975449713 as Cents,
                    inaDistance: 0.786434752419428 as Proportion,
                },
                {
                    id: 52 as Id<JiSymbol>,
                    distance: 0.22210985406900008 as Cents,
                    inaDistance: 0.4552191867044054 as Proportion,
                },
            ],
            [ Level.INSANE ]: [
                {
                    id: 51 as Id<JiSymbol>,
                    distance: 0.38371604975449713 as Cents,
                    inaDistance: 2.7305824665550094 as Proportion,
                },
                {
                    id: 52 as Id<JiSymbol>,
                    distance: 0.22210985406900008 as Cents,
                    inaDistance: 1.5805679057676565 as Proportion,
                },
            ],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the final bound", () => {
        const bound: Bound = {
            cents: 68.57250822118040 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
            id: 54 as Id<Bound>,
        }

        const actual = computeLevelBoundedJiSymbolIdWithDistances(bound)

        const expected: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel = {
            id: 54 as Id<Bound>,
            [ Level.MEDIUM ]: [
                {
                    id: 142 as Id<JiSymbol>,
                    distance: 3.6578835602835937 as Cents,
                    inaDistance: 0.6756876516060547 as Proportion,
                },
                undefined,
            ],
            [ Level.HIGH ]: [
                {
                    id: 147 as Id<JiSymbol>,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.5297795425192314 as Proportion,
                },
                undefined,
            ],
            [ Level.ULTRA ]: [
                {
                    id: 147 as Id<JiSymbol>,
                    distance: 1.2814466063946952 as Cents,
                    inaDistance: 0.6537704992790516 as Proportion,
                },
                undefined,
            ],
            [ Level.EXTREME ]: [
                {
                    id: 149 as Id<JiSymbol>,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 0.9200766517814528 as Proportion,
                },
                undefined,
            ],
            [ Level.INSANE ]: [
                {
                    id: 149 as Id<JiSymbol>,
                    distance: 0.44892240228040237 as Cents,
                    inaDistance: 3.194600906829164 as Proportion,
                },
                undefined,
            ],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the first bound", () => {
        const bound: Bound = {
            cents: 0.210788021120605 as Cents,
            levels: [Level.EXTREME, Level.INSANE],
            id: 55 as Id<Bound>,
        }

        const actual = computeLevelBoundedJiSymbolIdWithDistances(bound)

        const expected: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel = {
            id: 55 as Id<Bound>,
            [ Level.EXTREME ]: [
                undefined,
                {
                    id: 1 as Id<JiSymbol>,
                    distance: 0.211928144834215 as Cents,
                    inaDistance: 0.43435154255350816 as Proportion,
                },
            ],
            [ Level.INSANE ]: [
                undefined,
                {
                    id: 1 as Id<JiSymbol>,
                    distance: 0.211928144834215 as Cents,
                    inaDistance: 1.508113295818833 as Proportion,
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})
