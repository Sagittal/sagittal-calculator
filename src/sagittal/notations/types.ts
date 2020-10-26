import {SymbolClassId} from "../accidental"
import {BoundClassId} from "../bound"

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
