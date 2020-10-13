import { FlaccoSubset, FLACCO_SUBSETS, SagittalSymbol } from "../../../../src/sagittal/notations"
import { getFlacco } from "../../../../src/sagittal/notations/flacco"
import { computeSymbolFromFlacco } from "../../../../src/sagittal/notations/symbolFromFlacco"

describe("FLACCO_SUBSETS", (): void => {
    const subject = (flaccoSubset: FlaccoSubset): SagittalSymbol[] => FLACCO_SUBSETS[ flaccoSubset ]
        .map(getFlacco)
        .map(computeSymbolFromFlacco)

    it("has the correct flaccos in the Sagittal-compatibles subset", (): void => {
        const flaccoSubset = FlaccoSubset.SAGITTAL_COMPATIBLE

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            "(|//|)",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(1)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Spartan subset", (): void => {
        const flaccoSubset = FlaccoSubset.SPARTAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            "|(", "/|", "|)", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(8)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Athenian subset", (): void => {
        const flaccoSubset = FlaccoSubset.ATHENIAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            "|(", ")|(", "~|(", "/|", "|)", "|\\", "(|", "(|(", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(13)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Trojan subset", (): void => {
        const flaccoSubset = FlaccoSubset.TROJAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            "~|(", ")/|", "/|", "(|", "|~", "|)", "|\\", "/|~", "/|)", "/|\\", "(|\\",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(11)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Promethean subset", (): void => {
        const flaccoSubset = FlaccoSubset.PROMETHEAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            ")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", "~~|", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|",
            "~|)", "/|~", "(|(", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|", ")/|\\", "|\\)", "(|)", "|\\\\",
            "(|\\", ")|\\\\",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(31)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Herculean subset", (): void => {
        const flaccoSubset = FlaccoSubset.HERCULEAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

        const expected = [
            ".)|", "'|", ")|", "|(", ".~|", "'|(", "~|", ")|(", "')|(", ")~|", ".~|(", "~|(", "|~", "~~|", "./|",
            ")|~", "/|", ".)/|", "'/|", ")/|", ".|)", "|)", "'|)", ")|)", ".(|", "|\\", "(|", "'(|", "~|)", ".(|(",
            "'~|)", "/|~", "(|(", "~|\\", ".//|", "//|", "'//|", ")//|", "/|)", "(|~", "'/|)", "./|\\", "/|\\", "(/|",
            "'/|\\", ")/|\\", ".(|)", "|\\)", "(|)", "'(|)", ".(|\\", "|\\\\", "(|\\", ")|\\\\",
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(54)
        expect(actual).toEqual(expected)
    })

    it("has the correct flaccos in the Olympian subset", (): void => {
        const flaccoSubset = FlaccoSubset.OLYMPIAN

        const actual: SagittalSymbol[] = subject(flaccoSubset)

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
        ] as SagittalSymbol[]
        expect(actual.length).toEqual(148)
        expect(actual).toEqual(expected)
    })
})
