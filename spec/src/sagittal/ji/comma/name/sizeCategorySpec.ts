// tslint:disable max-line-length

import {
    Cents,
    Comma,
    computeNumberFromCents,
    DecimalNotDefaultingToPotentiallyIrrational,
} from "../../../../../../src/general"
import { computeSizeCategory } from "../../../../../../src/sagittal/ji/comma/name/sizeCategory"

describe("computeSizeCategory", (): void => {
    it("returns the correct size category for the pitch size", (): void => {
        expect(computeSizeCategory({ decimal: computeNumberFromCents(0 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("u")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(1 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("n")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(2 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("s")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(10 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("k")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(20 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("C")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(40 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("S")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(50 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("M")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(60 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("L")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(80 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("SS")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(100 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("MS")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(110 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("LS")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(115 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(117 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("s+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(120 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("k+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(135 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("C+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(155 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("S+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(165 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("M+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(175 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("L+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(190 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("SS+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(200 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("MS+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(220 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("LS+A")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(227 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)).toBe("A+A")
    })

    it("works when not abbreviated", (): void => {
        expect(computeSizeCategory({ decimal: computeNumberFromCents(0 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("unison")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(1 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("schismina")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(2 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("schisma")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(10 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("kleisma")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(20 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Comma")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(40 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Small-Diesis")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(50 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Medium-Diesis")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(60 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Large-Diesis")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(80 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Small-Semitone")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(100 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Medium-Semitone")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(110 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Large-Semitone")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(115 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(117 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("schisma-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(120 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("kleisma-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(135 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Comma-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(155 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Small-Diesis-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(165 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Medium-Diesis-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(175 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Large-Diesis-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(190 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Small-Semitone-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(200 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Medium-Semitone-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(220 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("Large-Semitone-plus-Apotome")
        expect(computeSizeCategory({ decimal: computeNumberFromCents(227 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma, { abbreviated: false })).toBe("double-Apotome")
    })

    it("throws an error if the size category of an pitch which is too big is requested", (): void => {
        expect((): void => {
            computeSizeCategory({ decimal: computeNumberFromCents(230 as Cents) as DecimalNotDefaultingToPotentiallyIrrational } as Comma)
        }).toThrowError("230.000¢ is beyond the maximum size category's bounds.")
    })
})
