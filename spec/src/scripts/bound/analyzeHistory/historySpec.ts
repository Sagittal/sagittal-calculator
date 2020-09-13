import { Cents, Integer, Multiplier, Rank, sum } from "../../../../../src/general"
import { multiply } from "../../../../../src/general/math"
import { Bound, Ina, Level, Tina, TINA } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/bound/analyzeBound/initialPosition"
import { analyzeHistory, EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { EventType, History } from "../../../../../src/scripts/bound/histories"
import { boundFixture, eventAnalysisFixture, eventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("analyzeHistory", (): void => {
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
        (): void => {
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

            const actual = analyzeHistory(history, bound, initialPosition)

            expect(actual.events).toEqual([
                {
                    ...eventAnalysisFixture,
                    cents,
                    type: EventType.INA,
                    rank: 0 as Integer & Rank<EventAnalysis>,
                    exact: false,
                    distance: 0 as Cents,
                    inaDistance: 0 as Multiplier<Ina>,
                    level: Level.EXTREME,
                },
                {
                    ...eventAnalysisFixture,
                    cents,
                    type: EventType.SIZE,
                    rank: 2 as Integer & Rank<EventAnalysis>,
                    exact: false,
                    distance: 0 as Cents,
                    inaDistance: 0 as Multiplier<Ina>,
                    level: Level.INSANE,
                },
            ])
            expect(actual.cents).toBe(cents)
            expect(actual.rank).toBe(2 as Integer & Rank<EventAnalysis>)
            expect(actual.totalDistance).toBe(0 as Cents)
            expect(actual.initialPositionTinaDistance)
                .toBeCloseToTyped(3.681504379547852 as Multiplier<Tina>)
        },
    )

    describe("when the history's position matches the actual bound position", (): void => {
        it(
            `returns the history's events with their rank, plus true for the possible property and a 0 tina error`,
            (): void => {
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

                const actual = analyzeHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(true)
                expect(actual.tinaError).toBeCloseToTyped(0 as Multiplier<Tina>)
            },
        )
    })

    describe(
        `when the history's position does not match the actual bound position, 
        returns the history plus false for the possible property and the error in tinas`,
        (): void => {
            it("works when the position is greater than the actual bound position by less than a tina", (): void => {
                const expectedTinaError = 2 / 5 as Multiplier<Tina>
                cents = sum(actualBoundCents, multiply(TINA, expectedTinaError))
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

                const actual = analyzeHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
            })

            it("works when the position is greater than the actual bound position by more than a tina", (): void => {
                const expectedTinaError = 5 / 2 as Multiplier<Tina>
                cents = sum(actualBoundCents, multiply(TINA, expectedTinaError))
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

                const actual = analyzeHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
            })

            it("works when the position is below the actual bound position by less than a tina", (): void => {
                const expectedTinaError = -2 / 5 as Multiplier<Tina>
                cents = sum(actualBoundCents, multiply(TINA, expectedTinaError))
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

                const actual = analyzeHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
            })

            it("works when the position is below the actual bound position by more than a tina", (): void => {
                const expectedTinaError = -5 / 2 as Multiplier<Tina>
                cents = sum(actualBoundCents, multiply(TINA, expectedTinaError))
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

                const actual = analyzeHistory(history, bound, initialPosition)

                expect(actual.possible).toBe(false)
                expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
            })
        },
    )
})
