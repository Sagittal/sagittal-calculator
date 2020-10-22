import {Io, Maybe} from "../../../general"
import {Flavor} from "../flavor"
import {Aim, Element, Glyph} from "../symbol"

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

interface GlyphUnicodeEquivalent {
    glyph: Glyph,
    unicode: Unicode
}

interface ElementAndAimAsciiEquivalent {
    element: Element,
    aim: Aim,
    ascii: Ascii,
}

export {
    Ascii,
    Unicode,
    Smiley,
    GlyphUnicodeEquivalent,
    ElementAndAimAsciiEquivalent,
}
