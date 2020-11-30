import {Ascii, computeSagittalAscii, SymbolSubsetId, SYMBOL_SUBSETS} from "../../../../src/sagittal"
import {computeSagittalFromSymbolClassId} from "../../../../src/sagittal/accidental"

// tslint:disable-next-line ban
xdescribe("SYMBOL_SUBSETS", (): void => {
    const subject = (symbolSubsetId: SymbolSubsetId): Ascii[] => SYMBOL_SUBSETS[symbolSubsetId]
        .map(computeSagittalFromSymbolClassId)
        .map(computeSagittalAscii)

    it("has the correct single-shaft symbols in the Sagittal-compatibles subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.COMPATIBLE

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            "(|//|)",
        ] as Ascii[]
        expect(actual.length).toEqual(1)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Spartan subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.SPARTAN

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            "|(", "/|", "|)", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(8)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Athenian subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.ATHENIAN

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            "|(", ")|(", "~|(", "/|", "|)", "|\\", "(|", "(|(", "//|", "/|)", "/|\\", "(|)", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(13)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Trojan subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.TROJAN

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            "~|(", "|~", "/|", ")/|", "|)", "|\\", "(|", "/|~", "/|)", "/|\\", "(|\\",
        ] as Ascii[]
        expect(actual.length).toEqual(11)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Promethean subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.PROMETHEAN

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            ")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", "~~|", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|",
            "~|)", "/|~", "(|(", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|", ")/|\\", "|\\)", "(|)", "|\\\\",
            "(|\\", ")|\\\\",
        ] as Ascii[]
        expect(actual.length).toEqual(31)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Herculean subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.HERCULEAN

        const actual: Ascii[] = subject(symbolSubsetId)

        const expected = [
            ".)|", "'|", ")|", "|(", ".~|", "'|(", "~|", ")|(", "')|(", ")~|", ".~|(", "~|(", "|~", "~~|", "./|",
            ")|~", "/|", ".)/|", "'/|", ")/|", ".|)", "|)", "'|)", ")|)", ".(|", "|\\", "(|", "'(|", "~|)", ".(|(",
            "'~|)", "/|~", "(|(", "~|\\", ".//|", "//|", "'//|", ")//|", "/|)", "(|~", "'/|)", "./|\\", "/|\\", "(/|",
            "'/|\\", ")/|\\", ".(|)", "|\\)", "(|)", "'(|)", ".(|\\", "|\\\\", "(|\\", ")|\\\\",
        ] as Ascii[]
        expect(actual.length).toEqual(54)
        expect(actual).toEqual(expected)
    })

    it("has the correct single-shaft symbols in the Olympian subset", (): void => {
        const symbolSubsetId = SymbolSubsetId.OLYMPIAN

        const actual: Ascii[] = subject(symbolSubsetId)

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
