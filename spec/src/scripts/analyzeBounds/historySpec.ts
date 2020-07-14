import { Cents, Proportion } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code/constants"
import { Bound, Level, TINA } from "../../../../src/notations/ji"
import { analyzeHistory } from "../../../../src/scripts/analyzeBounds/history"
import { computeInitialPosition } from "../../../../src/scripts/analyzeBounds/initialPosition"
import { EventRank, EventType, History } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture, boundFixture, eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("analyzeHistory", () => {
    const actualBoundCents = 12.43789 as Cents
    let history: History
    let cents: Cents
    let bound: Bound
    let initialPosition

    it("returns its history but with its event augmented with analysis properties, and calculates the final position of the history, and its distance from the initial position, and its overall distance the bound moved across all the events", () => {
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

        const result = analyzeHistory(history, bound, initialPosition)

        expect(result.events).toEqual([
            {
                ...analyzedEventFixture,
                cents,
                type: EventType.INA,
                rank: 0 as EventRank,
                exact: false,
                distance: 0 as Cents,
                inaDistance: 0 as Proportion,
                level: Level.EXTREME,
            },
            {
                ...analyzedEventFixture,
                cents,
                type: EventType.SIZE,
                rank: 2 as EventRank,
                exact: false,
                distance: 0 as Cents,
                inaDistance: 0 as Proportion,
                level: Level.INSANE,
            },
        ])
        expect(result.cents).toBe(cents)
        expect(result.rank).toBe(2 as EventRank)
        expect(result.distance).toBe(0 as Cents)
        expect(result.initialPositionTinaDifference).toBeCloseTo(3.681504379547852, ACCURACY_THRESHOLD)
    })

    describe("when the history's position matches the actual bound position", () => {
        it("returns the history's events with their rank, plus true for the possible property and a 0 tina error", () => {
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

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBeCloseTo(0, ACCURACY_THRESHOLD)
        })
    })

    describe("when the history's position does not match the actual bound position, returns the history plus false for the possible property and the error in tinas", () => {
        it("works when the position is greater than the actual bound position by less than a tina", () => {
            const expectedTinaError = 2 / 5
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

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is greater than the actual bound position by more than a tina", () => {
            const expectedTinaError = 5 / 2
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

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by less than a tina", () => {
            const expectedTinaError = -2 / 5
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

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by more than a tina", () => {
            const expectedTinaError = -5 / 2
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

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })
    })
})
