import { Cents, Integer, Proportion, Rank } from "../../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../../src/general/code"
import { Bound, Level, Tina, TINA } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/analyzeBounds/analyzeBound/initialPosition"
import { AnalyzedEvent, computeAnalyzedHistory } from "../../../../../src/scripts/analyzeBounds/analyzedHistory"
import { EventType, History } from "../../../../../src/scripts/analyzeBounds/histories"
import {
    analyzedEventFixture,
    boundFixture,
    eventFixture,
} from "../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeAnalyzedHistory", () => {
    const actualBoundCents = 12.43789 as Cents
    let history: History
    let cents: Cents
    let bound: Bound
    let initialPosition

    it(
        `returns its history but with its event augmented with analysis properties, 
        and computes the final position of the history, 
        and its distance from the initial position, 
        and its overall distance the bound moved across all the events`,
        () => {
            cents = actualBoundCents + 0.5 as Cents
            history = [
                { ...eventFixture, cents, type: EventType.INA, level: Level.EXTREME },
                { ...eventFixture, cents, type: EventType.SIZE, level: Level.INSANE },
            ]
            bound = {
                ...boundFixture,
                cents: actualBoundCents,
                levels: [Level.EXTREME, Level.INSANE],
            }
            initialPosition = computeInitialPosition(bound)

            const actual = computeAnalyzedHistory(history, bound, initialPosition)

            expect(actual.events).toEqual([
                {
                    ...analyzedEventFixture,
                    cents,
                    type: EventType.INA,
                    rank: 0 as Rank<AnalyzedEvent, Integer>,
                    exact: false,
                    distance: 0 as Cents,
                    inaDistance: 0 as Proportion,
                    level: Level.EXTREME,
                },
                {
                    ...analyzedEventFixture,
                    cents,
                    type: EventType.SIZE,
                    rank: 2 as Rank<AnalyzedEvent, Integer>,
                    exact: false,
                    distance: 0 as Cents,
                    inaDistance: 0 as Proportion,
                    level: Level.INSANE,
                },
            ])
            expect(actual.cents).toBe(cents)
            expect(actual.rank).toBe(2 as Rank<AnalyzedEvent, Integer>)
            expect(actual.distance).toBe(0 as Cents)
            expect(actual.initialPositionTinaDifference)
                .toBeCloseToTyped(3.681504379547852 as Proportion<Tina>, ACCURACY_THRESHOLD)
        },
    )

    describe("when the history's position matches the actual bound position", () => {
        it(
            `returns the history's events with their rank, plus true for the possible property and a 0 tina error`,
            () => {
                cents = actualBoundCents
                history = [
                    { ...eventFixture, cents, type: EventType.INA, level: Level.EXTREME },
                    { ...eventFixture, cents, type: EventType.SIZE, level: Level.INSANE },
                ]
                bound = {
                    ...boundFixture,
                    cents: actualBoundCents,
                    levels: [Level.EXTREME, Level.INSANE],
                }
                initialPosition = computeInitialPosition(bound)

                const actual = computeAnalyzedHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(true)
                expect(actual.tinaError).toBeCloseToTyped(0 as Proportion<Tina>, ACCURACY_THRESHOLD)
            },
        )
    })

    describe(
        `when the history's position does not match the actual bound position, 
        returns the history plus false for the possible property and the error in tinas`,
        () => {
            it("works when the position is greater than the actual bound position by less than a tina", () => {
                const expectedTinaError = 2 / 5 as Proportion<Tina>
                cents = actualBoundCents + TINA * expectedTinaError as Cents
                history = [{ ...eventFixture, type: EventType.INA, cents }, {
                    ...eventFixture,
                    cents,
                    type: EventType.MEAN,
                }]
                bound = {
                    ...boundFixture,
                    cents: actualBoundCents,
                    levels: [Level.EXTREME, Level.INSANE],
                }
                initialPosition = computeInitialPosition(bound)

                const actual = computeAnalyzedHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError, ACCURACY_THRESHOLD)
            })

            it("works when the position is greater than the actual bound position by more than a tina", () => {
                const expectedTinaError = 5 / 2 as Proportion<Tina>
                cents = actualBoundCents + TINA * expectedTinaError as Cents
                history = [{ ...eventFixture, type: EventType.INA, cents }, {
                    ...eventFixture,
                    cents,
                    type: EventType.INA,
                    level: Level.EXTREME,
                }]
                bound = {
                    ...boundFixture,
                    cents: actualBoundCents,
                    levels: [Level.EXTREME, Level.INSANE],
                }
                initialPosition = computeInitialPosition(bound)

                const actual = computeAnalyzedHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError, ACCURACY_THRESHOLD)
            })

            it("works when the position is below the actual bound position by less than a tina", () => {
                const expectedTinaError = -2 / 5 as Proportion<Tina>
                cents = actualBoundCents + TINA * expectedTinaError as Cents
                history = [{ ...eventFixture, type: EventType.INA, cents, level: Level.EXTREME }, {
                    ...eventFixture,
                    cents,
                    type: EventType.SIZE,
                    level: Level.INSANE,
                }]
                bound = {
                    ...boundFixture,
                    cents: actualBoundCents,
                    levels: [Level.EXTREME, Level.INSANE],
                }
                initialPosition = computeInitialPosition(bound)

                const actual = computeAnalyzedHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError, ACCURACY_THRESHOLD)
            })

            it("works when the position is below the actual bound position by more than a tina", () => {
                const expectedTinaError = -5 / 2 as Proportion<Tina>
                cents = actualBoundCents + TINA * expectedTinaError as Cents
                history = [{ ...eventFixture, type: EventType.INA, cents }, {
                    ...eventFixture,
                    cents,
                    type: EventType.MEAN,
                }]
                bound = {
                    ...boundFixture,
                    cents: actualBoundCents,
                    levels: [Level.EXTREME, Level.INSANE],
                }
                initialPosition = computeInitialPosition(bound)

                const actual = computeAnalyzedHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError, ACCURACY_THRESHOLD)
            })
        },
    )
})
