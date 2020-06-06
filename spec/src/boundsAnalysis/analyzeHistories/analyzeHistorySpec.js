const {analyzeHistory} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeHistory")
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
                levels: ["extreme", "insane"]
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBe(0)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(3)
            expect(result.initialPositionTinaDistance).toBe(0.123427)
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
                levels: ["extreme", "insane"]
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(2)
            expect(result.initialPositionTinaDistance).toBe(0.523427)
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
                levels: ["extreme", "insane"]
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(1)
            expect(result.initialPositionTinaDistance).toBe(2.623427)
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
                levels: ["extreme", "insane"]
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(4)
            expect(result.initialPositionTinaDistance).toBe(-0.276573)
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
                levels: ["extreme", "insane"]
            }
            initialPosition = calculateInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(5)
            expect(result.initialPositionTinaDistance).toBe(-2.376573)
        })
    })
})
