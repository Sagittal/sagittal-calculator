import {Id} from "../../../../../src/general"
import {Flacco, FlaccoSubset, getSmallestFlaccoSubset} from "../../../../../src/sagittal/accidental"

describe("getSmallestFlaccoSubset", (): void => {
    it("returns the smallest flacco subset which includes (a symbol for) the given flacco id", (): void => {
        expect(getSmallestFlaccoSubset(0 as Id<Flacco>)).toBe(FlaccoSubset.COMPATIBLE)
        expect(getSmallestFlaccoSubset(12 as Id<Flacco>)).toBe(FlaccoSubset.SPARTAN)
        expect(getSmallestFlaccoSubset(30 as Id<Flacco>)).toBe(FlaccoSubset.ATHENIAN)
        expect(getSmallestFlaccoSubset(52 as Id<Flacco>)).toBe(FlaccoSubset.TROJAN)
        expect(getSmallestFlaccoSubset(65 as Id<Flacco>)).toBe(FlaccoSubset.PROMETHEAN)
        expect(getSmallestFlaccoSubset(62 as Id<Flacco>)).toBe(FlaccoSubset.HERCULEAN)
        expect(getSmallestFlaccoSubset(60 as Id<Flacco>)).toBe(FlaccoSubset.OLYMPIAN)
    })

    it("throws an error if the flacco ID is not a member of a flacco subset", (): void => {
        expect((): void => {
            getSmallestFlaccoSubset(200 as Id<Flacco>)
        }).toThrowError("Comma class ID 200 was not found in any flacco subset.")
    })
})
