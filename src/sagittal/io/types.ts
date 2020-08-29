import { IO } from "../../general"

type SymbolLongAscii = IO & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = IO & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = IO & { _SymbolSmileyBrand: "SymbolSmiley" }

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
}
