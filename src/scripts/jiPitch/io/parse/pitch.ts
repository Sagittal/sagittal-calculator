import {
    computePitchFromCents,
    computeScamonFromDecimal,
    computeScamonFromMonzo,
    computeScamonFromQuotient,
    IDENTIFYING_ACCIDENTAL_CHARS,
    IDENTIFYING_CENTS_CHARS,
    IDENTIFYING_COMMA_NAME_CHARS,
    IDENTIFYING_MONZO_CHARS,
    IDENTIFYING_QUOTIENT_CHARS,
    Io,
    NUMERIC_CHARS,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
    Scamon, stringify,
} from "../../../../general"
import {
    Ascii,
    computeCommaFromCommaNameQuotientAndSizeCategoryName,
    computeJiPitchFromAccidental,
    parseAscii,
    parseCommaName,
} from "../../../../sagittal"
import {PitchFormat} from "./types"

const parsePitch = (pitchIo: Io, pitchFormat?: PitchFormat): Scamon => {
    let pitch: Scamon

    if (
        pitchFormat === PitchFormat.COMMA_NAME
        || (pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS) && pitchIo.match(NUMERIC_CHARS))
    ) {
        const commaNameQuotientAndSizeCategoryName = parseCommaName(pitchIo)
        pitch = computeCommaFromCommaNameQuotientAndSizeCategoryName(commaNameQuotientAndSizeCategoryName)
    } else if (
        pitchFormat === PitchFormat.QUOTIENT
        || (pitchIo.match(IDENTIFYING_QUOTIENT_CHARS) && pitchIo.match(NUMERIC_CHARS))
    ) {
        const quotient = parseQuotient(pitchIo)
        pitch = computeScamonFromQuotient(quotient)
    } else if (
        pitchFormat === PitchFormat.MONZO
        || (pitchIo.match(IDENTIFYING_MONZO_CHARS) && pitchIo.match(NUMERIC_CHARS))
    ) {
        const monzo = parseMonzo(pitchIo)
        pitch = computeScamonFromMonzo(monzo)
    } else if (
        pitchFormat === PitchFormat.CENTS
        || (pitchIo.match(IDENTIFYING_CENTS_CHARS) && pitchIo.match(NUMERIC_CHARS))
    ) {
        const cents = parseCents(pitchIo)
        pitch = computePitchFromCents(cents)
    } else if (
        pitchFormat === PitchFormat.ACCIDENTAL
        // TODO: any way to simplify these NUMERIC_CHARS conditions
        || (pitchIo.match(IDENTIFYING_ACCIDENTAL_CHARS) && !pitchIo.match(NUMERIC_CHARS))
    ) {
        // TODO: perhaps this should be parseAccidental and it should take Io not Ascii, or both, or have a pass-thru
        const accidental = parseAscii(pitchIo as Ascii)

        // TODO: this should really be just pitch and if in ji context throw error if not
        //  Er, well, at the moment, there is no way to get a non-JI pitch from an accidental
        //  One could imagine telling this thing which EDO you're in or something, and it tempering stuff
        pitch = computeJiPitchFromAccidental(accidental)
    } else {
        const decimal = parseDecimal(pitchIo)
        pitch = computeScamonFromDecimal(decimal)
    }

    return pitch
}

export {
    parsePitch,
}
