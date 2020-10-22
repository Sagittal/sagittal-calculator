import {Apotome, Count, Direction, Id, NumericProperties, Scamon} from "../../general"
import {Flacco} from "../accidental"
import {CommaClass} from "../ji"

type BoundClass<T extends NumericProperties = {}> = {
    id: Id<BoundClass>,
    pitch: Scamon<T & { rational: false }>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
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
// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: Array<Id<BoundClass>>,
    commaClassIds: Array<Id<CommaClass>>,
    flaccoIds: Array<Id<Flacco>>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  If the thing only has one bound on it, then maybe the whole thing can be called a CaptureZone
//  Even if it wasn’t just one side of the bounds, you could still have it be captureZone.zone
//  And maybe whatever else is called CaptureZone just needs to get displaced because it’s not as important
// Flacco + CommaClassId + BoundClassId combination = Fla + Com + Bo; ranges from -2 to 2 apotomes
interface Flacombo {
    flaccoId: Id<Flacco>,
    commaClassId: Id<CommaClass>,
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,
    boundClassId: Id<BoundClass>,
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  This whole AOR is kind of blurry between notation/ and accidental/ modules right now.
//  Should all this stuff go into a flavor/ module?
//  I think the section stuff should be pulled back into notations/

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  And it might be nice if you didn’t need both a name and an object...
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

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  Probably some improvement you could do around this w/r/t actual Aim, since they're basically the same...
//  And this could be confusing bc in Evo, the Sagittal symbol will aim down... and the compatible doesn't have "aim".
//  So maybe it was better when this was positive/negative? but then what would this part of the Section be called?
enum AimSection {
    U = "u",                // Up
    D = "d",                // Down
}

enum ApotomeSection {
    _1 = "1",               // Within 1 apotome of natural
    _2 = "2",               // Between 1 and 2 apotomes of natural
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  I think you can simplify it down to binary here, too: ShaftSection ODD/EVEN where ODD = a/b and EVEN = c
//  Even though in Evo you don't see the odd shaft count, I still somehow think it's acceptable.
enum AccidentalSection {
    A = "a",                // Shaft count: n,      Abs apotome count: m,       Comma direction: away from natural
    B = "b",                // Shaft count: n,      Abs apotome count: m + 1,   Comma direction: toward natural
    C = "c",                // Shaft count: n + 1,  Abs apotome count: m + 1,   Comma direction: toward natural
}

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  What if you just made all of these booleans? so it'd be... negative, second, even?

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  How about a fourth property to section: comma super/sub? P/B
//  Then maybe you don’t need apotome count or comma direction
//  It’s just the three IDs input (bound, comma, flacco) and then this section thing

interface Section {
    aimSection: AimSection,
    apotomeSection: ApotomeSection,
    accidentalSection: AccidentalSection,
}

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
