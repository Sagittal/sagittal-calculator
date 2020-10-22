import {isUndefined, join, sumTexts} from "../../../general"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Glyph, Symbol} from "../symbol"
import {computeAsciiFromCompatible, computeAsciiFromGlyph} from "./ascii"
import {BLANK_SMILEY, PARENTHETICAL_NATURAL_SMILEY} from "./constants"
import {Ascii, Smiley} from "./types"

const computeSmileyFromAscii = (ascii: Ascii): Smiley => {
    const massagedAscii = ascii
        .replace("|//|", "h")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    return `:${massagedAscii}:` as Smiley
}

const computeSmileyFromGlyph = (glyph: Glyph): Smiley =>
    computeSmileyFromAscii(computeAsciiFromGlyph(glyph))

const computeSmileyFromCompatible = (compatible: Compatible): Smiley =>
    computeSmileyFromAscii(computeAsciiFromCompatible(compatible))

const computeSmileyFromSymbol = (symbol: Symbol): Smiley => {
    const accentsSmiley = isUndefined(symbol.accents) ?
        BLANK_SMILEY :
        join(symbol.accents.map(computeSmileyFromGlyph), BLANK_SMILEY)

    const coreSmiley = isUndefined(symbol.core) ?
        PARENTHETICAL_NATURAL_SMILEY :
        computeSmileyFromGlyph(symbol.core)

    return sumTexts(accentsSmiley, coreSmiley)
}

const computeSmileyFromAccidental = <T extends Flavor>(accidental: Accidental<T>): Smiley<T> => {
    const accentsSmiley = isUndefined(accidental.accents) ?
        BLANK_SMILEY :
        join(accidental.accents.map(computeSmileyFromGlyph), BLANK_SMILEY)

    const coreSmiley = isUndefined(accidental.core) ?
        isUndefined(accidental.compatible) ? PARENTHETICAL_NATURAL_SMILEY : BLANK_SMILEY :
        computeSmileyFromGlyph(accidental.core)

    const compatibleSmiley = isUndefined(accidental.compatible) ?
        BLANK_SMILEY :
        computeSmileyFromCompatible(accidental.compatible)

    return sumTexts(accentsSmiley, coreSmiley, compatibleSmiley) as Smiley<T>
}

export {
    computeSmileyFromAccidental,
    computeSmileyFromGlyph,
    computeSmileyFromCompatible,
    computeSmileyFromSymbol,
}
