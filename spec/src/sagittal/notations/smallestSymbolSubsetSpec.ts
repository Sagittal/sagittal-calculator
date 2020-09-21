import { Id } from "../../../../src/general"
import { getSmallestSymbolSubset, SymbolClass, SymbolSubset } from "../../../../src/sagittal/notations"

describe("getSmallestSymbolSubset", (): void => {
    it("returns the smallest symbol subset which includes the given symbol class id", (): void => {
        expect(getSmallestSymbolSubset(0 as Id<SymbolClass>)).toBe(SymbolSubset.SAGITTAL_COMPATIBLE)
        expect(getSmallestSymbolSubset(12 as Id<SymbolClass>)).toBe(SymbolSubset.SPARTAN)
        expect(getSmallestSymbolSubset(30 as Id<SymbolClass>)).toBe(SymbolSubset.ATHENIAN)
        expect(getSmallestSymbolSubset(52 as Id<SymbolClass>)).toBe(SymbolSubset.TROJAN)
        expect(getSmallestSymbolSubset(65 as Id<SymbolClass>)).toBe(SymbolSubset.PROMETHEAN)
        expect(getSmallestSymbolSubset(62 as Id<SymbolClass>)).toBe(SymbolSubset.HERCULEAN)
        expect(getSmallestSymbolSubset(60 as Id<SymbolClass>)).toBe(SymbolSubset.OLYMPIAN)
    })

    it("throws an error if the symbol class ID is not a member of a JI notation", (): void => {
        expect((): void => {
            getSmallestSymbolSubset(200 as Id<SymbolClass>)
        }).toThrowError("Symbol class ID 200 was not found in any symbol subset.")
    })
})
