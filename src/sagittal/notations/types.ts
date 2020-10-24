import {Apotome, Count, Direction, Id, NumericProperties, Scamon} from "../../general"
import {Flacco} from "../accidental"
import {CommaClass} from "../ji"

// Todo: FLACOMBO, SECTION, NOTATION GENERATION 1: SYMBOL CLASS (SUBSET) / FIRST SECTION / ID/NAME QUESTIONS / GETTING
//  I'm not quite ready for Symbol to have ID yet
//  At that stage, you'd want a const SYMBOLS: Symbol[] and generate it and test it, and maybe apotome shift
//  Apotome complement methods would only be used in test, because you'd be "get"ting the symbol, not computing it
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
//  - Maybe it really should be Symbol subset, not Flacco subset,
//  Because some Flaccos cross over in the Revo notation, you know?
//  E.g. )||( is in Spartan multi-shaft, but no single-shaft right scroll
//  Or is the problem only really solvable by that Flaccos only apply to the 1-shaft symbols,
//  And multi-shaft symbols are just not even flag & accent combos??
//  I mean, you could solve it by just calling them symbol subsets, but then you have to include all the redundancy...
//  Or how about saying that notations have only comma subsets?
//  Now this might be intertwined with the problem of whether a notation can be specified by ONLY one of
//  A list of Flacco IDs or a list of CommaClass IDs
//  Okay, well but actually, a symbol subset is meaningfully different than a flacco subset, because of like how
//  Spartan contains )||( as I just said above, you know?
//  In other words, we don't currently have captured anywhere an array of valid symbols, because the combinations of
//  Accents and Flags in the single-shaft does not necessarily translate to 2-shaft. I mean I guess we could have
//  Something that was intermediate, that included anything from 1 to 2 shafts, and then this becomes intertwined with
//  The questions of limiting the apotome shift and apotome complement methods to something *like* a section but not
//  - And Yeah Flacco is totally one of those things which should go by name, not ID
//  Or perhaps maybe just more like we've got the records of Core by CoreName, right
//  And probably also at some point Symbol by SymbolName...?
//  But think about the fact that having the order in the form of the ID is actually quite handy sometimes...
//  Although you could include the order # as part of the ID I suppose and then you'd still get the benefit of it
//  As long as the name could still autocomplete
//  Yeah I guess this is really the thing - who is all this for? What are we trying to ensure?
//  That no one can put it into the code, like someone working on the code later? Or you can't input it from the app?
//  Without an enum to limit possibilities, the ID # doesn't really limit anything
//  Anyway, the other example is CommaClass, like:
//  Hey here's an idea... what if everywhere instead of ID we used names, so we could see what we were doing? e.g.
//  Const COMMA_CLASS_1_u = {
//    Name: "1u" as Name<Comma>,
//    RepresentativeFlaccoId: 0 as Id<Flacco>,
//    Pitch: UNISON,
//  }
//  And I wonder if Class<> shouldn't also be a parameterized type since we use that so much now?
//  In which case it would simply add an Id to a thing? and put the thing itself on a key called... object?
//  I think you'd have to make it generic, like it couldn't put a custom key on there based on the type parameter...
//  Or maybe we should just imagine a world without IDs at all...
//  Like I say above, the ID doesn't really limit anything. An enum you used as a key on some object would, though.
//  It should be a solvable problem for the bound IDs to still order them in the JI notation bound class analysis
//  - Ah okay, here's an insight: maybe they still get IDs on them as a sort of INSTANCE brand
//  So that you can't just go and manufacture whatever one you want, knowing the structure, but have to ask for one
//  From the limited set of them. Okay, I like that.
//  So then, how would we request a Symbol? like a Flacco? no okay Flacco currently you request it by ID.
//  What I was thinking of was getArm, getHead, and getCore. so a symbol you'd need to pass it the same things you'd
//  Pass for a core, (head, shafts, aim) but then also the arm.
//  It's either that, or you pass it a Flacco name and then shafts and aim,
//  So the flacco would consolidate the head & arm. I like that less because it's not respecting the principle of
//  Minimum enums, of eliminating redundancy. But actually if you get really strict about that, then some of the
//  Validity enums we've still got around: the ArmName, HeadName... should those not be broken down by the same logic?
//  I feel like the answer is "no". But why? Is it just because they are *helpful* to have? I mean, the ...
//  Or is it just good to *name things which are arbitrarily limited*? In which case we should name these symbol classes
//  So there's actually two stages of validity that I should try to capture here.
//  Flacco is the combo of valid head and valid arm. and so you should go ahead and get that there.
//  Then Symbol should capture the valid combo of flacco, shafts, and aim (which is almost everything, just a bunch
//  Cannot have even shafts)
//  Or rather Symbol class should capture just either one or two shafts, and then Symbol goes to which Section you're in
//  Whoa... but then don't we get into a place where we've got two different layers of shaft information, i.e.
//  One layer whether it's odd or even, and another layer whether it's >2 or not? I'm a bit torn about this.
type BoundClass<T extends NumericProperties = {}> = {
    id: Id<BoundClass>,
    pitch: Scamon<T & { rational: false }>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION 2: MINIMAL NOTATION SHAPE
//  I really think you should be able to do this with only flaccoIds and boundClassIds
//  And while it does make sense for commaClasses to point to flaccos (their representative flacco)
//  It also makes sense that when you get a flacco, it comes with a comma, regardless whether its EDO tuning
//  Because the symbol in-and-of-itself doesn't have a way of communicating what type of notation its in
//  You just always get that implication of that JI underpinning
//  (and it may be up to the EDO notation to temper whatever comma it gets back for that flacco)
//  Okay, but if a flacco came with a comma class, it'd also have to say whether it was up or down, right?
//  At which point a Flacco on its own has a lot of info
//  And if Symbol extends it, then it would have that info as well. Maybe that's fine. It is after all just a reference
//  To the comma, right? That's the minimal interface, while also trying to capture the inextricable link between
//  The symbol and the comma?
//  And this synthesizes with the effort to get symbols by ID, so you have to do less representing of their entirety
//  In test I think...
//  - So I kind of want to only need to supply stuff up to the half-apotome
//  Which lends itself to only supplying the commas
//  We don't really think of the notation as being defined by the commas... usually as defined by the symbols...
//  Maybe we should just change that thinking though
//  - Also, what if we did something like this: either commas could specify the OTHER bigger flacco too, if any
//  Or the flacco could specify if it has a halfApotomeMirrorFlacco...
// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: Array<Id<BoundClass>>,
    commaClassIds: Array<Id<CommaClass>>,
    flaccoIds: Array<Id<Flacco>>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION 3: MINIMAL FLACOMBO SHAPE
//  Kind of crazy, it doesn't need commaClassId for evo at all... kind of makes me want to get rid of it in
//  Revo and just say whether it's in section B or whatever (I think at some point I may have been going the other
//  Way, i.e. trying to get rid of flaccoId instead of commaClassId but I thin this way makes more sense actually
//  - Later: wait no again, all you need to know is whether they equal
//  (This next bit extracted from a related chunk in czap.ts)
//  Wait is that seriously all you need to know? (whether flaccoId === commaClassId or not) It feels a bit weird,
//  Like maybe you should just go ahead and include the flacco id in the accidental key?
//  Oor no, stick to your guns about that being weird in Revo?
//  Although there's no such thing as accidental key anymore...
//  - If you simplify the section to shaft odd/even, I'm pretty sure you shouldn't need apotomeCount here anymore
//  Which would be good
//  Although I tried that one point, and I hadn't thought it through clearly enough
//  So clearly there's a difference between apotomeCount, which changes along with commas, and there are 5 zones
//  And apotomeSection, which also changes with commas, but is halfway offset, so there are only 4 zones
//  - And the fact that we're importing from notation/section here I think just speaks to the fact that it
//  Should be contained in the flacombo, rather than needing to be computed from it
// Flacco + CommaClassId + BoundClassId combination = Fla + Com + Bo; ranges from -2 to 2 apotomes
interface Flacombo {
    flaccoId: Id<Flacco>,
    commaClassId: Id<CommaClass>,
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,
    boundClassId: Id<BoundClass>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION 4: MINIMAL SECTION SHAPE
//  I think you can simplify it down to binary for AccidentalSection, too: ShaftSection ODD/EVEN ODD = a/b and EVEN = c
//  Even though in Evo you don't see the odd shaft count, I still somehow think it's acceptable.
//  What if you just made all of these booleans? so it'd be... negative, second, even? that would solve the Aim problem.
//  - Or about a fourth property to section: comma super/sub? P/B
//  Then maybe you don’t need apotome count or comma direction
//  It’s just the three IDs input (bound, comma, flacco) and then this section thing
//  - Probably some improvement you could do around AimSection w/r/t actual Aim, since they're basically the same...
//  And this could be confusing bc in Evo, the Sagittal symbol will aim down... and the compatible doesn't have "aim".
//  So maybe it was better when this was positive/negative? but then what would this part of the Section be called?
//  - And it might be nice if you did not need both a name and an object...
//  How many places do you really use the name for short?
enum SectionName {
    D2C = "d2c",
    D2B = "d2b",
    D2A = "d2a",
    D1C = "d1c",
    D1B = "d1b",
    D1A = "d1a",
    U1A = "u1a",
    U1B = "u1b",
    U1C = "u1c",
    U2A = "u2a",
    U2B = "u2b",
    U2C = "u2c",
}
enum AimSection {
    U = "u",                // Up
    D = "d",                // Down
}
enum ApotomeSection {
    _1 = "1",               // Within 1 apotome of natural
    _2 = "2",               // Between 1 and 2 apotomes of natural
}
enum AccidentalSection {
    A = "a",                // Shaft count: n,      Abs apotome count: m,       Comma direction: away from natural
    B = "b",                // Shaft count: n,      Abs apotome count: m + 1,   Comma direction: toward natural
    C = "c",                // Shaft count: n + 1,  Abs apotome count: m + 1,   Comma direction: toward natural
}
interface Section {
    aimSection: AimSection,
    apotomeSection: ApotomeSection,
    accidentalSection: AccidentalSection,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION 5: POST-FLACOMBO SHAPE
//  If the thing only has one bound on it, then maybe the whole thing can be called a CaptureZone
//  Even if it was not just one side of the bounds, you could still have it be captureZone.zone
//  And maybe whatever else is called CaptureZone just needs to get displaced because it’s not as important
//  - And shite I just realized that you won't be able to get the full capture zone without info from other elements
//  That is, the single individual flacombo won't have all the necessary info... so maybe you really should just
//  Have more of a single "away-er" bound, relative to the nearest apotome? and if it's missing, that means it
//  Straddles it? whether that's an apotome midpoint or apotome multiple?
//  So that will mean more infrastructure/overhead/reasoning about the bounds, rather than it being cut and dry
//  As a Zone... but maybe better overall?
/*
maybe something like a Czap, or maybe you make do with Flacombo / CaptureZone / Section
 */

export {
    BoundClass,
    Notation,
    Flacombo,
    Section,
    SectionName,
    AimSection,
    AccidentalSection,
    ApotomeSection,
}
