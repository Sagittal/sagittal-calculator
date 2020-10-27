import {
    Ascii,
    computeSagittalAscii,
    computeSagittalFromFlacco,
    Flacco,
    NullSagittal,
    Sagittal,
} from "../../../../src/sagittal/accidental"
import {getFlacco} from "../../../../src/sagittal/accidental/flacco"
import {SymbolSubsetId, SYMBOL_SUBSETS} from "../../../../src/sagittal/notation"

// tslint:disable-next-line ban
xdescribe("SYMBOL_SUBSETS", (): void => {
    const subject = (symbolSubsetId: SymbolSubsetId): Ascii[] => SYMBOL_SUBSETS[symbolSubsetId]
        // TODO: SHOULD WE REALLY GO FROM SYMBOL TO FLACCO TO SAGITTAL? MAYBE SO...?
        //  This feels circuitous... but then I think we're probably going to have something basically the same
        //  As computing Revo Accidental but for computing a sagittal from a SymbolClassId + Section
        .map(getFlacco)
        .map((flacco: Flacco): NullSagittal | Sagittal => computeSagittalFromFlacco(flacco))
        .map((sagittal: NullSagittal | Sagittal): Ascii => computeSagittalAscii(sagittal))

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
