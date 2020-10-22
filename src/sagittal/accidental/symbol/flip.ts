import {isUndefined} from "../../../general"
import {Aim, Glyph, GlyphType, Symbol} from "./types"

const flipAim = (aim: Aim): Aim =>
    aim === Aim.DOWN ? Aim.UP : Aim.DOWN

const flipGlyph = <T extends GlyphType>(glyph: Glyph<T>): Glyph<T> =>
    ({...glyph, aim: flipAim(glyph.aim)})

const flipSymbol = (symbol: Symbol): Symbol => {
    const flippedSymbol = {} as Symbol

    if (!isUndefined(symbol.accents)) {
        flippedSymbol.accents = symbol.accents.map(flipGlyph)
    }

    if (!isUndefined(symbol.core)) {
        flippedSymbol.core = flipGlyph(symbol.core)
    }

    return flippedSymbol
}

export {
    flipSymbol,
    flipGlyph,
}
