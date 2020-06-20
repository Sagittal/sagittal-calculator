const {COMMAS} = require("../../../src/boundsAnalysis/data/commas")
const {computeSopfgtt} = require("../../../src/findTinaPrimaryCommas/utilities/sopfgtt")
const {ACCURACY_THRESHOLD} = require("../../../src/boundsAnalysis/utilities/constants")

const AVERAGE_SOPFGTT = 22.946666666666665

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
