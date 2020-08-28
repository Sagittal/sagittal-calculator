import { Px } from "../../../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../../../src/general/code"
import { Level } from "../../../../../../src/notations/ji"
import { computeLevelHeights } from "../../../../../../src/scripts/analyzeBounds/io/image/levelHeights"

describe("computeLevelHeights", () => {
    it("gives the correct height for the tops of each level", () => {
        const actual = computeLevelHeights(0)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(410 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(310 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(210 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(110 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(10 as Px, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the centers of each level", () => {
        const actual = computeLevelHeights(0.5)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(460 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(360 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(260 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(160 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(60 as Px, ACCURACY_THRESHOLD)
    })

    it("gives the correct height for the bottoms of each level", () => {
        const actual = computeLevelHeights(1)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(510 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(410 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(310 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(210 as Px, ACCURACY_THRESHOLD)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(110 as Px, ACCURACY_THRESHOLD)
    })
})
