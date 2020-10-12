import { Id } from "../../../../src/general"
import { computeSymbolFromFlacco } from "../../../../src/sagittal/notations/symbolFromFlacco"
import { Accent, Flacco, Flag, SagittalSymbol } from "../../../../src/sagittal/notations/types"

describe("computeSymbolFromFlacco", (): void => {
    it("takes a combo of flags and accents and returns the full Sagittal symbol", (): void => {
        const flacco = {
            id: 75 as Id<Flacco>,
            combo: [",|", "~|", "|)"] as Array<Flag | Accent>,
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected = ",~|)" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for a symbol with flags and accents on the left only", (): void => {
        const flacco = {
            id: 74 as Id<Flacco>,
            combo: ["'|", "(|"] as Array<Flag | Accent>,
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected = "'(|" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for a symbol with flags and accents on the right only", (): void => {
        const flacco =  {
            id: 128 as Id<Flacco>,
            combo: ["|\\", "|)"] as Array<Flag | Accent>,
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected = "|\\)" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco = {
            id: 99 as Id<Flacco>,
            combo: [")|", "/|", "/|"] as Array<Flag | Accent>,
        }

        const actual = computeSymbolFromFlacco(flacco)

        const expected = ")//|" as SagittalSymbol
        expect(actual).toBe(expected)
    })

    it("works for the natural symbol", (): void => {
      const flacco = {
          id: 0 as Id<Flacco>,
          combo: [] as Array<Flag | Accent>,
      }

        const actual = computeSymbolFromFlacco(flacco)

        const expected = "(|//|)" as SagittalSymbol
        expect(actual).toBe(expected)
    })
})
