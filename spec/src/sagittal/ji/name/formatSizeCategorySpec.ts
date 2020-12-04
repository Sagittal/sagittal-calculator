import {Index} from "../../../../../src/general"
import {formatSizeCategory} from "../../../../../src/sagittal"
import {SizeCategory} from "../../../../../src/sagittal/ji/name"

describe("formatSizeCategory", (): void => {
    it("takes a size category index and returns the abbreviation", (): void => {
        expect(formatSizeCategory(0 as Index<SizeCategory>)).toBe("u")
        expect(formatSizeCategory(1 as Index<SizeCategory>)).toBe("n")
        expect(formatSizeCategory(2 as Index<SizeCategory>)).toBe("s")
        expect(formatSizeCategory(3 as Index<SizeCategory>)).toBe("k")
        expect(formatSizeCategory(4 as Index<SizeCategory>)).toBe("C")
        expect(formatSizeCategory(5 as Index<SizeCategory>)).toBe("S")
        expect(formatSizeCategory(6 as Index<SizeCategory>)).toBe("M")
        expect(formatSizeCategory(7 as Index<SizeCategory>)).toBe("L")
        expect(formatSizeCategory(8 as Index<SizeCategory>)).toBe("SS")
        expect(formatSizeCategory(9 as Index<SizeCategory>)).toBe("MS")
        expect(formatSizeCategory(10 as Index<SizeCategory>)).toBe("LS")
        expect(formatSizeCategory(11 as Index<SizeCategory>)).toBe("A")
    })
})
