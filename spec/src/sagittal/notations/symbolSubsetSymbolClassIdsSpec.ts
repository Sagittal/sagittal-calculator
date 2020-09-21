import { Id } from "../../../../src/general"
import { SymbolLongAscii } from "../../../../src/sagittal/io"
import { getRepresentativeSymbol, SymbolClass, SymbolSubset } from "../../../../src/sagittal/notations"
import { SYMBOL_SUBSET_SYMBOL_CLASS_IDS } from "../../../../src/sagittal/notations/symbolSubsetSymbolClassIds"

describe("SYMBOL_SUBSET_SYMBOL_CLASS_IDS", (): void => {
    const subject = (symbolSubset: SymbolSubset): SymbolLongAscii[] => {
        return SYMBOL_SUBSET_SYMBOL_CLASS_IDS[ symbolSubset ]
            .map((symbolClassId: Id<SymbolClass>): SymbolLongAscii => {
                return getRepresentativeSymbol(symbolClassId).ascii
            })
    }
    
    it("has the correct symbol classes in Sagittal-compatibles", (): void => {
        const symbolSubset = SymbolSubset.SAGITTAL_COMPATIBLE

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|//|"
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(1)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Spartan", (): void => {
        const symbolSubset = SymbolSubset.SPARTAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|(", "/|", "|)", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(8)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Athenian", (): void => {
        const symbolSubset = SymbolSubset.ATHENIAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|(", ")|(", "~|(", "/|", "|)", "|\\", "(|", "(|(", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(13)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Trojan", (): void => {
        const symbolSubset = SymbolSubset.TROJAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "~|(", ")/|", "/|", "(|", "|~", "|)", "|\\", "/|~", "/|)", "/|\\", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(11)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Promethean", (): void => {
        const symbolSubset = SymbolSubset.PROMETHEAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            ")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", "~~|", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|",
            "~|)", "/|~", "(|(", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|", ")/|\\", "|\\)", "(|)", "|\\\\",
            "(|\\", ")|\\\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(31)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Herculean", (): void => {
        const symbolSubset = SymbolSubset.HERCULEAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            ".)|", "'|", ")|", "|(", ".~|", "'|(", "~|", ")|(", "')|(", ")~|", ".~|(", "~|(", "|~", "~~|", "./|",
            ")|~", "/|", ".)/|", "'/|", ")/|", ".|)", "|)", "'|)", ")|)", ".(|", "|\\", "(|", "'(|", "~|)", ".(|(",
            "'~|)", "/|~", "(|(", "~|\\", ".//|", "//|", "'//|", ")//|", "/|)", "(|~", "'/|)", "./|\\", "/|\\", "(/|",
            "'/|\\", ")/|\\", ".(|)", "|\\)", "(|)", "'(|)", ".(|\\", "|\\\\", "(|\\", ")|\\\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(54)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Olympian", (): void => {
        const symbolSubset = SymbolSubset.OLYMPIAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

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
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(148)
        expect(actual).toEqual(expected)
    })
})
