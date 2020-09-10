import { Basis, Cents, Multiplier, Px } from "../../../../../../src/general"
import { Level } from "../../../../../../src/sagittal/notations/ji"
import { computeLevelHeights } from "../../../../../../src/scripts/bound/io/image/levelHeights"

describe("computeLevelHeights", () => {
    it("gives the correct height for the tops of each level", () => {
        const actual = computeLevelHeights(0 as Multiplier<Basis<Cents>>)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(410 as Px)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(310 as Px)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(210 as Px)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(110 as Px)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(10 as Px)
    })

    it("gives the correct height for the centers of each level", () => {
        const actual = computeLevelHeights(0.5 as Multiplier<Basis<Cents>>)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(460 as Px)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(360 as Px)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(260 as Px)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(160 as Px)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(60 as Px)
    })

    it("gives the correct height for the bottoms of each level", () => {
        const actual = computeLevelHeights(1 as Multiplier<Basis<Cents>>)

        expect(actual[ Level.MEDIUM ]).toBeCloseToTyped(510 as Px)
        expect(actual[ Level.HIGH ]).toBeCloseToTyped(410 as Px)
        expect(actual[ Level.ULTRA ]).toBeCloseToTyped(310 as Px)
        expect(actual[ Level.EXTREME ]).toBeCloseToTyped(210 as Px)
        expect(actual[ Level.INSANE ]).toBeCloseToTyped(110 as Px)
    })
})
