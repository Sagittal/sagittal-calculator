import { Apotome, Comma, Count, Direction, Id, Name, NumericProperties } from "../../general"
import { Ascii, Unicode } from "../io"
import { CommaAnalysis } from "../ji"
import { Bound, JiNotationLevel, Mina } from "./ji"

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
interface CommaClass {
    id: Id<CommaClass>,
    primaryCommaId: Id<PrimaryComma>, // ----> remove and inline the Comma; former primary commas are now comma classes
}

type CommaClassAnalysis = Omit<CommaClass, "primaryCommaId"> & {
    primaryCommaAnalysis: PrimaryCommaAnalysis,                 // ---> remove and inline, per CommaClass
    ascii: Ascii,                                               // So this is the representative symbol then
    unicode: Unicode,                                           // So this is the representative symbol then
    introducingJiNotationLevel: JiNotationLevel,
    minaName: Name<Mina>,
    smallestSymbolSubset: SymbolSubset,
}

/*
type ElementProperties = {
    ascii: Ascii,
}
later use this ^^^ instead of Ascii directly so it can have primary comma etc.
 */
type Elemental = string & { _ElementBrand: boolean }
type Flag = Elemental & { _FlagBrand: boolean }
type Accent = Elemental & { _AccentBrand: boolean }
type Shaft = Elemental & { _ShaftBrand: boolean }
type Element = Flag | Accent | Shaft
type SagittalSymbol = Elemental & { _SymbolBrand: boolean }

// Flag and Accent Combination; basically a "symbol class" (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
type Flacco = {
    id: Id<Flacco>,
    combo: Array<Flag | Accent>,
}

/*
Notation = {
    boundClassIds: Array<Id<BoundClass>>,
    commaClassIds: Array<Id<CommaClass>>,
    flAcCoIds: Array<Id<FlAcCo>>,
}

State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
 */

// Ranges from -2 to 2 apotomes
interface NotationCaptureZoneAccidental {
    commaClassId: Id<CommaClass>,
    boundClassId: Id<Bound>                 // Yeah, rename Bound to BoundClass please.
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
    SymbolSubset,
    PrimaryComma,
    CommaClass,
    CommaClassAnalysis,
    PrimaryCommaAnalysis,
    Flavor,
    Flacco,
    Flag,
    Accent,
    Shaft,
    Element,
    SagittalSymbol,
}
