const {analyzeHistory, ACCURACY_THRESHOLD} = require("../../../../src/boundsAnalysis/analyze/history")
const {computeInitialPosition} = require("../../../../src/boundsAnalysis/data/initialPosition")
const {TINA} = require("../../../../src/boundsAnalysis/data/intervals")

describe("analyzeHistory", () => {
    const actualBoundPosition = 12.43789
    let history
    let position
    let bound
    let initialPosition

    describe("when the history's position matches the actual bound position", () => {
        it("returns the history's events with their rank, plus true for the possible property and a 0 tina error, along with a rank for the history overall, its position, and its distance from the initial position for this bound", () => {
            position = actualBoundPosition
            history = [{type: "INITIAL"}, {position, type: "SIZE"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBeCloseTo(0, ACCURACY_THRESHOLD)
            expect(result.events).toEqual([{type: "INITIAL", rank: 0}, {position, type: "SIZE", rank: 6}])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(6)
            expect(result.initialPositionTinaDifference).toBeCloseTo(0.12342742615738889, ACCURACY_THRESHOLD)
        })
    })

    describe("when the history's position does not match the actual bound position, returns the history plus false for the possible property and the error in tinas", () => {
        it("works when the position is greater than the actual bound position by less than a tina", () => {
            const expectedTinaError = 2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INITIAL"}, {position, type: "MEAN"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual([{type: "INITIAL", rank: 0}, {position, type: "MEAN", rank: 5}])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(5)
            expect(result.initialPositionTinaDifference).toBeCloseTo(0.5234274261573838, ACCURACY_THRESHOLD)
        })

        it("works when the position is greater than the actual bound position by more than a tina", () => {
            const expectedTinaError = 5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INITIAL"}, {position, type: "EDA"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual([{type: "INITIAL", rank: 0}, {position, type: "EDA", rank: 4}])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(4)
            expect(result.initialPositionTinaDifference).toBeCloseTo(2.6234274261573884, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by less than a tina", () => {
            const expectedTinaError = -2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INITIAL"}, {position, type: "SIZE"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual([{type: "INITIAL", rank: 0}, {position, type: "SIZE", rank: 6}])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(6)
            expect(result.initialPositionTinaDifference).toBeCloseTo(-0.276572573842606, ACCURACY_THRESHOLD)
        })

        it("works when the position is below the actual bound position by more than a tina", () => {
            const expectedTinaError = -5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = [{type: "INITIAL"}, {position, type: "MEAN"}]
            bound = {
                position: actualBoundPosition,
                levels: ["EXTREME", "INSANE"],
            }
            initialPosition = computeInitialPosition(bound)

            const result = analyzeHistory(history, bound, initialPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBeCloseTo(expectedTinaError, ACCURACY_THRESHOLD)
            expect(result.events).toEqual([{type: "INITIAL", rank: 0}, {position, type: "MEAN", rank: 5}])
            expect(result.position).toBe(position)
            expect(result.rank).toBe(5)
            expect(result.initialPositionTinaDifference).toBeCloseTo(-2.3765725738426107, ACCURACY_THRESHOLD)
        })
    })
})
