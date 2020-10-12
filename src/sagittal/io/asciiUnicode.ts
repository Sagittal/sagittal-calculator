import { Maybe } from "../../general"
import { EXTREME_NOTATION_CAPTURE_ZONE_ACCIDENTALS, NotationCaptureZoneAccidental } from "../notations"
import { Ascii, Unicode } from "./types"

const unicodeFromAscii = (ascii: Ascii): Unicode => {
    const extremeNotationCaptureZoneAccidental: Maybe<NotationCaptureZoneAccidental> =
        EXTREME_NOTATION_CAPTURE_ZONE_ACCIDENTALS.find(
            (extremeNotationCaptureZoneAccidental: NotationCaptureZoneAccidental): boolean => {
                return extremeNotationCaptureZoneAccidental.revoAscii === ascii
            })

    if (!extremeNotationCaptureZoneAccidental) {
        throw new Error(`No Extreme notation capture zone accidental found with ascii ${ascii}`)
    }

    return extremeNotationCaptureZoneAccidental.revoUnicode
}

export {
    unicodeFromAscii,
}
