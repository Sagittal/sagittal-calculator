import {Io, Maybe} from "../../../general"
import {Flavor} from "../flavor"

type Ascii<T extends Maybe<Flavor> = undefined> =
    Io
    & {_AsciiBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})
type Unicode<T extends Maybe<Flavor> = undefined> =
    Io
    & {_UnicodeBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})
type Smiley<T extends Maybe<Flavor> = undefined> =
    Io
    & {_SmileyBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})

// TODO: SAGISPEAK
//  Eventually perhaps a fourth Glyph type?
//  Then "Glyph" wouldn't work as well... but it would be a really similar process, no?
//  Or it could just live in io/ without having to be a Glyph type, you know. That's allowed.

type Glyph<T extends Maybe<Flavor> = undefined> = Unicode<T> | Ascii<T> | Smiley<T>

export {
    Ascii,
    Unicode,
    Smiley,
    Glyph,
}
