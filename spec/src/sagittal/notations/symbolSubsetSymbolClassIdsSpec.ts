import { Id } from "../../../../src/general"
import { SymbolLongAscii } from "../../../../src/sagittal/io"
import { getRepresentativeSymbol } from "../../../../src/sagittal/notations"
import { SYMBOL_SUBSET_SYMBOL_CLASS_IDS } from "../../../../src/sagittal/notations/symbolSubsetSymbolClassIds"
import { SymbolClass, SymbolSubset } from "../../../../src/sagittal/notations/types"

describe("SYMBOL_SUBSET_SYMBOL_CLASS_IDS", (): void => {
    const subject = (symbolSubset: SymbolSubset): SymbolLongAscii[] => {
        return SYMBOL_SUBSET_SYMBOL_CLASS_IDS[ symbolSubset ]
            .map((symbolClassId: Id<SymbolClass>): SymbolLongAscii => {
                return getRepresentativeSymbol(symbolClassId).ascii
            })
    }

    it("has the correct symbol classes in Spartan", (): void => {
        const symbolSubset = SymbolSubset.SPARTAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", "|(", "/|", "|)", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(9)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Athenian", (): void => {
        const symbolSubset = SymbolSubset.ATHENIAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", "|(", ")|(", "~|(", "/|", "|)", "|\\", "(|", "(|(", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(14)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Trojan", (): void => {
        const symbolSubset = SymbolSubset.TROJAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", "~|(", ")/|", "/|", "(|", "|~", "|)", "|\\", "/|~", "/|)", "/|\\", "(|\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(12)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Promethean", (): void => {
        const symbolSubset = SymbolSubset.PROMETHEAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", ")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", "~~|", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|",
            "~|)", "/|~", "(|(", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|", ")/|\\", "|\\)", "(|)", "|\\\\",
            "(|\\", ")|\\\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(32)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Herculean", (): void => {
        const symbolSubset = SymbolSubset.HERCULEAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", ".)|", "'|", ")|", "|(", ".~|", "'|(", "~|", ")|(", "')|(", ")~|", ".~|(", "~|(", "|~", "~~|", "./|",
            ")|~", "/|", ".)/|", "'/|", ")/|", ".|)", "|)", "'|)", ")|)", ".(|", "|\\", "(|", "'(|", "~|)", ".(|(",
            "'~|)", "/|~", "(|(", "~|\\", ".//|", "//|", "'//|", ")//|", "/|)", "(|~", "'/|)", "./|\\", "/|\\", "(/|",
            "'/|\\", ")/|\\", ".(|)", "|\\)", "(|)", "'(|)", ".(|\\", "|\\\\", "(|\\", ")|\\\\",
        ] as SymbolLongAscii[]
        expect(actual.length).toEqual(55)
        expect(actual).toEqual(expected)
    })

    it("has the correct symbol classes in Olympian", (): void => {
        const symbolSubset = SymbolSubset.OLYMPIAN

        const actual: SymbolLongAscii[] = subject(symbolSubset)

        const expected = [
            "|", "`|", "``|", ".)|", "'|", "`'|", ",)|", ")|", "`)|", "``)|", ",,|(", ",|(", "|(", "`|(", ".~|", ",'|(",
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
        expect(actual).toEqual(expected)
    })
})
