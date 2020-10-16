import { Apotome, Comma, Count, Direction, Id } from "../../general"
import { Ascii, Unicode } from "../io"
import { BoundClass } from "./ji"

enum FlaccoSubset {
    SAGITTAL_COMPATIBLE = "sagittalCompatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

// Apotome-inversion comma class (repeats in a mirrored pattern at the half apotome)
interface CommaClass {
    pitch: Comma,
    id: Id<CommaClass>,
    representativeFlaccoId: Id<Flacco>,
}

type Element = string & { _ElementBrand: boolean }
type Flag = Element & { _FlagBrand: boolean }
type Accent = Element & { _AccentBrand: boolean }
type Shaft = Element & { _ShaftBrand: boolean }

type SagittalSymbol = string & { _SymbolBrand: boolean }

type Core = Flag[]

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco {
    id: Id<Flacco>,
    combo: Array<Flag | Accent>,
}

// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: Array<Id<BoundClass>>,
    commaClassIds: Array<Id<CommaClass>>,
    flaccoIds: Array<Id<Flacco>>,
}

// Todo: modeling flaccos/symbols/elements
//  - there is certainly a more economical way to handle things than the current SYMBOL_TO_UNICODE_MAP
//  Going from flacco to unicode instead... well not exactly... a core could map to a unicode, or a pair of accents...
//  Which makes me think we should go from flacco to ascii too, and flacco to smiley, and never have a "symbol" type
//  Although I'm not completely sure about that, because at least for now this is quite nice to have, since
//  Nocazoacs contain all the finalized reps of symbols in each flavor, rather than an ID pointer to a Symbol which does
//  - because these evo and revo keys don't specify that they are the ascii and the unicode for the entire accidental
//  And not just a symbol, it leads to some awkward names in the `nocazoacs` module. Consider clarifying.
//  - are all sagittal symbols up? is this a thing? e.g. apotomeShift currently assumes that, but that's all we need now
//  And flipSymbol currently assumes it's always up too. apotomeShift further assumes it's single-shaft
//  Maybe use Element combos, with ids, all valid symbols, wither up or down or what? So you actually look them up
//  - also this "SagittalSymbol" type, I use it in places to represent incomplete symbols,
//  Like when we split into accents and core for apotome complement computation
//  So it doesn't represent a finalized symbol, but just symbol material, which is I guess a tier beyond Element
//  Where Element represents flags with their shafts to indicate left/right, for instance
//  So this is a kind of confusing concept I think and perhaps we should just stay in the realm of elements until it is
//  Time to go to ASCII, Unicode, or Smiley. That might simplify a lot of the regexp stuff we're doing.
//  - we might also make use of a type called Accidental, and that'd be more final than SagittalSymbol?
//  And include conventionals potentially? but keep it mind that it could be unicode or ascii (or smiley i guess)
//  In addition to being either Evo or Revo...unless it's Accidentals that map to unicode, asciii, or smiley
//  - Or perhaps if it was the Accidental type which contained the evoAscii, revoAscii, evoUnicode, and revoUnicode
//  Then that would clarify, and it would be a constant called VALID_ACCIDENTALS which would be the lookup with an ID
//  So then the VALID_ACCIDENTALS could be hardcoded
//  It wouldn't much make sense to have the nocazoacs test return a list of arbitrary `accidentalId`s though...
//  I mean, it'd be nice for it to reduce a ton of the redundancy I'm finding there
//  Maybe it should be one of those test types where I call an "analyze" method on it so in test I can just see the
//  Whole darn thing spelled out and maintain that record of it, while the code can work in the abstract more
//  But it is the case that I'm capable of generating all the unicodes and asciis in the accidental individually
//  I'm not sure how I would have the nocazoac method find the thing, what would be the UUID? just the revo ascii?
//  Or wait how about this... since you were populating that test so far by searching for the combination of
//  { commaClass, commaDirection, apotomeCount } and then grabbing those evo/revo ascii/unicode
//  What if all SEVEN of those things are on an accidental? like literally all a NotationalCaptureZoneAccidental brings
//  To the table is pairing one of them's ID with a bound ID?
//  So then the VALID_ACCIDENTALS table is just hardcoded, and all I have to do in nocazoacs is pair the bound ids with
//  Accidental IDs... okay, I think we're on the right track, but would Accidental have ID? or address? because of the
//  Mirroring effect, the desire for negative IDs... should maybe both the Accidental and the Nocazoac have the combo
//  Of commaClassId, commaDirection, and apotomeCount, and use that as the link between them? But in that case, the
//  Nocazoacs would only require the boundClassIds and commaClassIds arrays and would be a super dumb computation
//  While the accidentals would require all three and would basically have displaced the entire complexity of the
//  Nocazoacs, except you'd only have to do it once, for the entirety of Sagittal. although again maybe it's just
//  Hardcoded...?

// Ranges from -2 to 2 apotomes
interface NotationCaptureZoneAccidental {
    boundClassId: Id<BoundClass>,

    commaClassId: Id<CommaClass>,       // This is the primary comma of the capture zone.
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,

    revoAscii: Ascii,
    evoAscii: Ascii<Flavor.EVO>,
    revoUnicode: Unicode,
    evoUnicode: Unicode<Flavor.EVO>,
}

enum Flavor {
    EVO = "evo",
    REVO = "revo",
}

export {
    FlaccoSubset,
    CommaClass,
    Flavor,
    Flacco,
    Flag,
    Accent,
    Shaft,
    Element,
    SagittalSymbol,
    Core,
    Notation,
    NotationCaptureZoneAccidental,
    // SymbolOptions,
}
