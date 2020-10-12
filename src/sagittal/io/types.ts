import { Io } from "../../general"
import { Flavor } from "../notations"

type Ascii<T extends Flavor = Flavor.REVO> = Io & { _AsciiBrand: boolean, _FlavorBrand: T }
type Unicode<T extends Flavor = Flavor.REVO> = Io & { _UnicodeBrand: boolean, _FlavorBrand: T }
type Smiley<T extends Flavor = Flavor.REVO> = Io & { _SmileyBrand: boolean, _FlavorBrand: T }

type Glyph = Unicode | Ascii | Smiley

export {
    Ascii,
    Unicode,
    Smiley,
    Glyph,
}
