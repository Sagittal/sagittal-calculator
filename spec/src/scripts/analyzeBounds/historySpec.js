const {analyzeHistory, ACCURACY_THRESHOLD} = require("../../../../src/scripts/analyzeBounds/history")
const {computeInitialPosition} = require("../../../../src/scripts/analyzeBounds/initialPosition")
const {TINA} = require("../../../../src/notations/ji/intervals")

describe("analyzeHistory", () => {
    const actualBoundPosition = 12.43789
    let history
    let position
    let bound
    let initialPosition

    it("returns its history but with its event augmented with analysis properties, and calculates the final position of the history, and its distance from the initial position, and its overall distance the bound moved across all the events", () => {
        position = actualBoundPosition + 0.5
        history = [
            {position, type: "INA", level: "EXTREME"},
            {position, type: "SIZE", level: "INSANE"},
        ]
        bound = {
            position: actualBoundPosition,
            levels: ["EXTREME", "INSANE"],
        }
        initialPosition = computeInitialPosition(bound)

        const result = analyzeHistory(history, bound, initialPosition)

        expect(result.events).toEqual([
            {position, type: "INA", rank: 0, exact: false, distance: 0, inaDistance: 0, level: "EXTREME"},
            {position, type: "SIZE", rank: 2, exact: false, distance: 0, inaDistance: 0, level: "INSANE"},
        ])
        expect(result.position).toBe(position)
        expect(result.rank).toBe(2)
        expect(result.distance).toBe(0)
        expect(result.initialPositionTinaDifference).toBeCloseTo(3.681504379547852, ACCURACY_THRESHOLD)
    })

    describe("when the history's position matches the actual bound position", () => {
        it("returns the history's events with their rank, plus true for the possible property and a 0 tina error", () => {
            position = actualBoundPosition
            history = [
                {position, type: "INA", level: "EXTREME"},
                {position, type: "SIZE", level: "INSANE"},
            ]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
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
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INA", position}, {position, type: "MEAN"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is greater than the actual bound position by more than a tina", () => {
            const expectedTinaError = 5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INA", position}, {position, type: "INA", level: "EXTREME"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by less than a tina", () => {
            const expectedTinaError = -2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INA", position, level: "EXTREME"}, {position, type: "SIZE", level: "INSANE"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by more than a tina", () => {
            const expectedTinaError = -5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INA", position}, {position, type: "MEAN"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
        })
    })
})
