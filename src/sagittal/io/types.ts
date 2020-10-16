import { Io, Maybe } from "../../general"
import { Flavor } from "../notations"

type Ascii<T extends Maybe<Flavor> = undefined> =
    Io
    & { _AsciiBrand: boolean }
    & (T extends Flavor ? { _FlavorBrand: T } : {})
type Unicode<T extends Maybe<Flavor> = undefined> =
    Io
    & { _UnicodeBrand: boolean }
    & (T extends Flavor ? { _FlavorBrand: T } : {})
type Smiley<T extends Maybe<Flavor> = undefined> =
    Io
    & { _SmileyBrand: boolean }
    & (T extends Flavor ? { _FlavorBrand: T } : {})

type Glyph = Unicode | Ascii | Smiley

export {
    Ascii,
    Unicode,
    Smiley,
    Glyph,
}
