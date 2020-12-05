import {Basis, Cents, Multiplier, Px} from "@sagittal/general"
import {JiNotationLevelId} from "@sagittal/system"
import {computeJiNotationLevelHeights} from "../../../../../../src/scripts/jiNotationBoundClass/io/image/levelHeights"

describe("computeJiNotationLevelHeights", (): void => {
    it("gives the correct height for the tops of each JI notation level", (): void => {
        const actual = computeJiNotationLevelHeights(0 as Multiplier<Basis<Cents>>)

        expect(actual[JiNotationLevelId.MEDIUM]).toBeCloseToTyped(410 as Px)
        expect(actual[JiNotationLevelId.HIGH]).toBeCloseToTyped(310 as Px)
        expect(actual[JiNotationLevelId.ULTRA]).toBeCloseToTyped(210 as Px)
        expect(actual[JiNotationLevelId.EXTREME]).toBeCloseToTyped(110 as Px)
        expect(actual[JiNotationLevelId.INSANE]).toBeCloseToTyped(10 as Px)
    })

    it("gives the correct height for the centers of each level", (): void => {
        const actual = computeJiNotationLevelHeights(0.5 as Multiplier<Basis<Cents>>)

        expect(actual[JiNotationLevelId.MEDIUM]).toBeCloseToTyped(460 as Px)
        expect(actual[JiNotationLevelId.HIGH]).toBeCloseToTyped(360 as Px)
        expect(actual[JiNotationLevelId.ULTRA]).toBeCloseToTyped(260 as Px)
        expect(actual[JiNotationLevelId.EXTREME]).toBeCloseToTyped(160 as Px)
        expect(actual[JiNotationLevelId.INSANE]).toBeCloseToTyped(60 as Px)
    })

    it("gives the correct height for the bottoms of each level", (): void => {
        const actual = computeJiNotationLevelHeights(1 as Multiplier<Basis<Cents>>)

        expect(actual[JiNotationLevelId.MEDIUM]).toBeCloseToTyped(510 as Px)
        expect(actual[JiNotationLevelId.HIGH]).toBeCloseToTyped(410 as Px)
        expect(actual[JiNotationLevelId.ULTRA]).toBeCloseToTyped(310 as Px)
        expect(actual[JiNotationLevelId.EXTREME]).toBeCloseToTyped(210 as Px)
        expect(actual[JiNotationLevelId.INSANE]).toBeCloseToTyped(110 as Px)
    })
})
