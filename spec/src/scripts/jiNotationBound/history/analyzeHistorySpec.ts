import {
    Abs,
    addScamons,
    Cents,
    computePitchFromCents,
    Multiplier,
    Quotient, Scamon,
    Sum,
} from "../../../../../src/general"
import { multiply } from "../../../../../src/general/math"
import { IRRATIONAL_SCAMON_BASE_MONZO } from "../../../../../src/general/math/irrational/scamon/constants"
import { APOTOME } from "../../../../../src/sagittal"
import { BoundType, Ina, JiNotationBound, JiNotationLevel, Tina, TINA } from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { computeInitialPosition } from "../../../../../src/scripts/jiNotationBound/bound/initialPosition"
import { BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { analyzeHistory } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundEventFixture,
    jiNotationBoundFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeHistory", (): void => {
    const actualJiNotationBoundPitch = { 
        monzo: APOTOME.monzo, 
        scaler: [25.5, EXTREME_EDA] 
    } as Scamon<{ rational: false }>
    let boundHistory: BoundHistory
    let pitch: Scamon<{ rational: false }>
    let jiNotationBound: JiNotationBound
    let initialPosition

    it("returns its bound history but with its event augmented with analysis properties, and computes the final position of the bound history, and its distance from the initial position, and its overall distance the JI notation bound moved across all the bound events", (): void => {
        pitch = addScamons(
            actualJiNotationBoundPitch,
            {
                monzo: IRRATIONAL_SCAMON_BASE_MONZO,
                scaler: [1, 2400] as Quotient,  // 2^(1/2400) = 0.5¢
            } as Scamon<{ rational: false }>,
        )
        boundHistory = [
            {
                ...boundEventFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.EXTREME,
            },
            {
                ...boundEventFixture,
                pitch,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.INSANE,
            },
        ]
        jiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: actualJiNotationBoundPitch,
            jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        }
        initialPosition = computeInitialPosition(jiNotationBound)

        const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

        expect(actual.boundEventAnalyses).toEqual([
            {
                ...boundEventAnalysisFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
                exact: false,
                distance: 0 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
                jiNotationLevel: JiNotationLevel.EXTREME,
            },
            {
                ...boundEventAnalysisFixture,
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

    describe("when the bound history's position matches the actual JI notation bound position", (): void => {
        it("returns the bound history's events with their rank, plus true for the possible property and a 0 tina error           ", (): void => {
            pitch = actualJiNotationBoundPitch
            boundHistory = [
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

            expect(actual.possible).toBe(true)
            expect(actual.tinaError).toBeCloseToTyped(0 as Multiplier<Tina>)
        })
    })

    describe(`when the bound history's position does not match the actual JI notation bound position, returns the bound history plus false for the possible property and the error in tinas`, (): void => {
        it("works when the position is greater than the actual JI notation bound position by less than a tina              ", (): void => {
            const expectedTinaError = 2 / 5 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is greater than the actual JI notation bound position by more than a tina             ", (): void => {
            const expectedTinaError = 5 / 2 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType:
                    BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound position by less than a tina                       ", (): void => {
            const expectedTinaError = -2 / 5 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound position by more than a tina                       ", (): void => {
            const expectedTinaError = -5 / 2 as Multiplier<Tina>
            pitch = addScamons(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(boundHistory, jiNotationBound, initialPosition)

            expect(actual.possible).toBe(false)
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })
    })
})
