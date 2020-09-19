import { Abs, add, Cents, Multiplier, Sum } from "../../../../../src/general"
import { multiply } from "../../../../../src/general/math"
import { Ina, JiNotationBound, JiNotationLevel, Tina, TINA } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/jiNotationBound/bound/initialPosition"
import { EventType, History } from "../../../../../src/scripts/jiNotationBound/histories"
import { analyzeHistory } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import {
    eventAnalysisFixture,
    eventFixture,
    jiNotationBoundFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeHistory", (): void => {
    const actualJiNotationBoundCents = 12.43789 as Cents
    let history: History
    let cents: Cents
    let jiNotationBound: JiNotationBound
    let initialPosition

    it(
        `returns its history but with its event augmented with analysis properties, 
        and computes the final position of the history, 
        and its distance from the initial position, 
        and its overall distance the JI notation bound moved across all the events`,
        (): void => {
            cents = actualJiNotationBoundCents + 0.5 as Cents
            history = [
                { ...eventFixture, cents, type: EventType.INA_MIDPOINT, jiNotationLevel: JiNotationLevel.EXTREME },
                {
                    ...eventFixture,
                    cents,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ]
            jiNotationBound = {
                ...jiNotationBoundFixture,
                cents: actualJiNotationBoundCents,
                jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBound)

            const actual = analyzeHistory(history, jiNotationBound, initialPosition)

            expect(actual.eventAnalyses).toEqual([
                {
                    ...eventAnalysisFixture,
                    cents,
                    type: EventType.INA_MIDPOINT,
                    rank: RANKS[ EventType.INA_MIDPOINT ],
                    exact: false,
                    distance: 0 as Abs<Cents>,
                    inaDistance: 0 as Multiplier<Ina>,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                },
                {
                    ...eventAnalysisFixture,
                    cents,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                    exact: false,
                    distance: 0 as Abs<Cents>,
                    inaDistance: 0 as Multiplier<Ina>,
                    jiNotationLevel: JiNotationLevel.INSANE,
                },
            ])
            expect(actual.cents).toBe(cents)
            expect(actual.rank).toBe(RANKS[ EventType.SIZE_CATEGORY_BOUND ])
            expect(actual.totalDistance).toBe(0 as Sum<Abs<Cents>>)
            expect(actual.initialPositionTinaDistance)
                .toBeCloseToTyped(3.681504 as Multiplier<Tina>)
        },
    )

    describe("when the history's position matches the actual JI notation bound position", (): void => {
        it(
            `returns the history's events with their rank, plus true for the possible property and a 0 tina error`,
            (): void => {
                cents = actualJiNotationBoundCents
                history = [
                    { ...eventFixture, cents, type: EventType.INA_MIDPOINT, jiNotationLevel: JiNotationLevel.EXTREME },
                    {
                        ...eventFixture,
                        cents,
                        type: EventType.SIZE_CATEGORY_BOUND,
                        jiNotationLevel: JiNotationLevel.INSANE,
                    },
                ]
                jiNotationBound = {
                    ...jiNotationBoundFixture,
                    cents: actualJiNotationBoundCents,
                    jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
                }
                initialPosition = computeInitialPosition(jiNotationBound)

                const actual = analyzeHistory(history, jiNotationBound, initialPosition)

                expect(actual.possible).toBe(true)
                expect(actual.tinaError).toBeCloseToTyped(0 as Multiplier<Tina>)
            },
        )
    })

    describe(
        `when the history's position does not match the actual JI notation bound position, 
        returns the history plus false for the possible property and the error in tinas`,
        (): void => {
            it(
                "works when the position is greater than the actual JI notation bound position by less than a tina",
                (): void => {
                    const expectedTinaError = 2 / 5 as Multiplier<Tina>
                    cents = add(actualJiNotationBoundCents, multiply(TINA, expectedTinaError))
                    history = [{ ...eventFixture, type: EventType.INA_MIDPOINT, cents }, {
                        ...eventFixture,
                        cents,
                        type: EventType.COMMA_MEAN,
                    }]
                    jiNotationBound = {
                        ...jiNotationBoundFixture,
                        cents: actualJiNotationBoundCents,
                        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
                    }
                    initialPosition = computeInitialPosition(jiNotationBound)

                    const actual = analyzeHistory(history, jiNotationBound, initialPosition)

                    expect(actual.possible).toBe(false)
                    expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
                },
            )

            it(
                "works when the position is greater than the actual JI notation bound position by more than a tina",
                (): void => {
                    const expectedTinaError = 5 / 2 as Multiplier<Tina>
                    cents = add(actualJiNotationBoundCents, multiply(TINA, expectedTinaError))
                    history = [{ ...eventFixture, type: EventType.INA_MIDPOINT, cents }, {
                        ...eventFixture,
                        cents,
                        type: EventType.INA_MIDPOINT,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                    }]
                    jiNotationBound = {
                        ...jiNotationBoundFixture,
                        cents: actualJiNotationBoundCents,
                        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
                    }
                    initialPosition = computeInitialPosition(jiNotationBound)

                    const actual = analyzeHistory(history, jiNotationBound, initialPosition)

                    expect(actual.possible).toBe(false)
                    expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
                },
            )

            it(
                "works when the position is below the actual JI notation bound position by less than a tina",
                (): void => {
                    const expectedTinaError = -2 / 5 as Multiplier<Tina>
                    cents = add(actualJiNotationBoundCents, multiply(TINA, expectedTinaError))
                    history = [{
                        ...eventFixture,
                        type: EventType.INA_MIDPOINT,
                        cents,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                    }, {
                        ...eventFixture,
                        cents,
                        type: EventType.SIZE_CATEGORY_BOUND,
                        jiNotationLevel: JiNotationLevel.INSANE,
                    }]
                    jiNotationBound = {
                        ...jiNotationBoundFixture,
                        cents: actualJiNotationBoundCents,
                        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
                    }
                    initialPosition = computeInitialPosition(jiNotationBound)

                    const actual = analyzeHistory(history, jiNotationBound, initialPosition)

                    expect(actual.possible).toBe(false)
                    expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
                },
            )

            it(
                "works when the position is below the actual JI notation bound position by more than a tina",
                (): void => {
                    const expectedTinaError = -5 / 2 as Multiplier<Tina>
                    cents = add(actualJiNotationBoundCents, multiply(TINA, expectedTinaError))
                    history = [{ ...eventFixture, type: EventType.INA_MIDPOINT, cents }, {
                        ...eventFixture,
                        cents,
                        type: EventType.COMMA_MEAN,
                    }]
                    jiNotationBound = {
                        ...jiNotationBoundFixture,
                        cents: actualJiNotationBoundCents,
                        jiNotationLevels: [JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
                    }
                    initialPosition = computeInitialPosition(jiNotationBound)

                    const actual = analyzeHistory(history, jiNotationBound, initialPosition)

                    expect(actual.possible).toBe(false)
                    expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
                },
            )
        },
    )
})
