const {analyzeComma} = require("../../../../src/findTinaPrimaryCommas/analyze/comma")

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of the comma", () => {
        const monzo = [-8, -6, 3, 5, -1]

        const result = analyzeComma(monzo)

        expect(result).toEqual({
            cents: 40.02272638304789,
            monzo: [ -8, -6, 3, 5, -1 ],
            ratio: [ 2100875, 2052864 ],
            commaName: '2100875/11S',
            limit: 11,
            apotomeSlope: -8.464345074135046,
            sopfgtt: 61,
        })
    })
})
