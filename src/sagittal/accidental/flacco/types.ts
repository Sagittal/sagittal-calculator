import {Id} from "../../../general"
import {Element} from "../symbol"

enum Shape {
    SHAFT = "shaft",
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
}

enum Orientation {
    WITH = "with",
    AGAINST = "against",
}

enum Side {
    LEFT = "left",
    RIGHT = "right",
}

type Flag = {
    shape: Shape,
    side: Side,
}

type Accent = {
    shape: Shape,
    orientation: Orientation,
}

enum FlagCombo {
    LEFT_SCROLL = "leftScroll",
    RIGHT_SCROLL = "rightScroll",
    LEFT_BOATHOOK = "leftBoathook",
    DOUBLE_SCROLL = "doubleScroll",
    LEFT_SCROLL_AND_BOATHOOK = "leftScrollAndBoathook",
    LEFT_BOATHOOK_RIGHT_SCROLL = "leftBoathookRightScroll",
    RIGHT_BOATHOOK = "rightBoathook",
    DOUBLE_LEFT_BOATHOOK = "doubleLeftBoathook",
    LEFT_SCROLL_RIGHT_BOATHOOK = "leftScrollRightBoathook",
    LEFT_BARB = "leftBarb",
    LEFT_SCROLL_AND_BARB = "leftScrollAndBarb",
    RIGHT_ARC = "rightArc",
    LEFT_SCROLL_RIGHT_ARC = "leftScrollRightArc",
    RIGHT_BARB = "rightBarb",
    LEFT_ARC = "leftArc",
    LEFT_BOATHOOK_RIGHT_ARC = "leftBoathookRightArc",
    LEFT_BARB_RIGHT_BOATHOOK = "leftBarbRightBoathook",
    LEFT_ARC_RIGHT_SCROLL = "leftArcRightScroll",
    LEFT_BOATHOOK_RIGHT_BARB = "leftBoathookRightBarb",
    DOUBLE_LEFT_BARB = "doubleLeftBarb",
    LEFT_SCROLL_AND_DOUBLE_LEFT_BARB = "leftScrollAndDoubleLeftBarb",
    LEFT_BARB_RIGHT_ARC = "leftBarbRightArc",
    LEFT_ARC_RIGHT_BOATHOOK = "leftArcRightBoathook",
    DOUBLE_BARB = "doubleBarb",
    LEFT_ARC_AND_BARB = "leftArcAndBarb",
    LEFT_SCROLL_AND_DOUBLE_BARB = "leftScrollAndDoubleBarb",
    RIGHT_BARB_AND_ARC = "rightBarbAndArc",
    DOUBLE_ARC = "doubleArc",
    DOUBLE_RIGHT_BARB = "doubleRightBarb",
    LEFT_ARC_RIGHT_BARB = "leftArcRightBarb",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB = "leftScrollDoubleRightBarb",
}

enum AccentCombo {
    TICK_AGAINST = "fourMinasDown",
    BIRD_AGAINST = "twoMinasDown",
    WING_AGAINST = "oneMinaDown",
    WING_WITH = "oneMinaUp",
    BIRD_WITH = "twoMinasUp",
    TICK_WITH = "fourMinasUp",
    TICK_AND_WING_AGAINST = "fiveMinasDown",
    TICK_AGAINST_WING_WITH = "threeMinasDown",
    TICK_WITH_WING_AGAINST = "threeMinasUp",
    TICK_AND_WING_WITH = "fiveMinasUp",
}

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco {
    // TODO: ID VS NAME
    //  Yeah Flacco is totally one of those things which should go by name, not ID
    //  Or perhaps maybe just more like we've got these records of Elements and Glyphs, right
    //  But think about the fact that having the order in the form of the ID is actually quite handy sometimes...
    id: Id<Flacco>,
    // Todo: ELEMENT, GLYPH, FLACCO
    //  Shouldn't this, by similar design principles as for the Symbol, just have flags: Flag[] and accent:
    //  Accent[]? perhaps you could even consider having leftFlags and rightFlags in which case you wouldn't need Side
    //  Although then why wouldn't Symbol split by left and right, and just have shaftCount?
    //  Then we could start to imagine Symbol extending Flacco, just adding the aim and shaft count...
    //  If you did do at least the first part of this suggested refactor, then in computeSymbolFromFlacco you could
    //  Simplify the part where it decides whether or not to add the bare shaft.
    combo: Array<Flag | Accent>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  Maybe it really should be Symbol subset, or Glyph subset,
//  Because some Flaccos cross over in the Revo notation, you know?
//  E.g. )||( is in Spartan multi-shaft, but no single-shaft right scroll
//  Or is the problem only really solvable by that Flaccos only apply to the 1-shaft symbols,
//  And multi-shaft symbols are just not even flag & accent combos??
//  I mean, you could solve it by just calling them symbol subsets, but then you have to include all the redundants...
//  Or how about saying that notations have only comma subsets?
//  Now this might be intertwined with the problem of whether a notation can be specified by ONLY one of
//  A list of Flacco IDs or a list of CommaClass IDs
//  Okay, well but actually, a symbol subset is meaningfully different than a flacco subset, because of like how
//  Spartan contains )||( as I just said above, you know?
//  In other words, we don't currently have captured anywhere an array of valid symbols, because the combinations of
//  Accents and Flags in the single-shaft does not necessarily translate to 2-shaft. I mean I guess we could have
//  Something that was intermediate, that included anything from 1 to 2 shafts, and then this becomes intertwined with
//  The questions of limiting the apotome shift and apotome complement methods to something *like* a section but not
enum FlaccoSubset {
    COMPATIBLE = "compatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

interface FlagOrAccentElementEquivalent {
    flagOrAccent: Flag | Accent,
    element: Element,
}

export {
    FlaccoSubset,
    Flacco,
    Flag,
    Accent,
    Orientation,
    FlagOrAccentElementEquivalent,
    Side,
    Shape,
    FlagCombo,
    AccentCombo,
}
