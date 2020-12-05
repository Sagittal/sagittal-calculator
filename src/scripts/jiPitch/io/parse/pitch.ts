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
    isUndefined,
    Maybe,
    NUMERIC_CHARS,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
    Scamon,
} from "@sagittal/general"
import {
    computeCommaFromCommaNameQuotientAndSizeCategory,
    computeJiPitchFromAccidental,
    parseAccidental,
    parseCommaName,
} from "@sagittal/system"
import {PitchFormat} from "./types"

const parsePitch = (pitchIo: Io, pitchFormat?: PitchFormat): Scamon => {
    let pitch: Maybe<Scamon> = undefined

    if (pitchIo.match(NUMERIC_CHARS)) {
        if (pitchFormat === PitchFormat.COMMA_NAME || pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
            const commaNameQuotientAndSizeCategoryName = parseCommaName(pitchIo)
            pitch = computeCommaFromCommaNameQuotientAndSizeCategory(commaNameQuotientAndSizeCategoryName)
        } else if (pitchFormat === PitchFormat.QUOTIENT || pitchIo.match(IDENTIFYING_QUOTIENT_CHARS)) {
            const quotient = parseQuotient(pitchIo)
            pitch = computeScamonFromQuotient(quotient)
        } else if (pitchFormat === PitchFormat.MONZO || pitchIo.match(IDENTIFYING_MONZO_CHARS)) {
            const monzo = parseMonzo(pitchIo)
            pitch = computeScamonFromMonzo(monzo)
        } else if (pitchFormat === PitchFormat.CENTS || pitchIo.match(IDENTIFYING_CENTS_CHARS)) {
            const cents = parseCents(pitchIo)
            pitch = computePitchFromCents(cents)
        } else {
            const decimal = parseDecimal(pitchIo)
            pitch = computeScamonFromDecimal(decimal)
        }
    } else if (pitchFormat === PitchFormat.ACCIDENTAL || pitchIo.match(IDENTIFYING_ACCIDENTAL_CHARS)) {
        const accidental = parseAccidental(pitchIo)

        pitch = computeJiPitchFromAccidental(accidental)
    } else if (pitchFormat === PitchFormat.MONZO || pitchIo.match(IDENTIFYING_MONZO_CHARS)) {
        const monzo = parseMonzo(pitchIo)
        pitch = computeScamonFromMonzo(monzo)
    }

    if (isUndefined(pitch)) throw new Error(`Could not identify format of pitch ${pitchIo}`)

    return pitch
}

export {
    parsePitch,
}
