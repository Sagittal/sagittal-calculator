const {COMMAS} = require("../../../src/boundsAnalysis/data/commas")
const {computeSopfgtt} = require("../../../src/findTinaPrimaryCommas/utilities/sopfgtt")

describe("average sopfgtt", () => {
    it("gets me my answer", () => {
        const total = COMMAS.reduce(
            (totalSopfgtt, comma) => {
                const sopfgtt = computeSopfgtt(comma.monzo)
                console.log(sopfgtt)

                return totalSopfgtt + sopfgtt
            },
            0,
        )

        console.log(total / COMMAS.length)
    })
})
