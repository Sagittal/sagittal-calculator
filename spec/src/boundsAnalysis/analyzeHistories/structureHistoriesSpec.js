const {structureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/structureHistories")

describe("structureHistories", () => {
    it("structures histories", () => {
        const histories = [
            {
                events: [
                    "VeryHigh_MEAN_'/|_)/|_@24.2",
                    "Extreme_MEAN_,)/|_)/|_@24.6",
                ],
                position: 24.58139537326805,
            },
            {
                events: [
                    "VeryHigh_MEAN_'/|_)/|_@24.2",
                    "Extreme_EDA_49.5/233@24.2",
                ],
                position: 24.151964806252103,
            },
            {
                events: [
                    "VeryHigh_EDA_12.5/58@24.5",
                    "Extreme_MEAN_,)/|_)/|_@24.6",
                ],
                position: 24.58139537326805,
            },
            {
                events: [
                    "VeryHigh_EDA_12.5/58@24.5",
                    "Extreme_EDA_50.5/233@24.6",
                ],
                position: 24.63988328718649,
            },
        ]

        const result = structureHistories(histories)

        expect(result).toEqual({
            "VeryHigh_MEAN_'/|_)/|_@24.2": {
                "Extreme_MEAN_,)/|_)/|_@24.6": 24.58139537326805,
                "Extreme_EDA_49.5/233@24.2": 24.151964806252103,
            },
            "VeryHigh_EDA_12.5/58@24.5": {
                "Extreme_MEAN_,)/|_)/|_@24.6": 24.58139537326805,
                "Extreme_EDA_50.5/233@24.6": 24.63988328718649,
            },
        })
    })
})
