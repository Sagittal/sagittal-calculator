const {calculateBestHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/calculateBestHistories")

describe("calculateBestHistories", () => {
    it("returns the histories with the best rank", () => {
        const histories = [
            {
                rank: 4,
                position: 12.909,
            },
            {
                rank: 2,
                position: 13.235,
            },
            {
                rank: 2,
                position: 13.47489,
            }
        ]

        const result = calculateBestHistories(histories) // TODO: this needs to actually only find the ones which also are "possible" (0 error)

        expect(result).toEqual([
            {
                rank: 2,
                position: 13.235,
            },
            {
                rank: 2,
                position: 13.47489,
            },
        ])
    })
})
