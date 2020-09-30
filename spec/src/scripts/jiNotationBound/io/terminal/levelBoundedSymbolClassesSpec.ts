import { Abs, Cents, Id, Multiplier, RealDecimal } from "../../../../../../src/general"
import { BoundType, SymbolClass } from "../../../../../../src/sagittal/notations"
import { Ina, JiNotationBound, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { computeJiNotationLevelBoundedSymbolClassIdsWithDistances } from "../../../../../../src/scripts/jiNotationBound/io/terminal/levelBoundedSymbolClasses"
import { JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel } from "../../../../../../src/scripts/jiNotationBound/io/terminal/types"
import { jiNotationBoundFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationLevelBoundedSymbolClassIdsWithDistances", (): void => {
    it("returns, given a JI notation bound, for each of its JI levels, an array of the pair of symbols it bounds at that JI notation level, as well as their distances and ina-distances from the bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.01434739432 as RealDecimal,  // 24.662198¢
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 54 as Id<JiNotationBound>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 54 as Id<JiNotationBound>,
            [ JiNotationLevel.MEDIUM ]: [
                {
                    id: 44 as Id<SymbolClass>,
                    distance: 3.155908 as Abs<Cents>,
                    inaDistance: 0.582962 as Multiplier<Ina>,
                },
                {
                    id: 58 as Id<SymbolClass>,
                    distance: 2.601893 as Abs<Cents>,
                    inaDistance: 0.480624 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    id: 51 as Id<SymbolClass>,
                    distance: 0.383716 as Abs<Cents>,
                    inaDistance: 0.786434 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<SymbolClass>,
                    distance: 0.222109 as Abs<Cents>,
                    inaDistance: 0.455219 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                {
                    id: 51 as Id<SymbolClass>,
                    distance: 0.383716 as Abs<Cents>,
                    inaDistance: 2.730582 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<SymbolClass>,
                    distance: 0.222109 as Abs<Cents>,
                    inaDistance: 1.580567 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the final JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.04040393192 as RealDecimal,  // 68.572508¢
            jiNotationLevels: [
                JiNotationLevel.MEDIUM,
                JiNotationLevel.HIGH,
                JiNotationLevel.ULTRA,
                JiNotationLevel.EXTREME,
                JiNotationLevel.INSANE,
            ],
            id: 54 as Id<JiNotationBound>,
            boundType: BoundType.SIZE_CATEGORY_BOUND,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 54 as Id<JiNotationBound>,
            [ JiNotationLevel.MEDIUM ]: [
                {
                    id: 141 as Id<SymbolClass>,
                    distance: 3.657883 as Abs<Cents>,
                    inaDistance: 0.675687 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ JiNotationLevel.HIGH ]: [
                {
                    id: 146 as Id<SymbolClass>,
                    distance: 1.281446 as Abs<Cents>,
                    inaDistance: 0.529779 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ JiNotationLevel.ULTRA ]: [
                {
                    id: 146 as Id<SymbolClass>,
                    distance: 1.281446 as Abs<Cents>,
                    inaDistance: 0.653770 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    id: 148 as Id<SymbolClass>,
                    distance: 0.448922 as Abs<Cents>,
                    inaDistance: 0.920076 as Multiplier<Ina>,
                },
                undefined,
            ],
            [ JiNotationLevel.INSANE ]: [
                {
                    id: 148 as Id<SymbolClass>,
                    distance: 0.448922 as Abs<Cents>,
                    inaDistance: 3.194600 as Multiplier<Ina>,
                },
                undefined,
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the first JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.00012176335 as RealDecimal,  // 0.210788021120605¢
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 55 as Id<JiNotationBound>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 55 as Id<JiNotationBound>,
            [ JiNotationLevel.EXTREME ]: [
                undefined,
                {
                    id: 1 as Id<SymbolClass>,
                    distance: 0.211928 as Abs<Cents>,
                    inaDistance: 0.434351 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                undefined,
                {
                    id: 1 as Id<SymbolClass>,
                    distance: 0.211928 as Abs<Cents>,
                    inaDistance: 1.508113 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
