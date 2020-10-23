import {Id} from "../../../general"

enum Accent {
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
}

enum Orientation {
    WITH = "with",
    AGAINST = "against",
}

type OrientedAccent = {
    orientation: Orientation,
    accent: Accent,
}

type Arm = Array<OrientedAccent>

enum ArmName {
    WING = "wing",
    BIRD = "bird",
    WING_FROM_TICK = "wingFromTick",
    TICK = "tick",
    WING_AND_TICK = "wingAndTick",
}

enum Flag {
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
}

enum HeadName {
    BARE_SHAFT = "bareShaft",
    RIGHT_SCROLL = "rightScroll",
    LEFT_BARB = "leftBarb",
    RIGHT_ARC = "rightArc",
    DOUBLE_LEFT_BARB = "doubleLeftBarb",
    BARB_AND_ARC = "barbAndArc",
    DOUBLE_BARB = "doubleBarb",
    DOUBLE_ARC = "doubleArc",
    ARC_AND_BARB = "arcAndBarb",
    DOUBLE_SCROLL = "doubleScroll",
    BOATHOOK_AND_SCROLL = "boathookAndScroll",
    RIGHT_BARB = "rightBarb",
    LEFT_ARC = "leftArc",
    ARC_AND_SCROLL = "arcAndScroll",
    RIGHT_BOATHOOK = "rightBoathook",
    LEFT_SCROLL_AND_BARB = "leftScrollAndBarb",
    BARB_AND_BOATHOOK = "barbAndBoathook",
    LEFT_SCROLL = "leftScroll",
    LEFT_BOATHOOK = "leftBoathook",
    LEFT_SCROLL_AND_BOATHOOK = "leftScrollAndBoathook",
    DOUBLE_LEFT_BOATHOOK = "doubleLeftBoathook",
    SCROLL_AND_BOATHOOK = "scrollAndBoathook",
    SCROLL_AND_ARC = "scrollAndArc",
    BOATHOOK_AND_ARC = "boathookAndArc",
    BOATHOOK_AND_BARB = "boathookAndBarb",
    LEFT_SCROLL_DOUBLE_LEFT_BARB = "leftScrollDoubleLeftBarb",
    ARC_AND_BOATHOOK = "arcAndBoathook",
    LEFT_ARC_AND_BARB = "leftArcAndBarb",
    LEFT_SCROLL_AND_DOUBLE_BARB = "leftScrollAndDoubleBarb",
    RIGHT_BARB_AND_ARC = "rightBarbAndArc",
    DOUBLE_RIGHT_BARB = "doubleRightBarb",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB = "leftScrollDoubleRightBarb",
}

interface Head {
    left?: Flag[],
    right?: Flag[],
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  I'm not quite ready for Symbol to have ID yet
//  At that stage, you'd want a const SYMBOLS: Symbol[] and generate it and test it, and maybe apotome shift
//  Apotome complement methods would only be used in test, becuase you'd be "get"ting the symbol, not computing it
//  But we still need to wrangle with the problems of: do we +1000 for apotome shift? that works w/ Magrathean I think
//  Do we have negative IDs? is it a "key", then? this is pretty much what we used in the Spreadsheet Calculator.
//  Does this respect the principle of things expressing their existence minimally? do IDs go against that already? etc.
//  A valid symbols array would answer the question of how the valid cores and valid arms together
//  Symbol class could go up thru 2 shafts and copy to other 3 sections
//  And this would be related to that "even supported" thing you just added
//  (which should be better documented and there might be a few places you should add some more comments,
//  If only of symbol ASCII, you know?)
//  So apotome complement would go from symbol class to symbol class
//  And the other two, shift and flip, go from symbol class to symbol
//  But this isn’t related to the minimum representation of a notation
//  Though the generation of all valid symbols should be similar to the generation of the extreme JI notation...
//  And if you do actually add SymbolClass, then address the comment introducing flacco below.
interface Symbolic {
    arm?: Arm,
    core?: Head,
}

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco extends Symbolic {
    // TODO: ID VS NAME
    //  Yeah Flacco is totally one of those things which should go by name, not ID
    //  Or perhaps maybe just more like we've got the records of Core by CoreName, right
    //  And probably also at some point Symbol by SymbolName...?
    //  But think about the fact that having the order in the form of the ID is actually quite handy sometimes...
    //  Anyway, the other example is CommaClass, like:
    //  Hey here's an idea... what if everywhere instead of ID we used names, so we could see what we were doing? e.g.
    //  Const COMMA_CLASS_1_u = {
    //    Name: "1u" as Name<Comma>,
    //    RepresentativeFlaccoId: 0 as Id<Flacco>,
    //    Pitch: UNISON,
    //  }
    //  And I wonder if Class<> shouldn't also be a parameterized type since we use that so much now?
    id: Id<Flacco>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  Maybe it really should be Symbol subset, because some Flaccos cross over in the Revo notation, you know?
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

export {
    FlaccoSubset,
    Flacco,
    Flag,
    Accent,
    Head,
    HeadName,
    Symbolic,
    Arm,
    ArmName,
    Orientation,
    OrientedAccent,
}
