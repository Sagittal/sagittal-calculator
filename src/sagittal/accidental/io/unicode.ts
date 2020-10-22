import {deepEquals, isUndefined, join, stringify, sumTexts} from "../../../general"
import {Accidental, Compatible, Flavor} from "../flavor"
import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Glyph, Symbol} from "../symbol"
import {BLANK_UNICODE, PARENTHETICAL_NATURAL_UNICODE} from "./constants"
import {GlyphUnicodeEquivalent, Unicode} from "./types"

const GLYPH_UNICODE_EQUIVALENTS: GlyphUnicodeEquivalent[] = [
    {glyph: ACCENT_GLYPHS[AccentName.WING_UP], unicode: "" as Unicode},
    {glyph: ACCENT_GLYPHS[AccentName.WING_DOWN], unicode: "" as Unicode},
    {glyph: ACCENT_GLYPHS[AccentName.BIRD_UP], unicode: "" as Unicode},
    {glyph: ACCENT_GLYPHS[AccentName.BIRD_DOWN], unicode: "" as Unicode},
    {glyph: ACCENT_GLYPHS[AccentName.TICK_UP], unicode: "" as Unicode},
    {glyph: ACCENT_GLYPHS[AccentName.TICK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARE_SHAFT_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARE_SHAFT_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_SCROLL_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_AND_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_SCROLL_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_AND_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_DOUBLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_DOUBLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_AND_ARC_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_EX_UP], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.ARC_AND_SCROLL_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BARB_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_ARC_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_ARC_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_ARC_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.SCROLL_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_BARB_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_LEFT_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.BOATHOOK_AND_SCROLL_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.RIGHT_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_DOWN], unicode: "" as Unicode},
    {glyph: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_EX_DOWN], unicode: "" as Unicode},
]

const computeUnicodeFromGlyph = (glyph: Glyph): Unicode => {
    const maybeGlyphUnicodeEquivalent = GLYPH_UNICODE_EQUIVALENTS
        .find((glyphUnicodeEquivalent: GlyphUnicodeEquivalent): boolean => {
            return deepEquals(glyphUnicodeEquivalent.glyph, glyph)
        })

    if (isUndefined(maybeGlyphUnicodeEquivalent)) {
        throw new Error(`Could not find unicode for glyph ${stringify(glyph, {multiline: true})}`)
    }

    return maybeGlyphUnicodeEquivalent.unicode
}

const COMPATIBLE_TO_UNICODE_MAP: Record<Compatible, Unicode> = {
    [Compatible.STEIN_SEMISHARP]: "" as Unicode,
    [Compatible.STEIN_SEMIFLAT]: "" as Unicode,
    [Compatible.STEIN_SESQUISHARP]: "" as Unicode,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "" as Unicode,
    [Compatible.WILSON_PLUS]: "" as Unicode,
    [Compatible.WILSON_MINUS]: "" as Unicode,
    [Compatible.NATURAL]: "" as Unicode,
    [Compatible.SHARP]: "" as Unicode,
    [Compatible.FLAT]: "" as Unicode,
    [Compatible.DOUBLE_SHARP]: "" as Unicode,
    [Compatible.DOUBLE_FLAT]: "" as Unicode,
}

const computeUnicodeFromCompatible = (compatible: Compatible): Unicode => {
    return COMPATIBLE_TO_UNICODE_MAP[compatible]
}

const computeUnicodeFromSymbol = (symbol: Symbol): Unicode => {
    const accentsUnicode = isUndefined(symbol.accents) ?
        BLANK_UNICODE :
        join(symbol.accents.map(computeUnicodeFromGlyph), BLANK_UNICODE)

    const coreUnicode = isUndefined(symbol.core) ?
        PARENTHETICAL_NATURAL_UNICODE :
        computeUnicodeFromGlyph(symbol.core)

    return sumTexts(accentsUnicode, coreUnicode)
}

const computeUnicodeFromAccidental = <T extends Flavor>(accidental: Accidental<T>): Unicode<T> => {
    const accentsUnicode = isUndefined(accidental.accents) ?
        BLANK_UNICODE :
        join(accidental.accents.map(computeUnicodeFromGlyph), BLANK_UNICODE)

    const coreUnicode = isUndefined(accidental.core) ?
        isUndefined(accidental.compatible) ? PARENTHETICAL_NATURAL_UNICODE : BLANK_UNICODE :
        computeUnicodeFromGlyph(accidental.core)

    const compatibleUnicode = isUndefined(accidental.compatible) ?
        BLANK_UNICODE :
        computeUnicodeFromCompatible(accidental.compatible)

    return sumTexts(accentsUnicode, coreUnicode, compatibleUnicode) as Unicode<T>
}

export {
    computeUnicodeFromGlyph,
    computeUnicodeFromAccidental,
    computeUnicodeFromCompatible,
    computeUnicodeFromSymbol,
}
