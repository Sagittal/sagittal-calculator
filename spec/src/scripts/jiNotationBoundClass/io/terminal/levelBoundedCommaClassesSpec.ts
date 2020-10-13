import { Abs, Cents, Id, Monzo, Multiplier, Name, Scamon, SQRT_SCALER } from "../../../../../../src/general"
import { APOTOME, BoundType, CommaMean, InaMidpoint, SizeCategoryBound } from "../../../../../../src/sagittal"
import { CommaClass } from "../../../../../../src/sagittal/notations"
import { Ina, JiNotationBoundClass, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { INSANE_EDA } from "../../../../../../src/sagittal/notations/ji/levelEdas"
import { computeJiNotationLevelBoundedCommaClassIdsWithDistances } from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/levelBoundedCommaClasses"
import { JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel } from "../../../../../../src/scripts/jiNotationBoundClass/io/terminal/types"

describe("computeJiNotationLevelBoundedCommaClassIdsWithDistances", (): void => {
    it("returns, given a JI notation bound class, for each of its JI levels, an array of the pair of comma class positions it bounds at that JI notation level, as well as their distances and ina-distances from the bound", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [175.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 51 as Id<JiNotationBoundClass>,
            name: "175.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIdsWithDistances(jiNotationBoundClass)

        const expected: JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 51 as Id<JiNotationBoundClass>,
            [ JiNotationLevel.MEDIUM ]: [
                {
                    id: 44 as Id<CommaClass>,
                    distance: 3.155908 as Abs<Cents>,
                    inaDistance: 0.582962 as Multiplier<Ina>,
                },
                {
                    id: 58 as Id<CommaClass>,
                    distance: 2.601893 as Abs<Cents>,
                    inaDistance: 0.480624 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    id: 51 as Id<CommaClass>,
                    distance: 0.383716 as Abs<Cents>,
                    inaDistance: 0.786434 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<CommaClass>,
                    distance: 0.222109 as Abs<Cents>,
                    inaDistance: 0.455219 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                {
                    id: 51 as Id<CommaClass>,
                    distance: 0.383716 as Abs<Cents>,
                    inaDistance: 2.730582 as Multiplier<Ina>,
                },
                {
                    id: 52 as Id<CommaClass>,
                    distance: 0.222109 as Abs<Cents>,
                    inaDistance: 1.580567 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the final JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo as Monzo<{ rational: true }>,
                scaler: [404.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 122 as Id<JiNotationBoundClass>,
            name: "404.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIdsWithDistances(jiNotationBoundClass)

        const expected: JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 122 as Id<JiNotationBoundClass>,
            [JiNotationLevel.MEDIUM]: [
                {
                    id: 114 as Id<CommaClass>,
                    distance: 3.569559798711765 as Abs<Cents>,
                    inaDistance: 0.6593724042631744 as Multiplier<Ina>,
                },
                undefined,
            ],
            [JiNotationLevel.EXTREME]: [
                {
                    id: 122 as Id<CommaClass>,
                    distance: 0.3605986407212427 as Abs<Cents>,
                    inaDistance: 0.7390550979554618 as Multiplier<Ina>,
                },
                undefined,
            ],
            [JiNotationLevel.INSANE]: [
                {
                    id: 122 as Id<CommaClass>,
                    distance: 0.3605986407212427 as Abs<Cents>,
                    inaDistance: 2.5660754259483625 as Multiplier<Ina>,
                },
                undefined,
            ]
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the first JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 0 as Id<JiNotationBoundClass>,
            name: "1.5°809" as Name<InaMidpoint>,
            boundType: BoundType.INA_MIDPOINT,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIdsWithDistances(jiNotationBoundClass)

        const expected: JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 0 as Id<JiNotationBoundClass>,
            [ JiNotationLevel.EXTREME ]: [
                undefined,
                {
                    id: 1 as Id<CommaClass>,
                    distance: 0.211928 as Abs<Cents>,
                    inaDistance: 0.434351 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                undefined,
                {
                    id: 1 as Id<CommaClass>,
                    distance: 0.211928 as Abs<Cents>,
                    inaDistance: 1.508113 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("works for the bound class between the two commas which are extremely close together", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            pitch: {
                monzo: [-4, -1, -1, 0, 0, 1, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            id: 52 as Id<JiNotationBoundClass>,
            name: ")/| ,.|)" as Name<CommaMean>,
            boundType: BoundType.COMMA_MEAN,
        }

        const actual = computeJiNotationLevelBoundedCommaClassIdsWithDistances(jiNotationBoundClass)

        const expected: JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel = {
            id: 52 as Id<JiNotationBoundClass>,
            [ JiNotationLevel.ULTRA ]: [
                {
                    id: 52 as Id<CommaClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.000854 as Multiplier<Ina>,
                },
                {
                    id: 54 as Id<CommaClass>,
                    distance: 0.424389 as Abs<Cents>,
                    inaDistance: 0.216516 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    id: 52 as Id<CommaClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.003429 as Multiplier<Ina>,
                },
                {
                    id: 53 as Id<CommaClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.003429 as Multiplier<Ina>,
                },
            ],
            [ JiNotationLevel.INSANE ]: [
                {
                    id: 52 as Id<CommaClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.011907 as Multiplier<Ina>,
                },
                {
                    id: 53 as Id<CommaClass>,
                    distance: 0.001673 as Abs<Cents>,
                    inaDistance: 0.011907 as Multiplier<Ina>,
                },
            ],
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
