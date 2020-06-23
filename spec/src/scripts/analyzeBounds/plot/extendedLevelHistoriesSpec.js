const {computeExtendedLevelHistories} = require("../../../../../src/scripts/analyzeBounds/plot/extendedLevelHistories")

describe("computeExtendedLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent = {
            level: "MEDIUM",
            type: "INA",
            name: "1.5°21",
            position: 8.120357575550852,
        }
        const secondHistoryPriorEvent = {
            level: "MEDIUM",
            type: "MEAN",
            name: "|( )|(",
            position: 7.72288142310195,
        }
        const histories = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const level = "HIGH"
        const bound = {
            position: 8.1,
            levels: ["MEDIUM", "HIGH", "ULTRA"],
        }

        const result = computeExtendedLevelHistories(histories, level, bound)

        expect(result).toEqual([
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "INA", name: "2.5°47", position: 6.047074790303825},
            ],
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "INA", name: "3.5°47", position: 8.465904706425356},
            ],
            [
                firstHistoryPriorEvent,
                {level: "HIGH", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "INA", name: "2.5°47", position: 6.047074790303825},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "INA", name: "3.5°47", position: 8.465904706425356},
            ],
            [
                secondHistoryPriorEvent,
                {level: "HIGH", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
            ],
        ])
    })
})
