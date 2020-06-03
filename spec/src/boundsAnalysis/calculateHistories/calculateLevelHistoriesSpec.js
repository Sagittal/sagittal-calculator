const {calculateLevelHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateLevelHistories")

describe("calculateLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent = {
            level: "Medium",
            type: "EDA",
            name: "1.5/21",
            position: 8.120357575550852,
        }
        const secondHistoryPriorEvent = {
            level: "Medium",
            type: "MEAN",
            name: "|( )|(",
            position: 7.72288142310195,
        }
        const histories = [
            {
                position: 8.120357575550852,
                events: [
                    firstHistoryPriorEvent,
                ],
            },
            {
                position: 8.120357575550852,
                events: [
                    secondHistoryPriorEvent,
                ],
            },
        ]
        const level = "High"
        const actualBoundPosition = 8.1

        const result = calculateLevelHistories(histories, level, actualBoundPosition)

        expect(result).toEqual([
            {
                position: 6.047074790303825,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "2.5/47", position: 6.047074790303825},
                ],
            },
            {
                position: 8.465904706425356,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "3.5/47", position: 8.465904706425356},
                ],
            },
            {
                position: 7.243699380344975,
                events: [
                    firstHistoryPriorEvent,
                    {level: "High", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
                ],
            },
            {
                position: 6.047074790303825,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "2.5/47", position: 6.047074790303825},
                ],
            },
            {
                position: 8.465904706425356,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "EDA", name: "3.5/47", position: 8.465904706425356},
                ],
            },
            {
                position: 7.243699380344975,
                events: [
                    secondHistoryPriorEvent,
                    {level: "High", type: "MEAN", name: "|( ~|", position: 7.243699380344975},
                ],
            },
        ])
    })
})
