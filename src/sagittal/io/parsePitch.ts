import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_QUOTIENT_CHARS,
    computePitchFromCents,
    computePitchFromDecimal,
    computePitchFromMonzo,
    computePitchFromQuotient,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
    Pitch,
} from "../../general"
import { computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName } from "../ji"

const parsePitch = (pitchIo: Io): Pitch => {
    let pitch: Pitch

    if (pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        const commaNameQuotientAndSizeCategoryName = parseCommaName(pitchIo)
        pitch = computeCommaFromCommaNameQuotientAndSizeCategoryName(commaNameQuotientAndSizeCategoryName)
    } else if (pitchIo.match(ANY_QUOTIENT_CHARS)) {
        const quotient = parseQuotient(pitchIo)
        pitch = computePitchFromQuotient(quotient)
    } else if (pitchIo.match(ANY_MONZO_CHARS)) {
        const monzo = parseMonzo(pitchIo)
        pitch = computePitchFromMonzo(monzo)
    } else if (pitchIo.match(ANY_CENTS_CHARS)) {
        const cents = parseCents(pitchIo)
        pitch = computePitchFromCents(cents)
    } else {
        const decimal = parseDecimal(pitchIo)
        pitch = computePitchFromDecimal(decimal)
    }

    return pitch
}

export {
    parsePitch,
}
