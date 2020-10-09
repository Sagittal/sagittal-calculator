import { Abs, Cents, Id, Monzo, Multiplier, Name, Quotient, Scamon, SQRT_SCALER } from "../../../../../../src/general"
import { APOTOME, BoundType, CommaMean, InaMidpoint, SizeCategoryBound } from "../../../../../../src/sagittal"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { Ina, JiNotationBound, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { INSANE_EDA } from "../../../../../../src/sagittal/notations/ji/levelEdas"
import { computeJiNotationLevelBoundedSymbolClassIdsWithDistances } from "../../../../../../src/scripts/jiNotationBound/io/terminal/levelBoundedSymbolClasses"
import { JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel } from "../../../../../../src/scripts/jiNotationBound/io/terminal/types"

describe("computeJiNotationLevelBoundedSymbolClassIdsWithDistances", (): void => {
    it("returns, given a JI notation bound, for each of its JI levels, an array of the pair of symbols it bounds at that JI notation level, as well as their distances and ina-distances from the bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [175.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 51 as Id<JiNotationBound>,
            name: "175.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 51 as Id<JiNotationBound>,
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
            pitch: {
                monzo: [-30, 19] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [
                JiNotationLevel.MEDIUM,
                JiNotationLevel.HIGH,
                JiNotationLevel.ULTRA,
                JiNotationLevel.EXTREME,
                JiNotationLevel.INSANE,
            ],
            id: 148 as Id<JiNotationBound>,
            name: "L|SS" as Name<SizeCategoryBound>,
            boundType: BoundType.SIZE_CATEGORY_BOUND,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 148 as Id<JiNotationBound>,
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
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 0 as Id<JiNotationBound>,
            name: "1.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 0 as Id<JiNotationBound>,
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

    it("works for the bound between the two commas which are extremely close together", (): void => {
        const jiNotationBound: JiNotationBound = {
            pitch: {
                monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 52 as Id<JiNotationBound>,
            name: ")/| ,.|)" as Name<CommaMean>,
            boundType: BoundType.COMMA_MEAN,
        }

        const actual = computeJiNotationLevelBoundedSymbolClassIdsWithDistances(jiNotationBound)

        const expected: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 52 as Id<JiNotationBound>,
            [ JiNotationLevel.ULTRA ]: [
                {
                    id: 52 as Id<SymbolClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.000854 as Multiplier<Ina>,
                },
                {
                    id: 54 as Id<SymbolClass>,
                    distance: 0.424389 as Abs<Cents>,
                    inaDistance: 0.216516 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    id: 52 as Id<SymbolClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.003429 as Multiplier<Ina>,
                },
                {
                    id: 53 as Id<SymbolClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.003429 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                {
                    id: 52 as Id<SymbolClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.011907 as Multiplier<Ina>,
                },
                {
                    id: 53 as Id<SymbolClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.011907 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
