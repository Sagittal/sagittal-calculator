const {extendHistories} = require("../../../../src/boundsAnalysis/extendHistories/extendHistories")

describe("extendHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const histories = [
            {
                events: [],
                position: 9,
            },
        ]
        const level = "Medium"
        const actualBoundPosition = 9.5

        const result = extendHistories(histories, level, actualBoundPosition)

        expect(result).toEqual([
            {
                events: ["Medium_EDA_1.5/21_@8.12"],
                position: 8.120357575550852,
            },
            {
                events: ["Medium_MEAN_|(-)|(_@7.72"],
                position: 7.72288142310195,
            },
        ])
    })
})
