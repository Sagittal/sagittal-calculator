import {Io, Maybe} from "@sagittal/general"
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

type Glyph<T extends Maybe<Flavor> = undefined> = Unicode<T> | Ascii<T> | Smiley<T>

export {
    Ascii,
    Unicode,
    Smiley,
    Glyph,
}
