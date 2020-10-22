import {isUndefined, join, sumTexts} from "../../../general"
import {Accent} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, Symbol} from "../symbol"
import {computeAccentAscii, computeCompatibleAscii, computeCoreAscii} from "./ascii"
import {BLANK_ASCII, BLANK_SMILEY, PARENTHETICAL_NATURAL_SMILEY} from "./constants"
import {Ascii, Smiley} from "./types"

const convertAsciiToSmiley = (ascii: Ascii): Smiley => {
    const massagedAscii = ascii
        .replace("|//|", "h")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    return `:${massagedAscii}:` as Smiley
}

const computeCoreSmiley = (core: Core): Smiley =>
    convertAsciiToSmiley(computeCoreAscii(core))

const computeCompatibleSmiley = (compatible: Compatible): Smiley =>
    convertAsciiToSmiley(computeCompatibleAscii(compatible))

const computeAccentSmiley = (accent: Accent, aim: Aim): Smiley =>
    convertAsciiToSmiley(computeAccentAscii(accent, aim))

const computeSymbolSmiley = ({accents, core}: Symbol): Smiley => {
    const accentsSmiley = isUndefined(accents) ?
        BLANK_SMILEY :
        computeAccentsSmiley(accents, core?.aim as Aim)

    const coreSmiley = isUndefined(core) ?
        PARENTHETICAL_NATURAL_SMILEY :
        computeCoreSmiley(core)

    return sumTexts(accentsSmiley, coreSmiley)
}

const computeAccentsSmiley = (accents: Accent[], aim: Aim): Smiley =>
    join(accents.map((accent: Accent): Smiley => computeAccentSmiley(accent, aim)), BLANK_ASCII)

const computeAccidentalSmiley = <T extends Flavor>({accents, core, compatible}: Accidental<T>): Smiley<T> => {
    const accentsSmiley = isUndefined(accents) ?
        BLANK_SMILEY :
        computeAccentsSmiley(accents, core?.aim as Aim)

    const coreSmiley = isUndefined(core) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_SMILEY : BLANK_SMILEY :
        computeCoreSmiley(core)

    const compatibleSmiley = isUndefined(compatible) ?
        BLANK_SMILEY :
        computeCompatibleSmiley(compatible)

    return sumTexts(accentsSmiley, coreSmiley, compatibleSmiley) as Smiley<T>
}

export {
    computeAccidentalSmiley,
    computeCoreSmiley,
    computeCompatibleSmiley,
    computeSymbolSmiley,
    computeAccentSmiley,
}
