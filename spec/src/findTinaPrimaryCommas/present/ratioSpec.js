const {presentRatio} = require("../../../../src/findTinaPrimaryCommas/present/ratio")

describe("presentRatio", () => {
    it("it shows it with a slash", () => {
        const ratio = [77,75]

        const result = presentRatio(ratio)

        expect(result).toBe('77/75')
    })
})
