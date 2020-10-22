import {BLANK, Char, shallowClone} from "../../../general"
import {ABSENCE_OF_A_SYMBOL, AccentName, ACCENT_GLYPHS, Aim, Element, Glyph, GlyphType, Symbol} from "../symbol"
import {PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const parseAscii = (ascii: Ascii): Symbol => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) return ABSENCE_OF_A_SYMBOL

    const aim = ascii.match(/[Y!]/g) ? Aim.DOWN : Aim.UP
    let right = false
    const symbol = {} as Symbol

    let symbolText = shallowClone(ascii)
    if (symbolText.match("``")) {
        symbol.accents = symbol.accents || []
        symbol.accents.push(ACCENT_GLYPHS[AccentName.BIRD_UP])
        symbolText = symbolText.replace("``", "") as Ascii
    }
    if (symbolText.match(",,")) {
        symbol.accents = symbol.accents || []
        symbol.accents.push(ACCENT_GLYPHS[AccentName.BIRD_DOWN])
        symbolText = symbolText.replace(",,", "") as Ascii
    }

    const symbolChars = symbolText.split(BLANK) as Char[]
    symbolChars.forEach((symbolChar: Char): void => {
        if (symbolChar === "`") {
            symbol.accents = symbol.accents || []
            symbol.accents.push(ACCENT_GLYPHS[AccentName.WING_UP])
        } else if (symbolChar === ",") {
            symbol.accents = symbol.accents || []
            symbol.accents.push(ACCENT_GLYPHS[AccentName.WING_DOWN])
        } else if (symbolChar === "'") {
            symbol.accents = symbol.accents || []
            symbol.accents.push(ACCENT_GLYPHS[AccentName.TICK_UP])
        } else if (symbolChar === ".") {
            symbol.accents = symbol.accents || []
            symbol.accents.push(ACCENT_GLYPHS[AccentName.TICK_DOWN])
        } else if (symbolChar === "/") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            const element = aim === Aim.UP ?
                Element.LEFT_BARB :
                Element.RIGHT_BARB
            symbol.core.elements.push(element)
        } else if (symbolChar === "\\") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            const element = aim === Aim.UP ?
                Element.RIGHT_BARB :
                Element.LEFT_BARB
            symbol.core.elements.push(element)
        } else if (symbolChar === ")") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            const element = aim === Aim.UP ?
                right ? Element.RIGHT_ARC : Element.LEFT_SCROLL :
                right ? Element.RIGHT_SCROLL : Element.LEFT_ARC
            symbol.core.elements.push(element)
        } else if (symbolChar === "(") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            const element = aim === Aim.UP ?
                right ? Element.RIGHT_SCROLL : Element.LEFT_ARC :
                right ? Element.RIGHT_ARC : Element.LEFT_SCROLL
            symbol.core.elements.push(element)
        } else if (symbolChar === "~") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            const element = right ?
                Element.RIGHT_BOATHOOK :
                Element.LEFT_BOATHOOK
            symbol.core.elements.push(element)
        } else if (symbolChar === "!" || symbolChar === "|") {
            symbol.core = symbol.core || {aim, elements: [] as Element[]} as Glyph<GlyphType.CORE>
            right = true
            symbol.core.elements.push(Element.SHAFT)
        }
    })

    return symbol
}

export {
    parseAscii,
}
