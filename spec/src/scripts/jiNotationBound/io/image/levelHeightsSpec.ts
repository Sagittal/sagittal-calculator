import { Basis, Cents, Multiplier, Px } from "../../../../../../src/general"
import { JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { computeJiNotationLevelHeights } from "../../../../../../src/scripts/jiNotationBound/io/image/levelHeights"

describe("computeJiNotationLevelHeights", (): void => {
    it("gives the correct height for the tops of each JI notation level", (): void => {
        const actual = computeJiNotationLevelHeights(0 as Multiplier<Basis<Cents>>)

        expect(actual[ JiNotationLevel.MEDIUM ]).toBeCloseToTyped(410 as Px)
        expect(actual[ JiNotationLevel.HIGH ]).toBeCloseToTyped(310 as Px)
        expect(actual[ JiNotationLevel.ULTRA ]).toBeCloseToTyped(210 as Px)
        expect(actual[ JiNotationLevel.EXTREME ]).toBeCloseToTyped(110 as Px)
        expect(actual[ JiNotationLevel.INSANE ]).toBeCloseToTyped(10 as Px)
    })

    it("gives the correct height for the centers of each level", (): void => {
        const actual = computeJiNotationLevelHeights(0.5 as Multiplier<Basis<Cents>>)

        expect(actual[ JiNotationLevel.MEDIUM ]).toBeCloseToTyped(460 as Px)
        expect(actual[ JiNotationLevel.HIGH ]).toBeCloseToTyped(360 as Px)
        expect(actual[ JiNotationLevel.ULTRA ]).toBeCloseToTyped(260 as Px)
        expect(actual[ JiNotationLevel.EXTREME ]).toBeCloseToTyped(160 as Px)
        expect(actual[ JiNotationLevel.INSANE ]).toBeCloseToTyped(60 as Px)
    })

    it("gives the correct height for the bottoms of each level", (): void => {
        const actual = computeJiNotationLevelHeights(1 as Multiplier<Basis<Cents>>)

        expect(actual[ JiNotationLevel.MEDIUM ]).toBeCloseToTyped(510 as Px)
        expect(actual[ JiNotationLevel.HIGH ]).toBeCloseToTyped(410 as Px)
        expect(actual[ JiNotationLevel.ULTRA ]).toBeCloseToTyped(310 as Px)
        expect(actual[ JiNotationLevel.EXTREME ]).toBeCloseToTyped(210 as Px)
        expect(actual[ JiNotationLevel.INSANE ]).toBeCloseToTyped(110 as Px)
    })
})
