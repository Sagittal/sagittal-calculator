import { Id } from "../../../../src/general"
import { CommaClass, getSmallestSymbolSubset, SymbolSubset } from "../../../../src/sagittal/notations"

describe("getSmallestSymbolSubset", (): void => {
    it("returns the smallest symbol subset which includes (a symbol for) the given comma class id", (): void => {
        expect(getSmallestSymbolSubset(0 as Id<CommaClass>)).toBe(SymbolSubset.SAGITTAL_COMPATIBLE)
        expect(getSmallestSymbolSubset(12 as Id<CommaClass>)).toBe(SymbolSubset.SPARTAN)
        expect(getSmallestSymbolSubset(30 as Id<CommaClass>)).toBe(SymbolSubset.ATHENIAN)
        expect(getSmallestSymbolSubset(52 as Id<CommaClass>)).toBe(SymbolSubset.TROJAN)
        expect(getSmallestSymbolSubset(65 as Id<CommaClass>)).toBe(SymbolSubset.PROMETHEAN)
        expect(getSmallestSymbolSubset(62 as Id<CommaClass>)).toBe(SymbolSubset.HERCULEAN)
        expect(getSmallestSymbolSubset(60 as Id<CommaClass>)).toBe(SymbolSubset.OLYMPIAN)
    })

    // TODO: these should really go by Flaccos instead (update test descriptions and error messages, etc)
    //  And so maybe in the code they are really FlaccoSubsets
    //  Well a SymbolSubset would be a thing... it would be generated from a FlaccoSubset to include all the
    //  Multi-shaft variants of each combo
    it("throws an error if the comma class ID is not a member of a symbol subset", (): void => {
        expect((): void => {
            getSmallestSymbolSubset(200 as Id<CommaClass>)
        }).toThrowError("Comma class ID 200 was not found in any symbol subset.")
    })
})
