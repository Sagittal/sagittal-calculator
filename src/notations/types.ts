import { ApotomeSlope, Cents, Monzo, N2D3P9, Name, Prime, Ratio, Sopfr } from "../general"

type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = string & { _SymbolSmileyBrand: "SymbolSmiley" }

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: Name<SizeCategory>,
    abbreviation: string,
}

interface SagittalComma {
    apotomeSlope: ApotomeSlope,
    cents: Cents,
    name: Name<SagittalComma>,
    fiveRoughSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
}

enum SymbolSet {
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
}

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
    SizeCategoryOptions,
    SagittalComma,
    SymbolSet,
    SizeCategory,
}
