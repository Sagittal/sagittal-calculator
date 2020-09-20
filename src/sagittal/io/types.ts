import { Io } from "../../general"

type SymbolLongAscii = Io & { _SymbolLongAsciiBrand: boolean }
type SymbolUnicode = Io & { _SymbolUnicodeBrand: boolean }
type SymbolSmiley = Io & { _SymbolSmileyBrand: boolean }

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
}
