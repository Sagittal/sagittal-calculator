import {Id} from "../../../general"

enum Accent {
    TICK_WITH = "tickWith",
    TICK_AGAINST = "tickAgainst",
    WING_WITH = "wingWith",
    WING_AGAINST = "wingAgainst",
    BIRD_WITH = "birdWith",
    BIRD_AGAINST = "birdAgainst",
}

enum Flag {
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
}

interface FlagCombo {
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
interface Symbolic {
    accents?: Accent[], // Tempted for AccentCombo { with, against } but then how could you tell their order?
    core?: FlagCombo,
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
    FlagCombo,
    Symbolic,
}
