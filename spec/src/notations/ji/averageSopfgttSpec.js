const {SYMBOLS} = require("../../../../src/notations/ji/symbols")
const {computeSopfgtt} = require("../../../../src/utilities/comma/sopfgtt")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

const AVERAGE_SOPFGTT = 22.78523489932886

describe("average sopfgtt", () => {
    it("is about 23", () => {
        const total = SYMBOLS.reduce(
            (totalSopfgtt, symbol) => {
                const sopfgtt = computeSopfgtt(symbol.primaryComma.monzo)

                return totalSopfgtt + sopfgtt
            },
            0,
        )

        expect(total / SYMBOLS.length).toBeCloseTo(AVERAGE_SOPFGTT, ACCURACY_THRESHOLD)
    })
})
