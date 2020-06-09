const {computeOverrideEvent} = require("../../../../src/boundsAnalysis/plot/overrideEvent")

describe("overrideEvent", () => {
    it('works when just below the final bound', () => {
        const level = "HIGH"
        const bound = { position: 68, levels: ["HIGH", "VERY_HIGH"] }

        const result = computeOverrideEvent(level, bound)

        expect(result).toEqual({
            level,
            type: "OVERRIDE",
            name: `guaranteed between )|\\\\ and the maximum position at the VERY_HIGH level, to re-initialize if necessary`,
            position: 68.5725082211804,
        })
    })
})
