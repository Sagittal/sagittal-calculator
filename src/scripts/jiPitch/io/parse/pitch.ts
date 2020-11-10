import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_QUOTIENT_CHARS,
    computePitchFromCents,
    computeScamonFromDecimal,
    computeScamonFromMonzo,
    computeScamonFromQuotient,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
    Scamon,
} from "../../../../general"
import {computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName} from "../../../../sagittal"
import {PitchFormat} from "./types"

const parsePitch = (pitchIo: Io, pitchFormat?: PitchFormat): Scamon => {
    let pitch: Scamon

    if (pitchFormat === PitchFormat.COMMA_NAME || pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const commaNameQuotientAndSizeCategoryName = parseCommaName(pitchIo)
        pitch = computeCommaFromCommaNameQuotientAndSizeCategoryName(commaNameQuotientAndSizeCategoryName)
    } else if (pitchFormat === PitchFormat.QUOTIENT || pitchIo.match(ANY_QUOTIENT_CHARS)) {
        const quotient = parseQuotient(pitchIo)
        pitch = computeScamonFromQuotient(quotient)
    } else if (pitchFormat === PitchFormat.MONZO || pitchIo.match(ANY_MONZO_CHARS)) {
        const monzo = parseMonzo(pitchIo)
        pitch = computeScamonFromMonzo(monzo)
    } else if (pitchFormat === PitchFormat.CENTS || pitchIo.match(ANY_CENTS_CHARS)) {
        const cents = parseCents(pitchIo)
        pitch = computePitchFromCents(cents)
    } else {
        const decimal = parseDecimal(pitchIo)
        pitch = computeScamonFromDecimal(decimal)
    }

    return pitch
}

export {
    parsePitch,
}
