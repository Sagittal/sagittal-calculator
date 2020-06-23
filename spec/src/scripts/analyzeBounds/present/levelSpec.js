const {presentLevel} = require("../../../../../src/scripts/analyzeBounds/present/level")

describe("presentLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(presentLevel("ULTRA")).toBe("Ultra")
        expect(presentLevel("EXTREME")).toBe("Extreme")
    })
})
