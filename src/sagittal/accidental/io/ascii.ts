import {BLANK, isUndefined, join, sumTexts} from "../../../general"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Element, Glyph, Symbol} from "../symbol"
import {BLANK_ASCII, PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii, ElementAndAimAsciiEquivalent} from "./types"

const ELEMENT_ASCII_EQUIVALENTS: ElementAndAimAsciiEquivalent[] = [
    {element: Element.SHAFT, aim: Aim.UP, ascii: "|" as Ascii},
    {element: Element.SHAFT, aim: Aim.DOWN, ascii: "!" as Ascii},
    {element: Element.LEFT_BARB, aim: Aim.UP, ascii: "/" as Ascii},
    {element: Element.LEFT_BARB, aim: Aim.DOWN, ascii: "\\" as Ascii},
    {element: Element.RIGHT_BARB, aim: Aim.UP, ascii: "\\" as Ascii},
    {element: Element.RIGHT_BARB, aim: Aim.DOWN, ascii: "/" as Ascii},
    {element: Element.LEFT_SCROLL, aim: Aim.UP, ascii: ")" as Ascii},
    {element: Element.LEFT_SCROLL, aim: Aim.DOWN, ascii: ")" as Ascii},
    {element: Element.RIGHT_SCROLL, aim: Aim.UP, ascii: "(" as Ascii},
    {element: Element.RIGHT_SCROLL, aim: Aim.DOWN, ascii: "(" as Ascii},
    {element: Element.LEFT_ARC, aim: Aim.UP, ascii: "(" as Ascii},
    {element: Element.LEFT_ARC, aim: Aim.DOWN, ascii: "(" as Ascii},
    {element: Element.RIGHT_ARC, aim: Aim.UP, ascii: ")" as Ascii},
    {element: Element.RIGHT_ARC, aim: Aim.DOWN, ascii: ")" as Ascii},
    {element: Element.LEFT_BOATHOOK, aim: Aim.UP, ascii: "~" as Ascii},
    {element: Element.LEFT_BOATHOOK, aim: Aim.DOWN, ascii: "~" as Ascii},
    {element: Element.RIGHT_BOATHOOK, aim: Aim.UP, ascii: "~" as Ascii},
    {element: Element.RIGHT_BOATHOOK, aim: Aim.DOWN, ascii: "~" as Ascii},
    {element: Element.TICK, aim: Aim.UP, ascii: "'" as Ascii},
    {element: Element.TICK, aim: Aim.DOWN, ascii: "." as Ascii},
    {element: Element.WING, aim: Aim.UP, ascii: "`" as Ascii},
    {element: Element.WING, aim: Aim.DOWN, ascii: "," as Ascii},
    {element: Element.BIRD, aim: Aim.UP, ascii: "``" as Ascii},
    {element: Element.BIRD, aim: Aim.DOWN, ascii: ",," as Ascii},
]

const computeAsciiFromGlyph = (glyph: Glyph): Ascii => {
    const ascii = glyph.elements.map((element: Element): Ascii => {
        const maybeElementAsciiEquivalent = ELEMENT_ASCII_EQUIVALENTS
            .find((elementAsciiEquivalent: ElementAndAimAsciiEquivalent): boolean => {
                return elementAsciiEquivalent.element === element && elementAsciiEquivalent.aim === glyph.aim
            })

        if (isUndefined(maybeElementAsciiEquivalent)) {
            throw new Error(`No ASCII found for element ${element}`)
        }

        return maybeElementAsciiEquivalent.ascii
    }).join(BLANK)

    return ascii
        .replace(/\|\|\|\|/, "X")
        .replace(/!!!!/, "Y") as Ascii
}

const COMPATIBLE_TO_ASCII_MAP: Record<Compatible, Ascii> = {
    [Compatible.STEIN_SEMISHARP]: ">" as Ascii,
    [Compatible.STEIN_SEMIFLAT]: "<" as Ascii,
    [Compatible.STEIN_SESQUISHARP]: ">#" as Ascii,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "<b" as Ascii,
    [Compatible.WILSON_PLUS]: "+" as Ascii,
    [Compatible.WILSON_MINUS]: "-" as Ascii,
    [Compatible.NATURAL]: "|//|" as Ascii,
    [Compatible.SHARP]: "#" as Ascii,
    [Compatible.FLAT]: "b" as Ascii,
    [Compatible.DOUBLE_SHARP]: "x" as Ascii,
    [Compatible.DOUBLE_FLAT]: "bb" as Ascii,
}

const computeAsciiFromCompatible = (compatible: Compatible): Ascii => {
    return COMPATIBLE_TO_ASCII_MAP[compatible]
}

const computeAsciiFromSymbol = (symbol: Symbol): Ascii => {
    const accentsAscii = isUndefined(symbol.accents) ?
        BLANK_ASCII :
        join(symbol.accents.map(computeAsciiFromGlyph), BLANK_ASCII)

    const coreAscii = isUndefined(symbol.core) ?
        PARENTHETICAL_NATURAL_ASCII :
        computeAsciiFromGlyph(symbol.core)

    return sumTexts(accentsAscii, coreAscii)
}

const computeAsciiFromAccidental = <T extends Flavor>(accidental: Accidental<T>): Ascii<T> => {
    const accentsAscii = isUndefined(accidental.accents) ?
        BLANK_ASCII :
        join(accidental.accents.map(computeAsciiFromGlyph), BLANK_ASCII)

    const coreAscii = isUndefined(accidental.core) ?
        isUndefined(accidental.compatible) ? PARENTHETICAL_NATURAL_ASCII : BLANK_ASCII :
        computeAsciiFromGlyph(accidental.core)

    const compatibleAscii = isUndefined(accidental.compatible) ?
        BLANK_ASCII :
        computeAsciiFromCompatible(accidental.compatible)

    return sumTexts(accentsAscii, coreAscii, compatibleAscii) as Ascii<T>
}

export {
    computeAsciiFromGlyph,
    computeAsciiFromAccidental,
    computeAsciiFromSymbol,
    computeAsciiFromCompatible,
}
