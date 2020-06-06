const {analyzeHistory, ACCURACY_THRESHOLD} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeHistory")
const {calculateInitialPosition} = require("../../../../src/boundsAnalysis/data/calculateInitialPosition")
const {TINA} = require("../../../../src/boundsAnalysis/data/intervals")

describe("analyzeHistory", () => {
    const actualBoundPosition = 12.43789
    let history
    let position
    let bound
    let initialPosition

    describe("when the history's position matches the actual bound position", () => {
        it("returns the history, plus true for the possible property and a 0 error", () => {
            position = actualBoundPosition
            history = {
                events: ["event1", "event2"],
                rank: 3,
                position,
            }
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBeCloseTo(0, ACCURACY_THRESHOLD)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(3)
            expect(result.initialPositionTinaDifference).toBeCloseTo(0.12342742615738889, ACCURACY_THRESHOLD)
        })
    })

    describe("when the history's position does not match the actual bound position, returns the history plus false for the possible property and the error in tinas", () => {
        it("works when the position is greater than the actual bound position by less than a tina", () => {
            const expectedTinaError = 2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                rank: 2,
                position,
            }
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(2)
            expect(result.initialPositionTinaDifference).toBeCloseTo(0.5234274261573838, ACCURACY_THRESHOLD)
        })

        it("works when the position is greater than the actual bound position by more than a tina", () => {
            const expectedTinaError = 5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                rank: 1,
                position,
            }
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(1)
            expect(result.initialPositionTinaDifference).toBeCloseTo(2.6234274261573884, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by less than a tina", () => {
            const expectedTinaError = -2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                rank: 4,
                position,
            }
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(4)
            expect(result.initialPositionTinaDifference).toBeCloseTo(-0.276572573842606, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by more than a tina", () => {
            const expectedTinaError = -5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                rank: 5,
                position,
            }
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(5)
            expect(result.initialPositionTinaDifference).toBeCloseTo(-2.3765725738426107, ACCURACY_THRESHOLD)
        })
    })
})
