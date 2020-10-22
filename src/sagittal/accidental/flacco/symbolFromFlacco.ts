import {deepEquals, isEmpty, isUndefined, stringify} from "../../../general"
import {ABSENCE_OF_A_SYMBOL, Aim, Element, Glyph, GlyphType, Symbol} from "../symbol"
import {BIRD_AGAINST, BIRD_WITH, TICK_AGAINST, TICK_WITH, WING_AGAINST, WING_WITH} from "./accents"
import {
    LEFT_ARC,
    LEFT_BARB,
    LEFT_BOATHOOK,
    LEFT_SCROLL,
    RIGHT_ARC,
    RIGHT_BARB,
    RIGHT_BOATHOOK,
    RIGHT_SCROLL,
} from "./flags"
import {isAccent, isFlag} from "./typeGuards"
import {Accent, Flacco, Flag, FlagOrAccentElementEquivalent, Orientation, Side} from "./types"

const computeSymbolFromFlacco = (flacco: Flacco): Symbol => {
    if (isEmpty(flacco.combo)) return ABSENCE_OF_A_SYMBOL

    const accents = [] as Array<Glyph<GlyphType.ACCENT>>
    const core = {aim: Aim.UP, elements: [] as Element[]} as Glyph<GlyphType.CORE>

    let shafted = false
    flacco.combo.forEach((flagOrAccent: Flag | Accent): void => {
        if (isAccent(flagOrAccent)) {
            const maybeFlagOrAccentElementEquivalent = FLAG_OR_ACCENT_ELEMENT_EQUIVALENTS
                .find((flagOrAccentElementEquivalent: FlagOrAccentElementEquivalent): boolean => {
                    return deepEquals(flagOrAccentElementEquivalent.flagOrAccent, flagOrAccent)
                })

            if (isUndefined(maybeFlagOrAccentElementEquivalent)) {
                throw new Error(`No element found for accent ${stringify(flagOrAccent)}`)
            }

            const accentGlyph = {
                aim: flagOrAccent.orientation === Orientation.AGAINST ? Aim.DOWN : Aim.UP,
                elements: [maybeFlagOrAccentElementEquivalent.element],
            } as Glyph<GlyphType.ACCENT>
            accents.push(accentGlyph)
        } else {
            if (isFlag(flagOrAccent) && flagOrAccent.side === Side.RIGHT && !shafted) {
                core.elements.push(Element.SHAFT)
                shafted = true
            }

            const maybeFlagOrAccentElementEquivalent = FLAG_OR_ACCENT_ELEMENT_EQUIVALENTS
                .find((flagOrAccentElementEquivalent: FlagOrAccentElementEquivalent): boolean => {
                    return deepEquals(flagOrAccentElementEquivalent.flagOrAccent, flagOrAccent)
                })

            if (isUndefined(maybeFlagOrAccentElementEquivalent)) {
                throw new Error(`No element found for flag ${stringify(flagOrAccent)}`)
            }

            core.elements.push(maybeFlagOrAccentElementEquivalent.element)
        }
    })

    if (!shafted) {
        core.elements.push(Element.SHAFT)
    }

    return isEmpty(accents) ? {core} : {accents, core}
}

const FLAG_OR_ACCENT_ELEMENT_EQUIVALENTS: FlagOrAccentElementEquivalent[] = [
    {flagOrAccent: LEFT_BARB, element: Element.LEFT_BARB},
    {flagOrAccent: RIGHT_BARB, element: Element.RIGHT_BARB},
    {flagOrAccent: LEFT_SCROLL, element: Element.LEFT_SCROLL},
    {flagOrAccent: RIGHT_SCROLL, element: Element.RIGHT_SCROLL},
    {flagOrAccent: LEFT_ARC, element: Element.LEFT_ARC},
    {flagOrAccent: RIGHT_ARC, element: Element.RIGHT_ARC},
    {flagOrAccent: LEFT_BOATHOOK, element: Element.LEFT_BOATHOOK},
    {flagOrAccent: RIGHT_BOATHOOK, element: Element.RIGHT_BOATHOOK},
    {flagOrAccent: TICK_AGAINST, element: Element.TICK},
    {flagOrAccent: TICK_WITH, element: Element.TICK},
    {flagOrAccent: WING_WITH, element: Element.WING},
    {flagOrAccent: WING_AGAINST, element: Element.WING},
    {flagOrAccent: BIRD_WITH, element: Element.BIRD},
    {flagOrAccent: BIRD_AGAINST, element: Element.BIRD},
]

export {
    computeSymbolFromFlacco,
}
