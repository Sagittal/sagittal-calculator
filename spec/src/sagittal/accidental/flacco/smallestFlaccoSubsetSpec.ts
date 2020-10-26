import {FlaccoId, FlaccoSubset, getSmallestFlaccoSubset} from "../../../../../src/sagittal/accidental"

describe("getSmallestFlaccoSubset", (): void => {
    it("returns the smallest flacco subset which includes (a symbol for) the given flacco id", (): void => {
        expect(getSmallestFlaccoSubset(FlaccoId.NULL)).toBe(FlaccoSubset.COMPATIBLE)
        expect(getSmallestFlaccoSubset(FlaccoId.RIGHT_SCROLL)).toBe(FlaccoSubset.SPARTAN)
        expect(getSmallestFlaccoSubset(FlaccoId.BOATHOOK_AND_SCROLL)).toBe(FlaccoSubset.ATHENIAN)
        expect(getSmallestFlaccoSubset(FlaccoId.LEFT_SCROLL_AND_BARB)).toBe(FlaccoSubset.TROJAN)
        expect(getSmallestFlaccoSubset(FlaccoId.SCROLL_AND_ARC)).toBe(FlaccoSubset.PROMETHEAN)
        expect(getSmallestFlaccoSubset(FlaccoId.TICK_WITH_RIGHT_ARC)).toBe(FlaccoSubset.HERCULEAN)
        expect(getSmallestFlaccoSubset(FlaccoId.BIRD_WITH_RIGHT_ARC)).toBe(FlaccoSubset.OLYMPIAN)
    })

    it("throws an error if the flacco ID is not a member of a flacco subset", (): void => {
        expect((): void => {
            getSmallestFlaccoSubset("nonsenseAndHogwash" as FlaccoId)
        }).toThrowError("Flacco ID nonsenseAndHogwash was not found in any flacco subset.")
    })
})
