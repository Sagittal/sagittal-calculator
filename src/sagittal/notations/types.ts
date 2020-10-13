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

// Apotome-inversion comma class (repeats in a mirrored pattern at the half-apotome)
type CommaClass = {
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

// Ranges from -2 to 2 apotomes
interface NotationCaptureZoneAccidental {
    // TODO: If anything is a "primary comma", it's a "compute" from this + dir + apotome count
    //  - also, okay, interesting, I guess we don't need this yet for any current script group? kinda surprising...
    //  Almost feel like we *should* be using it, like we're getting around it somehow. like maybe all the work we do
    //  To compute the bounded symbols could be circiumvrented if we actually built this ability to generate these?
    commaClassId: Id<CommaClass>,
    boundClassId: Id<BoundClass>,
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
}
