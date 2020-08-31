import { Io } from "../../general"

type SymbolLongAscii = Io & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = Io & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = Io & { _SymbolSmileyBrand: "SymbolSmiley" }

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
}
