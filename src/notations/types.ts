import { Comma, Id, IO, Name } from "../general"

type SymbolLongAscii = IO & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = IO & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = IO & { _SymbolSmileyBrand: "SymbolSmiley" }

interface SizeCategoryOptions {
    abbreviated?: boolean,
}

interface SizeCategory {
    name: Name<SizeCategory>,
    abbreviation: IO,
}

interface SagittalComma extends Comma {
    id: Id<SagittalComma>,
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
