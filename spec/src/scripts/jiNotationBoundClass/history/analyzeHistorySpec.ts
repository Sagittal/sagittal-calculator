import {
    Abs,
    addScamons,
    Cents,
    computePitchFromCents,
    Multiplier,
    Quotient,
    Scamon,
    Sum,
} from "../../../../../src/general"
import { multiply } from "../../../../../src/general/math"
import { IRRATIONAL_SCAMON_BASE_MONZO } from "../../../../../src/general/math/irrational/scamon/constants"
import { APOTOME } from "../../../../../src/sagittal"
import {
    BoundType,
    Ina,
    JiNotationBoundClass,
    JiNotationLevel,
    Tina,
    TINA,
} from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { computeInitialPosition } from "../../../../../src/scripts/jiNotationBoundClass/boundClass/initialPosition"
import { BoundClassHistory } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { analyzeHistory } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundClassEventAnalysisFixture,
    boundClassEventFixture,
    jiNotationBoundClassFixture,
} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("analyzeHistory", (): void => {
    const actualJiNotationBoundPitch = {
        monzo: APOTOME.monzo,
        scaler: [25.5, EXTREME_EDA],
    } as Scamon<{ rational: false }>
    let boundClassHistory: BoundClassHistory
    let pitch: Scamon<{ rational: false }>
    let jiNotationBoundClass: JiNotationBoundClass
    let initialPosition

    it("returns its bound class history but with its event augmented with analysis properties, and computes the final position of the bound class history, and its distance from the initial position, and its overall distance the JI notation bound class moved across all the bound class events", (): void => {
        pitch = addScamons(
            actualJiNotationBoundPitch,
            {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [1, 2400] as Quotient,  // 2^(1/2400) = 0.5¢
            } as Scamon<{ rational: false }>,
        )
        boundClassHistory = [
            {
                ...boundClassEventFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.EXTREME,
            },
            {
                ...boundClassEventFixture,
                pitch,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.INSANE,
            },
        ]
        jiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: actualJiNotationBoundPitch,
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        }
        initialPosition = computeInitialPosition(jiNotationBoundClass)

        const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

        expect(actual.boundClassEventAnalyses).toEqual([
            {
                ...boundClassEventAnalysisFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
                exact: false,
                distance: 0 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
                jiNotationLevel: JiNotationLevel.EXTREME,
            },
            {
                ...boundClassEventAnalysisFixture,
                pitch,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                exact: false,
                distance: 0 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
                jiNotationLevel: JiNotationLevel.INSANE,
            },
        ])
        expect(actual.pitch).toEqual(pitch)
        expect(actual.rank).toBe(RANKS[ BoundType.SIZE_CATEGORY_BOUND ])
        expect(actual.totalDistance).toBe(0 as Sum<Abs<Cents>>)
        expect(actual.initialPositionTinaDistance)
            .toBeCloseToTyped(3.710191 as Multiplier<Tina>)
    })

    describe("when the bound class history's position matches the actual JI notation bound class position                    ", (): void => {
        it("returns the bound class history's events with their rank, plus true for the possible property and a 0 tina error           ", (): void => {
            pitch = actualJiNotationBoundPitch
            boundClassHistory = [
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBe(true)
            expect(actual.tinaError).toBeCloseToTyped(0 as Multiplier<Tina>)
        })
    })

    describe(`when the bound class history's position does not match the actual JI notation bound class position, returns the bound class history plus false for the possible property and the error in tinas`, (): void => {
        it("works when the position is greater than the actual JI notation bound class position by less than a tina              ", (): void => {
            const expectedTinaError = 2 / 5 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundClassHistory = [
                {
                    ...boundClassEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is greater than the actual JI notation bound class position by more than a tina             ", (): void => {
            const expectedTinaError = 5 / 2 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundClassHistory = [
                {
                    ...boundClassEventFixture,
                    boundType:
                    BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound class position by less than a tina                       ", (): void => {
            const expectedTinaError = -2 / 5 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundClassHistory = [
                {
                    ...boundClassEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound class position by more than a tina                       ", (): void => {
            const expectedTinaError = -5 / 2 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundClassHistory = [
                {
                    ...boundClassEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundClassEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })
    })
})
