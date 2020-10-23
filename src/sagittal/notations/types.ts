import {Apotome, Count, Direction, Id, NumericProperties, Scamon} from "../../general"
import {Flacco} from "../accidental"
import {CommaClass} from "../ji"

type BoundClass<T extends NumericProperties = {}> = {
    id: Id<BoundClass>,
    pitch: Scamon<T & { rational: false }>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION: MINIMAL NOTATION SHAPE
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

// Todo: FLACOMBO, SECTION, NOTATION GENERATION: MINIMAL FLACOMBO SHAPE
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

// Todo: FLACOMBO, SECTION, NOTATION GENERATION: MINIMAL SECTION SHAPE
//  I think you can simplify it down to binary for AccidentalSection, too: ShaftSection ODD/EVEN ODD = a/b and EVEN = c
//  Even though in Evo you don't see the odd shaft count, I still somehow think it's acceptable.
//  What if you just made all of these booleans? so it'd be... negative, second, even? that would solve the Aim problem.
//  - Or about a fourth property to section: comma super/sub? P/B
//  Then maybe you don’t need apotome count or comma direction
//  It’s just the three IDs input (bound, comma, flacco) and then this section thing
//  - Probably some improvement you could do around AimSection w/r/t actual Aim, since they're basically the same...
//  And this could be confusing bc in Evo, the Sagittal symbol will aim down... and the compatible doesn't have "aim".
//  So maybe it was better when this was positive/negative? but then what would this part of the Section be called?
//  - And it might be nice if you didn’t need both a name and an object...
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

// Todo: FLACOMBO, SECTION, NOTATION GENERATION: POST-FLACOMBO SHAPE
//  If the thing only has one bound on it, then maybe the whole thing can be called a CaptureZone
//  Even if it wasn’t just one side of the bounds, you could still have it be captureZone.zone
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
