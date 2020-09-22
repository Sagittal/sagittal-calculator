import { Io } from "../../general"
import { Flavor } from "../notations"

type SymbolLongAscii<T extends Flavor = Flavor.REVO> = Io & { _SymbolLongAsciiBrand: boolean, _FlavorBrand: T }
type SymbolUnicode<T extends Flavor = Flavor.REVO> = Io & { _SymbolUnicodeBrand: boolean, _FlavorBrand: T }
type SymbolSmiley<T extends Flavor = Flavor.REVO> = Io & { _SymbolSmileyBrand: boolean, _FlavorBrand: T }

type SymbolGlyph = SymbolUnicode | SymbolLongAscii | SymbolSmiley

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
    SymbolGlyph,
}
