import {getSmallestSymbolSubsetId, SymbolClassId, SymbolSubsetId} from "../../../../src/sagittal/notation"

describe("getSmallestSymbolSubsetId", (): void => {
    it("returns the smallest symbol subset which includes (a symbol for) the given flacco id", (): void => {
        expect(getSmallestSymbolSubsetId(SymbolClassId.NULL)).toBe(SymbolSubsetId.COMPATIBLE)
        expect(getSmallestSymbolSubsetId(SymbolClassId.RIGHT_SCROLL)).toBe(SymbolSubsetId.SPARTAN)
        expect(getSmallestSymbolSubsetId(SymbolClassId.BOATHOOK_AND_SCROLL)).toBe(SymbolSubsetId.ATHENIAN)
        expect(getSmallestSymbolSubsetId(SymbolClassId.LEFT_SCROLL_AND_BARB)).toBe(SymbolSubsetId.TROJAN)
        expect(getSmallestSymbolSubsetId(SymbolClassId.SCROLL_AND_ARC)).toBe(SymbolSubsetId.PROMETHEAN)
        expect(getSmallestSymbolSubsetId(SymbolClassId.TICK_AND_RIGHT_ARC)).toBe(SymbolSubsetId.HERCULEAN)
        expect(getSmallestSymbolSubsetId(SymbolClassId.BIRD_AND_RIGHT_ARC)).toBe(SymbolSubsetId.OLYMPIAN)
    })

    it("throws an error if the flacco ID is not a member of a symbol subset", (): void => {
        expect((): void => {
            getSmallestSymbolSubsetId("nonsenseAndHogwash" as SymbolClassId)
        }).toThrowError("Symbol class ID nonsenseAndHogwash was not found in any symbol subset.")
    })
})
