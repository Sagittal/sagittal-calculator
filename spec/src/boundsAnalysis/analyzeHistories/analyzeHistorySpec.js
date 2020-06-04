const {analyzeHistory} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeHistory")
const {TINA} = require("../../../../src/boundsAnalysis/data/intervals")

describe("analyzeHistory", () => {
    const actualBoundPosition = 12.43789
    let history
    let position

    describe("when the history's position matches the actual bound position", () => {
        it("returns the history, plus true for the possible property and a 0 error", () => {
            position = actualBoundPosition
            history = {
                events: ["event1", "event2"],
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBe(0)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
        })
    })

    describe("when the history's position does not match the actual bound position, returns the history plus false for the possible property and the error in tinas", () => {
        it("works when the position is greater than the actual bound position by less than a tina", () => {
            const expectedTinaError = 2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
        })

        it("works when the position is greater than the actual bound position by more than a tina", () => {
            const expectedTinaError = 5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
        })

        it("works when the position is below the actual bound position by less than a tina", () => {
            const expectedTinaError = -2 / 5
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
        })

        it("works when the position is below the actual bound position by more than a tina", () => {
            const expectedTinaError = -5 / 2
            position = actualBoundPosition + TINA * expectedTinaError
            history = {
                events: ["event1", "event2"],
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(false)
            expect(result.tinaError).toBe(expectedTinaError)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
        })
    })

    describe("when the history's position matches the actual bound position, but the history was overridden at some level", () => {
        it("returns the history, plus true for the possible property and a 0 error but overridden also set to true", () => {
            position = actualBoundPosition
            history = {
                events: ["event1", "event2"],
                overridden: true,
                position,
            }

            const result = analyzeHistory(history, actualBoundPosition)

            expect(result.possible).toBe(true)
            expect(result.tinaError).toBe(0)
            expect(result.events).toEqual(["event1", "event2"])
            expect(result.position).toBe(position)
            expect(result.overridden).toBe(true)
        })
    })
})
