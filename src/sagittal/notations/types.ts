import { Apotome, Comma, Count, Direction, Id, Name, NumericProperties } from "../../general"
import { SymbolLongAscii, SymbolUnicode } from "../io"
import { CommaAnalysis } from "../ji"
import { JiNotationLevel, Mina } from "./ji"

enum SymbolSubset {
    SAGITTAL_COMPATIBLE = "sagittalCompatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

type PrimaryComma<T extends NumericProperties = {}> =
    Comma<T>
    & { id: Id<PrimaryComma> }

type PrimaryCommaAnalysis<T extends NumericProperties = {}> =
    CommaAnalysis<T>
    & { id: Id<PrimaryComma> }

// Todo: DEFER UNTIL AFTER RESOLVE CONVO WITH DAVE RE: CLASSES
//  REALIZE ERD DIAGRAM FOR ELEMENTS, SYMBOLS, COMMAS, BOUNDS, CAPTURE ZONES, ACCIDENTALS, CLASSES THEREOF
//  So what this is here is symbol classes as they should be
//  But there are way too many things right now that are using these instead of comma classes
//  Like the JI Notation Bounds analysis, and the popular 2,3-free class script group, which are double-counting 
//  Comma classes should only go up to the half-apotome
//  What I have now as "primary commas" should actually be "comma classes"
//  - (from old note in half-apotome mirror spec, which I've since disagreed with, obviously) 
//  Ah ha! found this note. had lost it.
//  Original note: The idea of symbol *class* is great. But I'm wondering if maybe there's room for improvement.
//  I'm thinking in particular of how choices of comma above the half-apotome mirror are not independent.
//  (see: http://forum.sagittal.org/viewtopic.php?p=2317#p2317)
//  But I'm also not sure we want to shift the whole basis back to commas...
//  Yes perhaps the half-apotome mirror test should suffice here.
//  What I *had* been thinking was that only the commas up to the half apotome mirror would define class-dom.
//  - another question: Should elements be an array of references to other objects instead of hardcoded?
//  Probably, yes. but you should review how Dave thinks of symbols and elements before you do so
//  Because all I can remember right now is that your intuitions were a bit off
//  Note though that they are symbol CLASS elements, because they're irrespective of comma direction
//  - whatever you find, then make it so that in symbols.ts what's there now becomes a test expectation
//  And the implementation code is as calculated as possible (-2, -1, 0, +1, +2 apotomes, and SUPER/SUB)
//  As well as how their unicode and ascii, evo/revo, is calculated from elements

// Apotome-inversion comma class (repeats in a mirrored pattern at the half-apotome)
interface SymbolClass {               // ----> CommaClass
    elements: SymbolLongAscii[],      // ----> relocate this onto the FlAcCo as `combo: Array<Flag | Accent>`
    id: Id<SymbolClass>,              // ----> commaClassId: Id<CommaClass>,
    primaryCommaId: Id<PrimaryComma>, // ----> remove and inline the Comma; former primary commas are now comma classes
}

type SymbolClassAnalysis = Omit<SymbolClass, "primaryCommaId"> & {  // ---> CommaClassAnalysis
    primaryCommaAnalysis: PrimaryCommaAnalysis,                     // ---> remove and inline, per CommaClass
    ascii: SymbolLongAscii,                                         // So this is the representative symbol then
    unicode: SymbolUnicode,                                         // So this is the representative symbol then
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    smallestSymbolSubset: SymbolSubset,
}

/*
// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
type FlAcCo = {
    id: Id<FlAcCo>,
    combo: Array<Flag | Accent>,
}

type ElementProperties = {
    ascii: SymbolLongAscii,
}
type Flag = ElementProperties & { _FlagBrand: boolean }
type Accent = ElementProperties & { _AccentBrand: boolean }
type Shaft = ElementProperties & { _ShaftBrand: boolean }
type Element = Flag | Accent | Shaft

type Accidental = {
    flAcCoId: Id<FlAcCo>,
    commaClassId: Id<CommaClass>,
}
 */

interface Symbol {                          // ----> AccidentalAnalysis
    id: Id<Symbol>,
    
    // Per refactor whereby analyses in general will no longer extend but rather contain the entity they're analyzing,
    // This will relocate to living on the accidental as commaClassId: Id<CommaClass>,
    symbolClassId: Id<SymbolClass>,

    // Add: accidental: Accidental,
    // Add: elements: Array<Element>,
    // Add: primaryComma: Comma,    // which is a combination of a CommaClass's comma, direction, and -2 to 2 apotomes
    revoAscii: SymbolLongAscii,
    evoAscii: SymbolLongAscii<Flavor.EVO>,
    revoUnicode: SymbolUnicode,
    evoUnicode: SymbolUnicode<Flavor.EVO>,
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,
}

enum Flavor {
    EVO = "evo",
    REVO = "revo",
}

export {
    SymbolSubset,
    PrimaryComma,
    SymbolClass,
    Symbol,
    SymbolClassAnalysis,
    PrimaryCommaAnalysis,
    Flavor,
}
