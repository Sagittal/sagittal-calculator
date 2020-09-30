import {
    ANY_CENTS_CHARS,
    ANY_MONZO_CHARS,
    ANY_QUOTIENT_CHARS,
    computeNumberFromCents,
    IDENTIFYING_COMMA_NAME_CHARS,
    Io,
    parseCents,
    parseDecimal,
    parseMonzo,
    parseQuotient,
    Real,
} from "../../general"
import { computeCommaFromCommaNameQuotientAndSizeCategoryName, parseCommaName } from "../ji"

const parsePitch = (pitchIo: Io): Real => {
    let pitch: Real
    if (pitchIo.match(IDENTIFYING_COMMA_NAME_CHARS)) {
        pitch = computeCommaFromCommaNameQuotientAndSizeCategoryName(parseCommaName(pitchIo))
    } else if (pitchIo.match(ANY_QUOTIENT_CHARS)) {
        pitch = { quotient: parseQuotient(pitchIo) }
    } else if (pitchIo.match(ANY_MONZO_CHARS)) {
        pitch = { monzo: parseMonzo(pitchIo) }
    } else if (pitchIo.match(ANY_CENTS_CHARS)) {
        pitch = { decimal: computeNumberFromCents(parseCents(pitchIo)) }
    } else {
        pitch = { decimal: parseDecimal(pitchIo) }
    }

    return pitch
}

export {
    parsePitch,
}
