const {COMMAS} = require("../../../src/boundsAnalysis/data/commas")
const {computeSopfgtt} = require("../../../src/findCommas/utilities/sopfgtt")
const {ACCURACY_THRESHOLD} = require("../../../src/boundsAnalysis/utilities/constants")

const AVERAGE_SOPFGTT = 22.78523489932886

describe("average sopfgtt", () => {
    it("is about 23", () => {
        const total = COMMAS.reduce(
            (totalSopfgtt, comma) => {
                const sopfgtt = computeSopfgtt(comma.monzo)

                return totalSopfgtt + sopfgtt
            },
            0,
        )

        expect(total / COMMAS.length).toBeCloseTo(AVERAGE_SOPFGTT, ACCURACY_THRESHOLD)
    })
})
