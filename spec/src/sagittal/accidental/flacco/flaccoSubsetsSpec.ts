import {
    Ascii,
    computeSymbolAscii,
    computeSymbolFromFlacco,
    Flacco,
    FlaccoSubset,
    FLACCO_SUBSETS,
    Symbol,
} from "../../../../../src/sagittal/accidental"
import {getFlacco} from "../../../../../src/sagittal/accidental/flacco"

describe("FLACCO_SUBSETS", (): void => {
    const subject = (flaccoSubset: FlaccoSubset): Ascii[] => FLACCO_SUBSETS[flaccoSubset]
        .map(getFlacco)
        .map((flacco: Flacco): Symbol => computeSymbolFromFlacco(flacco))
        .map((symbol: Symbol): Ascii => computeSymbolAscii(symbol))

    it("has the correct flaccos in the Sagittal-compatibles subset", (): void => {
        const flaccoSubset = FlaccoSubset.COMPATIBLE

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            "(|//|)",
        ] as Ascii[]
        expect(actual.length).toEqual(1)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Spartan subset", (): void => {
        const flaccoSubset = FlaccoSubset.SPARTAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            "|(", "/|", "|)", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(8)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Athenian subset", (): void => {
        const flaccoSubset = FlaccoSubset.ATHENIAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            "|(", ")|(", "~|(", "/|", "|)", "|\\", "(|", "(|(", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(13)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Trojan subset", (): void => {
        const flaccoSubset = FlaccoSubset.TROJAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            "~|(", ")/|", "/|", "(|", "|~", "|)", "|\\", "/|~", "/|)", "/|\\", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(11)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Promethean subset", (): void => {
        const flaccoSubset = FlaccoSubset.PROMETHEAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            ")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", "~~|", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|",
            "~|)", "/|~", "(|(", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|", ")/|\\", "|\\)", "(|)", "|\\\\",
            "(|\\", ")|\\\\",
        ] as Ascii[]
        expect(actual.length).toEqual(31)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Herculean subset", (): void => {
        const flaccoSubset = FlaccoSubset.HERCULEAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            ".)|", "'|", ")|", "|(", ".~|", "'|(", "~|", ")|(", "')|(", ")~|", ".~|(", "~|(", "|~", "~~|", "./|",
            ")|~", "/|", ".)/|", "'/|", ")/|", ".|)", "|)", "'|)", ")|)", ".(|", "|\\", "(|", "'(|", "~|)", ".(|(",
            "'~|)", "/|~", "(|(", "~|\\", ".//|", "//|", "'//|", ")//|", "/|)", "(|~", "'/|)", "./|\\", "/|\\", "(/|",
            "'/|\\", ")/|\\", ".(|)", "|\\)", "(|)", "'(|)", ".(|\\", "|\\\\", "(|\\", ")|\\\\",
        ] as Ascii[]
        expect(actual.length).toEqual(54)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Olympian subset", (): void => {
        const flaccoSubset = FlaccoSubset.OLYMPIAN

        const actual: Ascii[] = subject(flaccoSubset)

        const expected = [
            "`|", "``|", ".)|", "'|", "`'|", ",)|", ")|", "`)|", "``)|", ",,|(", ",|(", "|(", "`|(", ".~|", ",'|(",
            "'|(", ",~|", "~|", ",)|(", ")|(", "`)|(", "``)|(", ",')|(", "')|(", ")~|", ".~|(", "`.~|(", ",,~|(",
            ",~|(", "~|(", "`~|(", ",,|~", ",|~", "|~", "`|~", "~~|", "`~~|", "``~~|", ",./|", "./|", ")|~", ",,/|",
            ",/|", "/|", "`/|", "``/|", ".)/|", "'/|", "`'/|", ",,)/|", ",)/|", ")/|", ",.|)", ".|)", "`.|)", ",,|)",
            ",|)", "|)", "`|)", "``|)", ",'|)", "'|)", "`'|)", ",)|)", ")|)", ".(|", "|\\", "`|\\", ",(|", "(|", "`(|",
            "``(|", ",'(|", "'(|", ",~|)", "~|)", "`~|)", ",.(|(", ".(|(", "'~|)", "/|~", ",,(|(", ",(|(", "(|(",
            "`(|(", "~|\\", ",.//|", ".//|", "`.//|", ",,//|", ",//|", "//|", "`//|", "``//|", ",'//|", "'//|",
            ",,)//|", ",)//|", ")//|", "`)//|", "``)//|", ",,/|)", ",/|)", "/|)", "`/|)", "(|~", ",'/|)", "'/|)",
            "`'/|)", "./|\\", "`./|\\", ",,/|\\", ",/|\\", "/|\\", "`/|\\", ",(/|", "(/|", "`(/|", "'/|\\", "`'/|\\",
            ",)/|\\", ")/|\\", "`)/|\\", "``)/|\\", ",.(|)", ".(|)", ",|\\)", "|\\)", "`|\\)", ",(|)", "(|)", "`(|)",
            "``(|)", ",'(|)", "'(|)", ",.(|\\", ".(|\\", "`.(|\\", "|\\\\", ",(|\\", "(|\\", "`(|\\", "``(|\\",
            ",,)|\\\\", ",)|\\\\", ")|\\\\", "`)|\\\\", "``)|\\\\",
        ] as Ascii[]
        expect(actual.length).toEqual(148)
        expect(actual).toEqual(expected)
    })
})
