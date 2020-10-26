import {SymbolClassId} from "../accidental"
import {BoundClassId} from "../bound"

// Todo: FLACOMBO, SECTION, NOTATION GENERATION; SYMBOL CLASS (SUBSET) / FIRST SECTION / ID/NAME QUESTIONS / GETTING
//  - I like that it's SymbolClass but Sagittal, by the way, because SymbolClass may well map to Evo flavor which
//  Contains Sagittal-compatible glyphs, not Sagittal glyphs.

// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: BoundClassId[],
    symbolClassIds: SymbolClassId[],
}

interface CaptureZone {
    boundClassId: BoundClassId,
    symbolClassId: SymbolClassId,
    section: Section,
}

interface Section {
    negated: boolean,               // Below natural
    shifted: boolean,               // Greater than 1 apotome away from natural
    mirrored: boolean,              // Between 0.5 and 1, or 1.5 and 2, apotomes away from the natural
}

export {
    Notation,
    CaptureZone,
    Section,
}
