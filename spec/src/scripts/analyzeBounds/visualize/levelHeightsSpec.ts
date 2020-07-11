import { computeLevelHeights } from "../../../../../src/scripts/analyzeBounds/visualize/levelHeights"
import { ACCURACY_THRESHOLD } from "../../../../../src/utilities/constants"
import { Level } from "../../../../../src/notations/ji/types"

describe("computeLevelHeights", () => {
    it("gives the correct height for the tops of each level", () => {
        const result = computeLevelHeights(0)

        expect(result[ Level.MEDIUM ]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(result[ Level.HIGH ]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(result[ Level.ULTRA ]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(result[ Level.EXTREME ]).toBeCloseTo(110, ACCURACY_THRESHOLD)
        expect(result[ Level.INSANE ]).toBeCloseTo(10, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the centers of each level", () => {
        const result = computeLevelHeights(0.5)

        expect(result[ Level.MEDIUM ]).toBeCloseTo(460, ACCURACY_THRESHOLD)
        expect(result[ Level.HIGH ]).toBeCloseTo(360, ACCURACY_THRESHOLD)
        expect(result[ Level.ULTRA ]).toBeCloseTo(260, ACCURACY_THRESHOLD)
        expect(result[ Level.EXTREME ]).toBeCloseTo(160, ACCURACY_THRESHOLD)
        expect(result[ Level.INSANE ]).toBeCloseTo(60, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the bottoms of each level", () => {
        const result = computeLevelHeights(1)

        expect(result[ Level.MEDIUM ]).toBeCloseTo(510, ACCURACY_THRESHOLD)
        expect(result[ Level.HIGH ]).toBeCloseTo(410, ACCURACY_THRESHOLD)
        expect(result[ Level.ULTRA ]).toBeCloseTo(310, ACCURACY_THRESHOLD)
        expect(result[ Level.EXTREME ]).toBeCloseTo(210, ACCURACY_THRESHOLD)
        expect(result[ Level.INSANE ]).toBeCloseTo(110, ACCURACY_THRESHOLD)
    })
})
