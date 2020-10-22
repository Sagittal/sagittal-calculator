import {AccentName, Aim, CoreName, Element, Glyph, GlyphType} from "./types"

const SHAFT: Element[] = [Element.SHAFT]
const DOUBLE_SHAFT: Element[] = [Element.SHAFT, Element.SHAFT]
const TRIPLE_SHAFT: Element[] = [Element.SHAFT, Element.SHAFT, Element.SHAFT]
const EX: Element[] = [Element.SHAFT, Element.SHAFT, Element.SHAFT, Element.SHAFT]

const CORE_GLYPHS: Record<CoreName, Glyph<GlyphType.CORE>> = {
    [CoreName.RIGHT_SCROLL_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_EX_UP]: {
        aim: Aim.UP,
        elements: [
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...EX,
            Element.RIGHT_SCROLL,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARB_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BARB,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_AND_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            Element.LEFT_BARB,
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_AND_ARC_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_RIGHT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...DOUBLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...DOUBLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.SCROLL_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.RIGHT_BARB_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            ...TRIPLE_SHAFT,
            Element.RIGHT_BARB,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BOATHOOK,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.DOUBLE_LEFT_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            Element.LEFT_BOATHOOK,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_AND_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_ARC,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BOATHOOK_AND_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_BOATHOOK,
            ...EX,
            Element.RIGHT_BARB,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_SCROLL,
            Element.LEFT_BARB,
            Element.LEFT_BARB,
            ...EX,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        elements: [
            Element.LEFT_ARC,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.ARC_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            Element.LEFT_ARC,
            ...EX,
            Element.RIGHT_BOATHOOK,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARE_SHAFT_UP]: {
        aim: Aim.UP,
        elements: [
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
    [CoreName.BARE_SHAFT_DOWN]: {
        aim: Aim.DOWN,
        elements: [
            ...SHAFT,
        ],
    } as Glyph<GlyphType.CORE>,
}

const ACCENT_GLYPHS: Record<AccentName, Glyph<GlyphType.ACCENT>> = {
    [AccentName.TICK_UP]: {aim: Aim.UP, elements: [Element.TICK]} as Glyph<GlyphType.ACCENT>,
    [AccentName.TICK_DOWN]: {aim: Aim.DOWN, elements: [Element.TICK]} as Glyph<GlyphType.ACCENT>,
    [AccentName.WING_UP]: {aim: Aim.UP, elements: [Element.WING]} as Glyph<GlyphType.ACCENT>,
    [AccentName.WING_DOWN]: {aim: Aim.DOWN, elements: [Element.WING]} as Glyph<GlyphType.ACCENT>,
    [AccentName.BIRD_UP]: {aim: Aim.UP, elements: [Element.BIRD]} as Glyph<GlyphType.ACCENT>,
    [AccentName.BIRD_DOWN]: {aim: Aim.DOWN, elements: [Element.BIRD]} as Glyph<GlyphType.ACCENT>,
}

export {
    CORE_GLYPHS,
    ACCENT_GLYPHS,
}
