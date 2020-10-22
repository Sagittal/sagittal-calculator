import {Accidental, Compatible, CoreName, CORES, Flavor, Smiley, Symbol} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"
import {computeAccidentalSmiley, computeSymbolSmiley} from "../../../../../src/sagittal/accidental/io"

describe("computeSymbolSmiley", (): void => {
    it("converts a symbol to smiley code", (): void => {
        const symbol: Symbol = {                                                          // `'|)
            accents: [Accent.WING_WITH, Accent.TICK_WITH],
            core: CORES[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP]}  // )//|

        const actual = computeSymbolSmiley(symbol)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.DOUBLE_RIGHT_BARB_UP]}                             // |\\


        const actual = computeSymbolSmiley(symbol)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const symbol: Symbol = {                                                                        // ``|)
            accents: [Accent.BIRD_WITH],
            core: CORES[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const symbol: Symbol = {                                                                        // ,,|)
            accents: [Accent.BIRD_AGAINST],
            core: CORES[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a symbol with four shafts", (): void => {
        const symbol: Symbol = {                                                                        // )X(
            core: CORES[CoreName.DOUBLE_SCROLL_EX_UP],
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeSymbolSmiley(symbol)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeAccidentalSmiley", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {                                                    // )\!x
            core: CORES[CoreName.LEFT_SCROLL_AND_BARB_DOWN],
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":)\\!::x:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":x:" as Smiley
        expect(actual).toBe(expected)
    })
})

