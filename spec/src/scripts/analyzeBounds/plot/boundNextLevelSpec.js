const {computeBoundNextLevel} = require("../../../../../src/scripts/analyzeBounds/plot/boundNextLevel")

describe("computeBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound = {
            levels: ["MEDIUM", "ULTRA"],
        }

        const result = computeBoundNextLevel(bound, "MEDIUM")

        expect(result).toBe("ULTRA")
    })
})
