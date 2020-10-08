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
    CommaAnalysis<T, PrimaryComma<T>>

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

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
/*
type FlAcCo = {
    id: Id<FlAcCo>,
    combo: Array<Flag | Accent>,
}

Notation = {
    boundClassIds: Array<Id<BoundClass>>,
    commaClassIds: Array<Id<CommaClass>>,
    flAcCoIds: Array<Id<FlAcCo>>,
}

State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
 */

// Ranges from -2 to 2 apotomes
interface Symbol {                          // ----> NotationCaptureZoneAccidental (bc per Level or Trojan, Binary, etc)
    id: Id<Symbol>,                         // ---> DELETED. a capture zone accidental does not need an ID.
                                            //      It gets looked up by its comma/captureZone ID, dir, & apotome count
    symbolClassId: Id<SymbolClass>,         // ---> commaClassId: Id<CommaClass>
    // Add: boundClassId: Id<Bound(Class)>  // Yeah, rename Bound to BoundClass please.
    commaDirection: Direction,
    apotomeCount: Count<Apotome>,

    revoAscii: SymbolLongAscii,
    evoAscii: SymbolLongAscii<Flavor.EVO>,
    revoUnicode: SymbolUnicode,
    evoUnicode: SymbolUnicode<Flavor.EVO>,
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
