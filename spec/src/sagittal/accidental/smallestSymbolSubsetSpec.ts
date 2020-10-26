import {getSmallestSymbolSubset, SymbolClassId, SymbolSubset} from "../../../../src/sagittal/accidental"

describe("getSmallestSymbolSubset", (): void => {
    it("returns the smallest symbol subset which includes (a symbol for) the given flacco id", (): void => {
        expect(getSmallestSymbolSubset(SymbolClassId.NULL)).toBe(SymbolSubset.COMPATIBLE)
        expect(getSmallestSymbolSubset(SymbolClassId.RIGHT_SCROLL)).toBe(SymbolSubset.SPARTAN)
        expect(getSmallestSymbolSubset(SymbolClassId.BOATHOOK_AND_SCROLL)).toBe(SymbolSubset.ATHENIAN)
        expect(getSmallestSymbolSubset(SymbolClassId.LEFT_SCROLL_AND_BARB)).toBe(SymbolSubset.TROJAN)
        expect(getSmallestSymbolSubset(SymbolClassId.SCROLL_AND_ARC)).toBe(SymbolSubset.PROMETHEAN)
        expect(getSmallestSymbolSubset(SymbolClassId.TICK_WITH_RIGHT_ARC)).toBe(SymbolSubset.HERCULEAN)
        expect(getSmallestSymbolSubset(SymbolClassId.BIRD_WITH_RIGHT_ARC)).toBe(SymbolSubset.OLYMPIAN)
    })

    it("throws an error if the flacco ID is not a member of a symbol subset", (): void => {
        expect((): void => {
            getSmallestSymbolSubset("nonsenseAndHogwash" as SymbolClassId)
        }).toThrowError("Symbol class ID nonsenseAndHogwash was not found in any symbol subset.")
    })
})
