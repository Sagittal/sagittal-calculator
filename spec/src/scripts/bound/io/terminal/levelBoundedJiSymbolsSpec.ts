import { Cents, Id, Multiplier } from "../../../../../../src/general"
import { Bound, Ina, JiSymbol, Level } from "../../../../../../src/sagittal/notations/ji"
import { computeLevelBoundedJiSymbolIdWithDistances } from "../../../../../../src/scripts/bound/io/terminal/levelBoundedJiSymbols"
import { BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel } from "../../../../../../src/scripts/bound/io/terminal/types"

describe("computeLevelBoundedJiSymbolIdWithDistances", (): void => {
    it("returns, given a bound, for each of its levels, an array of the pair of symbols it bounds at that level, as well as their distances and ina-distances from the bound", (): void => {
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
                    distance: 3.155908 as Cents,
                    inaDistance: 0.582962 as Multiplier<Ina>,
                },
                {
                    id: 58 as Id<JiSymbol>,
                    distance: 2.601893 as Cents,
                    inaDistance: 0.480624 as Multiplier<Ina>,
                },
            ],
            [ Level.EXTREME ]: [
                {
                    id: 51 as Id<JiSymbol>,
                    distance: 0.383716 as Cents,
                    inaDistance: 0.786434 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<JiSymbol>,
                    distance: 0.222109 as Cents,
                    inaDistance: 0.455219 as Multiplier<Ina>,
                },
            ],
            [ Level.INSANE ]: [
                {
                    id: 51 as Id<JiSymbol>,
                    distance: 0.383716 as Cents,
                    inaDistance: 2.730582 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<JiSymbol>,
                    distance: 0.222109 as Cents,
                    inaDistance: 1.580567 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the final bound", (): void => {
        const bound: Bound = {
            cents: 68.572508 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
            id: 54 as Id<Bound>,
        }

        const actual = computeLevelBoundedJiSymbolIdWithDistances(bound)

        const expected: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel = {
            id: 54 as Id<Bound>,
            [ Level.MEDIUM ]: [
                {
                    id: 142 as Id<JiSymbol>,
                    distance: 3.657883 as Cents,
                    inaDistance: 0.675687 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ Level.HIGH ]: [
                {
                    id: 147 as Id<JiSymbol>,
                    distance: 1.281446 as Cents,
                    inaDistance: 0.529779 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ Level.ULTRA ]: [
                {
                    id: 147 as Id<JiSymbol>,
                    distance: 1.281446 as Cents,
                    inaDistance: 0.653770 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ Level.EXTREME ]: [
                {
                    id: 149 as Id<JiSymbol>,
                    distance: 0.448922 as Cents,
                    inaDistance: 0.920076 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ Level.INSANE ]: [
                {
                    id: 149 as Id<JiSymbol>,
                    distance: 0.448922 as Cents,
                    inaDistance: 3.194600 as Multiplier<Ina>,
                },
                undefined,
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the first bound", (): void => {
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
                    distance: 0.211928 as Cents,
                    inaDistance: 0.434351 as Multiplier<Ina>,
                },
            ],
            [ Level.INSANE ]: [
                undefined,
                {
                    id: 1 as Id<JiSymbol>,
                    distance: 0.211928 as Cents,
                    inaDistance: 1.508113 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
