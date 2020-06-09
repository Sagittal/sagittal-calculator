const {presentLevel} = require("../../../../src/boundsAnalysis/present/level")

describe("presentLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(presentLevel("VERY_HIGH")).toBe("Very High")
        expect(presentLevel("EXTREME")).toBe("Extreme")
    })
})
